import React from "react";
import { FaFacebookF } from "react-icons/fa";

const LoginFacebook = () => {
  const handleFacebookLogin = () => {
    if (!window.FB) return;

    window.FB.login(
      (response) => {
        if (response.authResponse) {
          console.log("Facebook login success:", response);
        } else {
          console.log("Facebook login failed:", response);
        }
      },
      { scope: "email,public_profile" }
    );
  };

  return (
    <button
      className="p-3 border-none rounded-lg bg-[#d9d9d9] cursor-pointer"
      onClick={handleFacebookLogin}
    >
      <FaFacebookF fill="#787878" size={18} />
    </button>
  );
};

export default LoginFacebook;
