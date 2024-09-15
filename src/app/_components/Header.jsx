import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div class=" nav flex justify-between items-center p-5 h-[10rem] shadow-md">
      <Image class="img" src="logo.svg" alt="Logo" width={100} height={100} />
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;