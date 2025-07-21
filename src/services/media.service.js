// import { db, storage } from "../../../firebaseAdmin";
// import { MediaType, MediaFunctionality } from "../types/media.types";
// import { exec } from "child_process";
// import { promises as fs } from "fs";
// import os from "os";
// import path from "path";
// import { v4 as uuid } from "uuid";
// import sharp from "sharp";
// import UsersService from "../../users/services/users.service";

// const mediaCollection = db.collection("media");

// const FilesService = {
//   async uploadFile(dataBuffer, filename) {
//     const bucket = storage.bucket();
//     const fileRef = bucket.file(`media/${uuid()}-${filename}`);
//     await fileRef.save(dataBuffer, {
//       metadata: { contentType: "application/octet-stream" },
//     });
//     const [url] = await fileRef.getSignedUrl({
//       action: "read",
//       expires: "03-17-2030",
//     });
//     console.log(`File uploaded to: ${url}`);
//     return { Key: fileRef.name, Location: url };
//   },

//   async uploadFiles(files) {
//     const uploadPromises = files.map((fileData) =>
//       this.uploadFile(fileData.dataBuffer, fileData.filename)
//     );
//     return Promise.all(uploadPromises);
//   },

//   async removeFile(key) {
//     const bucket = storage.bucket();
//     const fileRef = bucket.file(key);
//     await fileRef.delete();
//     console.log(`File ${key} deleted from storage.`);
//   },
// };

// class MediaService {
//   constructor() {
//     this.usersService = UsersService;
//     this.filesService = FilesService;
//   }

//   async create(
//     dataBuffer,
//     filename,
//     userId,
//     size,
//     mimetype,
//     trimVal,
//     durationVal,
//     functionality,
//     videoWidth,
//     videoHeight,
//     network
//   ) {
//     const user = await this.usersService.findUserById(userId);
//     if (!user || !user.companyId) {
//       throw new Error("User or associated company not found.");
//     }

//     const companyId = user.companyId;

//     if (!network || network.length === 0) {
//       const file = await this.filesService.uploadFile(dataBuffer, filename);

//       if (functionality === "menu") {
//         return {
//           url: file.Location,
//         };
//       }

//       const fileExtension = mimetype.split("/").shift();

//       const newMediaData = {
//         name: filename,
//         size: size,
//         companyId: companyId,
//         key: file.Key,
//         url: file.Location,
//         type: this.isImageType(fileExtension)
//           ? MediaType.image
//           : MediaType.video,
//         functionality: this.isFunctionality(functionality),
//         createdAt: new Date(),
//       };

//       const docRef = await mediaCollection.add(newMediaData);
//       const newMediaSnapshot = await docRef.get();
//       return { id: newMediaSnapshot.id, ...newMediaSnapshot.data() };
//     }

//     let processedBuffer = dataBuffer;
//     const mediaEntries = [];
//     let file;

//     const isTikTok = network.includes("tiktok");
//     const isFacebookInstagram =
//       network.includes("facebook") || network.includes("instagram");

//     if (isTikTok) {
//       console.log("Processing media for TikTok...");
//       processedBuffer = await this.processTikTokMedia(
//         dataBuffer,
//         mimetype,
//         videoWidth,
//         videoHeight,
//         durationVal
//       );
//       file = await this.filesService.uploadFile(processedBuffer, filename);
//       const tiktokMediaData = {
//         name: filename,
//         size: size,
//         companyId: companyId,
//         key: file?.Key,
//         url: file?.Location,
//         type: this.isImageType(mimetype.split("/")[0])
//           ? MediaType.image
//           : MediaType.video,
//         functionality: MediaFunctionality.tiktokReels,
//         createdAt: new Date(),
//       };
//       const docRef = await mediaCollection.add(tiktokMediaData);
//       const snapshot = await docRef.get();
//       mediaEntries.push({ id: snapshot.id, ...snapshot.data() });
//     }

//     if (isFacebookInstagram) {
//       if (trimVal && durationVal) {
//         processedBuffer = await this.processVideo(dataBuffer, {
//           trim: trimVal,
//           duration: durationVal,
//           format: "mp4",
//           width: videoWidth,
//           height: videoHeight,
//         });
//       } else if (isTikTok) {
//         processedBuffer = dataBuffer;
//       } else {
//         processedBuffer = dataBuffer;
//       }
//       file = await this.filesService.uploadFile(processedBuffer, filename);
//       const reelMediaData = {
//         name: filename,
//         size: size,
//         companyId: companyId,
//         key: file?.Key,
//         url: file?.Location,
//         type: this.isImageType(mimetype.split("/")[0])
//           ? MediaType.image
//           : MediaType.video,
//         functionality: this.isFunctionality(functionality),
//         createdAt: new Date(),
//       };
//       const docRef = await mediaCollection.add(reelMediaData);
//       const snapshot = await docRef.get();
//       mediaEntries.push({ id: snapshot.id, ...snapshot.data() });
//     }

//     return mediaEntries.map((media) => media.id);
//   }

//   async createMultiple(files, userId, functionality, network) {
//     console.log("files", files);
//     console.log("userId", userId);
//     console.log("functionality", functionality);
//     console.log("network", network);

//     const user = await this.usersService.findUserById(userId);
//     if (!user || !user.companyId) {
//       throw new Error("User or associated company not found.");
//     }
//     const companyId = user.companyId;

//     const processedFiles = await Promise.all(
//       files.map(async (fileData) => {
//         let processedBuffer = fileData.buffer;

//         if (functionality === "tiktok") {
//           console.log("Processing media for TikTok...");
//           processedBuffer = await this.processTikTokMedia(
//             fileData.buffer,
//             fileData.mimetype
//           );
//         }

//         return {
//           dataBuffer: processedBuffer,
//           filename: fileData.originalname,
//         };
//       })
//     );

//     console.log("createMultiple | processedFiles", processedFiles);

//     const uploadResults = await this.filesService.uploadFiles(processedFiles);

//     console.log("createMultiple | uploadResults", uploadResults);

//     const savedMedia = await Promise.all(
//       uploadResults.map(async (file, index) => {
//         const fileExtension = files[index].mimetype.split("/").shift();

//         const newMediaData = {
//           name: files[index].originalname,
//           size: files[index].size,
//           companyId: companyId,
//           key: file.Key,
//           url: file.Location,
//           type: this.isImageType(fileExtension)
//             ? MediaType.image
//             : MediaType.video,
//           functionality: this.isFunctionality(functionality),
//           createdAt: new Date(),
//         };

//         const docRef = await mediaCollection.add(newMediaData);
//         const snapshot = await docRef.get();
//         return { id: snapshot.id, ...snapshot.data() };
//       })
//     );

//     console.log("createMultiple | savedMedia", savedMedia);

//     return savedMedia;
//   }

//   async processTikTokMedia(
//     inputBuffer,
//     mimetype,
//     videoWidth,
//     videoHeight,
//     duration
//   ) {
//     console.log("mimetype", mimetype);
//     const fileType = mimetype.split("/")[0];

//     if (fileType === "video") {
//       return this.processTikTokVideo(
//         inputBuffer,
//         videoWidth,
//         videoHeight,
//         duration
//       );
//     } else if (fileType === "image") {
//       return this.processTikTokImage(inputBuffer);
//     } else {
//       throw new Error("Unsupported media type for TikTok");
//     }
//   }

//   async processTikTokVideo(inputBuffer, width, height, duration) {
//     return new Promise(async (resolve, reject) => {
//       const tempDir = path.join(os.tmpdir(), "TikTokVideoProcessor-temp");
//       const inputFileName = `${uuid()}.mp4`;
//       const outputFileName = `${uuid()}-tiktok-processed.mp4`;
//       const inputFilePath = path.join(tempDir, inputFileName);
//       const outputFilePath = path.join(tempDir, outputFileName);

//       try {
//         await fs.mkdir(tempDir, { recursive: true });
//         await fs.writeFile(inputFilePath, inputBuffer);

//         const finalWidth = Math.max(360, Math.min(width, 4096));
//         const finalHeight = Math.max(360, Math.min(height, 4096));
//         const finalDuration = Math.min(duration, 10 * 60);
//         const frameRate = 30;

//         const ffmpegCommand = `ffmpeg -i ${inputFilePath} -vf "scale=${finalWidth}:${finalHeight}" -r ${frameRate} -t ${finalDuration} -c:v libx264 -preset fast -crf 23 -c:a aac -strict experimental -b:a 192k ${outputFilePath}`;

//         exec(ffmpegCommand, async (ffmpegError) => {
//           if (ffmpegError) {
//             await fs.unlink(inputFilePath).catch(() => {});
//             await fs.unlink(outputFilePath).catch(() => {});
//             await fs
//               .rmdir(tempDir, { recursive: true, force: true })
//               .catch(() => {});
//             return reject(new Error(`FFmpeg error: ${ffmpegError.message}`));
//           }

//           try {
//             const outputBuffer = await fs.readFile(outputFilePath);

//             await fs.unlink(inputFilePath);
//             await fs.unlink(outputFilePath);
//             await fs
//               .rmdir(tempDir, { recursive: true, force: true })
//               .catch(() => {});

//             resolve(outputBuffer);
//           } catch (fileError) {
//             reject(new Error(`File handling error: ${fileError.message}`));
//           }
//         });
//       } catch (error) {
//         reject(new Error(`Processing error: ${error.message}`));
//       }
//     });
//   }

//   async processTikTokImage(inputBuffer) {
//     return sharp(inputBuffer)
//       .resize({ width: 1080, height: 1080, fit: "inside" })
//       .toFormat("jpeg")
//       .toBuffer();
//   }

//   async processVideo(inputBuffer, options) {
//     return new Promise(async (resolve, reject) => {
//       const tempDir = path.join(os.tmpdir(), "VideoProcessor-temp");
//       const inputFileName = `${uuid()}.mp4`;
//       const outputFileName = `${uuid()}-processed.mp4`;
//       const inputFilePath = path.join(tempDir, inputFileName);
//       const outputFilePath = path.join(tempDir, outputFileName);

//       try {
//         await fs.mkdir(tempDir, { recursive: true });
//         await fs.writeFile(inputFilePath, inputBuffer);

//         const trimStart = parseInt(options.trim[0], 10);
//         const trimEnd = parseInt(options.trim[1], 10);

//         const videoWidth = options.width;
//         const videoHeight = options.height;

//         let ffmpegFilters;
//         if (videoWidth > 960) {
//           console.log("Applying resize and padding due to width > 960px");
//           ffmpegFilters = `scale=540:960:force_original_aspect_ratio=decrease,pad=540:960:(ow-iw)/2:(oh-ih)/2`;
//         } else if (videoWidth === 1080) {
//           console.log("Applying resize and crop due to width = 1080px");
//           ffmpegFilters = `scale=540:960:force_original_aspect_ratio=increase,crop=540:960`;
//         } else {
//           console.log("No resize or padding needed");
//           ffmpegFilters = `scale=${videoWidth}:${videoHeight}`;
//         }

//         const ffmpegCommand = `ffmpeg -i ${inputFilePath} -vf "${ffmpegFilters}" -ss ${trimStart} -to ${trimEnd} -c:a copy ${outputFilePath}`;

//         exec(ffmpegCommand, async (error) => {
//           if (error) {
//             console.error("FFmpeg error:", error);
//             await fs.unlink(inputFilePath).catch(() => {});
//             await fs.unlink(outputFilePath).catch(() => {});
//             await fs
//               .rmdir(tempDir, { recursive: true, force: true })
//               .catch(() => {});
//             return reject(new Error(`FFmpeg error: ${error.message}`));
//           }

//           console.log("Video processing complete. Reading output buffer.");
//           try {
//             const outputBuffer = await fs.readFile(outputFilePath);

//             console.log("Cleaning up temporary files");
//             await fs.unlink(inputFilePath);
//             await fs.unlink(outputFilePath);
//             await fs
//               .rmdir(tempDir, { recursive: true, force: true })
//               .catch(() => {});

//             resolve(outputBuffer);
//           } catch (fileError) {
//             reject(new Error(`File handling error: ${fileError.message}`));
//           }
//         });
//       } catch (error) {
//         reject(new Error(`Processing error: ${error.message}`));
//       }
//     });
//   }

//   async findById(id) {
//     const doc = await mediaCollection.doc(id).get();
//     if (doc.exists) {
//       return { id: doc.id, ...doc.data() };
//     }
//     return null;
//   }

//   async findByIds(ids) {
//     if (!ids || ids.length === 0) {
//       return [];
//     }
//     const snapshots = await mediaCollection
//       .where(db.FieldPath.documentId(), "in", ids)
//       .get();
//     return snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   }

//   isFunctionality(type) {
//     if (type === MediaFunctionality.logo) {
//       return MediaFunctionality.logo;
//     } else if (type === MediaFunctionality.posts) {
//       return MediaFunctionality.posts;
//     } else if (type === MediaFunctionality.reels) {
//       return MediaFunctionality.reels;
//     } else {
//       return MediaFunctionality.image;
//     }
//   }

//   isImageType(fileExtension) {
//     if (fileExtension === MediaType.image) {
//       return MediaType.image;
//     } else if (fileExtension !== MediaType.video) {
//       throw new Error(`File not supported`);
//     }
//     return MediaType.video;
//   }

//   async deleteMedia(id) {
//     const mediaDoc = await mediaCollection.doc(id).get();

//     if (!mediaDoc.exists) {
//       throw new Error(`Media with id ${id} does not exist`);
//     }

//     const mediaData = mediaDoc.data();
//     if (!mediaData.key) {
//       console.warn(`Media ${id} has no storage key. Skipping file deletion.`);
//     } else {
//       await this.filesService.removeFile(mediaData.key);
//     }

//     await mediaCollection.doc(id).delete();
//   }

//   async sizeFilesCompany(companyId) {
//     const snapshot = await mediaCollection
//       .where("companyId", "==", companyId)
//       .get();

//     let sizeImages = 0;
//     let sizeVideos = 0;

//     snapshot.docs.forEach((doc) => {
//       const file = doc.data();
//       file.type === MediaType.image
//         ? (sizeImages += file.size)
//         : (sizeVideos += file.size);
//     });

//     return { sizeImages, sizeVideos };
//   }

//   async getMediaCompany(companyId) {
//     const snapshot = await mediaCollection
//       .where("companyId", "==", companyId)
//       .orderBy("createdAt", "desc")
//       .get();
//     return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   }
// }

// const mediaService = new MediaService();
// export default mediaService;
