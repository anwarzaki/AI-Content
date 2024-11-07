import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClerkProvider , UserButton} from "@clerk/nextjs";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className=" nav flex justify-between items-center p-5 h-[10rem] shadow-md">
      <Image
        className="img"
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        priority
      />
      <div className="flex items-center gap-5">
      <Button>Get Started</Button>
      <UserButton />
      </div>
    </div>
  );
};

export default Header;
