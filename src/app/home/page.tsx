import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div>Page</div>
      <Image 
        src="/pic/pic-3.jpg" 
        alt="Cat" 
        width={500} 
        height={300}/>
    </>
  );
}

export default Page;
