import React from 'react';
import { GoClockFill } from "react-icons/go";

const ChapterListCard = ({ chapter, index }) => {
  // console.log('chapter', chapter);
  // console.log('index', index);  
  return (
    <div className="grid grid-cols-5  w-64 p-4 items-center border-b border-gray-300">
      <div className="p-1 bg-[rgb(40,205,205)] w-8 h-8 text-white rounded-full text-center">
        <h2>{index + 1}</h2>
      </div>
      <div className="col-span-4">
        <h2 className='font-medium'>{chapter?.chapter_name}</h2>
        <h2 className='flex gap-2 items-center text-[rgb(40,204,205)]'> <GoClockFill /> {chapter?.duration} </h2>
      </div>
    </div>
  );
};

export default ChapterListCard;