// import React from "react";
// import { LuClock5 } from "react-icons/lu";
// import { RiCheckboxCircleLine } from "react-icons/ri";

// const ChapterList = ({ course }) => {
//   return (
//     <div>
//       <h2 className="mt-3">Chapters</h2>
//       <div className="mt-2">
//         {course?.courseOutput?.chapters.map((chapter, index) => (
//           <div className="border p-5 rounded-lg mb-2 flex items-center justify-between">
//             <div className="flex gap-5 items-center ">
//               <h2 className="bg-[black] h-10 w-10 rounded-full text-center p-2 mt-2 text-white">
//                 {index + 1}
//               </h2>
//               <div className="">
//                 <h2 className="font-medium text-lg flex-nonecd">{chapter?.chapter_name}</h2>
//                 <p className="text-sm text-gray-500"> {chapter?.about}</p>
//                 <h2 className="flex gap-2 items-center">
//                   <LuClock5 /> {chapter?.duration}
//                 </h2>
//               </div>
//             </div>
//             <RiCheckboxCircleLine className="text-4xl text-gray-300 flex-none" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChapterList;


import React from "react";
import { LuClock5 } from "react-icons/lu";
import { RiCheckboxCircleLine } from "react-icons/ri";

const ChapterList = ({ course }) => {
  return (
    <div>
      <h2 className="mt-3">Chapters</h2>
      <div className="mt-2">
        {course?.courseOutput?.chapters.map((chapter, index) => (
          <div
            key={chapter.id || index}  // Use chapter.id if it exists, otherwise use index
            className="border p-5 rounded-lg mb-2 flex items-center justify-between"
          >
            <div className="flex gap-5 items-center">
              <h2 className="bg-[black] h-10 w-10 rounded-full text-center p-2 mt-2 text-white">
                {index + 1}
              </h2>
              <div>
                <h2 className="font-medium text-lg">{chapter?.chapter_name}</h2>
                <p className="text-sm text-gray-500">{chapter?.about}</p>
                <h2 className="flex gap-2 items-center">
                  <LuClock5 /> {chapter?.duration}
                </h2>
              </div>
            </div>
            <RiCheckboxCircleLine className="text-4xl text-gray-300 flex-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
