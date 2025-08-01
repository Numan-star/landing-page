"use client";

import MobileFormWrapper from "../../components/MobileFormWrapper";
import { useState, useEffect } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import LoginFacebook from "../../loginfacebook/LoginFacebook";
import LoginGoogle from "../../logingoogle/LoginGoogle";
import AuthHeader from "../../components/AuthHeader";
import Footer from "../../components/Footer";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem("showMobileForm");
  //   };
  // }, []);

  return (
    <>
      <AuthHeader />
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-4/7 2xl:w-1/2 bg-[url('/images/scholarName.png')] bg-cover bg-no-repeat bg-center sm:min-h-screen h-screen sm:h-[800px]"></div>

        <MobileFormWrapper>
          <div className="w-full md:w-3/7 2xl:w-1/2 flex items-center justify-center px-10 sm:px-6 py-10 bg-white sm:min-h-screen h-[520px] sm:h-[800px] rounded-l-4xl sm:rounded-l-none">
            <div className="md:max-w-sm 2xl:max-w-xl w-full space-y-6">
              <h2 className="text-center text-gray-600 font-medium mb-10">
                Already have an account? Sign In!{" "}
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Member Id"
                  className="w-full text-[#545454] bg-[#e8e8e8] px-4 py-3 border-0 rounded-md focus:outline-none"
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full text-[#545454] bg-[#e8e8e8] pl-4 pr-9 py-3 border-0 rounded-md focus:outline-none"
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <IoEyeOutline size={20} />
                    ) : (
                      <IoEyeOffOutline size={20} />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f27f22] text-black py-3 rounded-md font-semibold cursor-pointer"
                >
                  Sign In
                </button>
              </form>

              <div className="flex justify-end">
                <span className="text-[#787878] text-sm">Forgot Password</span>
              </div>

              <div>
                <hr className="border border-gray-200" />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-base italic text-[#787878] w-1/6">
                  or continue with
                </span>
                <span className="flex justify-end gap-4 w-5/6">
                  <LoginGoogle />

                  <LoginFacebook />
                </span>
              </div>
            </div>
          </div>
        </MobileFormWrapper>
      </div>
      <Footer />
    </>
  );
}
