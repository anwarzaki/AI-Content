"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import "./Header.css";

const Header = () => {
   const router = useRouter();

    const handleClick = () => {
    router.push("/create-course");
  };
  return (
    <div className=" nav flex bg-white justify-between items-center p-5 h-[10rem] shadow-md">
      <Image
        className="img"
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        priority
      />
      <div className="flex items-center gap-5">
      <Button onClick={handleClick}>Get Started</Button>
      <UserButton />
      </div>
    </div>
  );
};

export default Header;
