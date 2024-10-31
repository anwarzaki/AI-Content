import React from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-1 shadow-sm">
      <Image className="img" src="/logo.svg" alt="Logo" width={60} height={60} />
      <UserButton />
    </div>
  );
};

export default Header;
