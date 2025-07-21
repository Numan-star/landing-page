"use client";

import { useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";

// Add a type-safe version of FB.init
type FacebookInitParams = {
  appId: string;
  cookie?: boolean;
  xfbml?: boolean;
  version: string;
};

interface FacebookSDK {
  init: (params: FacebookInitParams) => void;
}

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: FacebookSDK;
  }
}

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.FB) return;

    window.fbAsyncInit = function () {
      if (typeof window.FB !== "undefined") {
        window.FB.init({
          appId: "722881967265904",
          cookie: true,
          xfbml: false,
          version: "v19.0",
        });
      }
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <AuthProvider>{children}</AuthProvider>;
}
