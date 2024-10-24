import Image from "next/image";
import  Header  from "./_components/Header";
import { ClerkProvider , UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" items-center justify-items-center ">
       <Header />
       <div className="flex w-full justify-end p-2">
        <UserButton />
      </div>
    </div>
  );
}

