import Image from "next/image";
import  Header  from "./_components/Header";
import { ClerkProvider , UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" items-center justify-items-center ">
       <Header />
       <header className="flex justify-between p-3">
        <p></p>
          <UserButton />
        </header>
    </div>
  );
}

