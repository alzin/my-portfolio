import React from "react";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <footer className="fixed h-16 bg-gray-500 w-full bottom-0 flex items-center justify-center">
      <SocialIcon
        url="https://www.facebook.com/mohamadghaith.alzin/"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://www.linkedin.com/in/mohamad-ghaith-alzin-884782108"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://github.com/alzin"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
      />
    </footer>
  );
}
