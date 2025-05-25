"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function AddCourse() {
  const { user } = useUser();
  return (
    <div className="flex item-center justify-between">
      <div>
        <h2 className="text-3xl text-black">
          Hello,<span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm text-gray-500">
          create new courses and earn from it
        </p>
      </div>
      <Link href={"/create-course"}>
        <Button> + Create Courses</Button>
      </Link>
    </div>
  );
}
