import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import "./logingoogle.css";

const LoginGoogle = ({ onAuthComplete }) => {
  const { googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        scope: "email profile openid",
        callback: handleGoogleSuccess,
      });
      setClient(tokenClient);
    };
    document.body.appendChild(script);
  }, []);

  const handleGoogleSuccess = async (tokenResponse) => {
    if (!tokenResponse || !tokenResponse.access_token) {
      const errorMessage = "Google authentication failed";
      setError(errorMessage);
      onAuthComplete({ success: false, error: errorMessage });
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await googleLogin(tokenResponse.access_token);

      if (data.success) {
        localStorage.setItem("token", data.token);
        onAuthComplete({ success: true, error: data.message });
      } else if (data.code === 403) {
        setError(data.message);
        onAuthComplete({
          success: false,
          error: data.message,
          email: data.email,
          code: data.code,
        });
      } else {
        setError(data.message || "Google authentication failed");
        onAuthComplete({
          success: false,
          error: data.message || "Google authentication failed",
        });
      }
    } catch (err) {
      const errorMessage = "An error occurred with Google authentication";
      setError(errorMessage);
      onAuthComplete({ success: false, error: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (client) {
      client.requestAccessToken();
    } else {
      const errorMessage = "Google client not initialized";
      setError(errorMessage);
      onAuthComplete({ success: false, error: errorMessage });
    }
  };

  return (
    <button
      className="p-3 border-none rounded-lg bg-[#d9d9d9] cursor-pointer"
      onClick={handleClick}
      disabled={loading}
    >
      <FaGoogle fill="#787878" size={18} />
    </button>
  );
};

export default LoginGoogle;
