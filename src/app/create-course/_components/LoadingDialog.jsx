import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const LoadingDialog = ({ loading }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>
            <div className="flex flex-col items-center py-10 bg-[white]">
              <Image
                src={"/loader.gif"}
                width={100}
                height={100}
                alt="Loading..."
              />
              <h2>Please wait.. AI is working on your course</h2>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoadingDialog;
