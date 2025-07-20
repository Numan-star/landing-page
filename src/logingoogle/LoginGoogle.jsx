import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../hooks/useAuth";
import "./logingoogle.css";

const LoginGoogle = ({ onAuthComplete }) => {
  const { googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSuccess = async (credentialResponse) => {
    setError("");
    setLoading(true);

    try {
      const data = await googleLogin(credentialResponse.credential);

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

  return (
    <div className="w-full flex justify-center">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => {
          const errorMessage = "Google authentication failed";
          setError(errorMessage);
          onAuthComplete({ success: false, error: errorMessage });
        }}
        disabled={loading}
        shape="pill" // Options: 'rectangular' or 'pill'
        theme="outline" // Options: 'outline' or 'filled_blue' or 'filled_black'
        size="large" // Options: 'large' or 'medium' or 'small'
        text="continue_with" // Options: 'signin_with' or 'signup_with' or 'continue_with'
        width="100%" // Set custom width in pixels
      />
    </div>
  );
};

export default LoginGoogle;
