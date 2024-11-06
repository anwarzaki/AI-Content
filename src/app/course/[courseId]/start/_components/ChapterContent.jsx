import { type } from 'os';
import react from 'react';
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    type: 'video',
    playerVars: {
            autoplay: 0,
    },
  };

const ChapterContent = ({chapter,content}) => {
    console.log('chapter is from ChapterContent.jsx is :',chapter);  //  it has  chapter_name and about
    console.log('content is from ChapterContent.jsx is :',content); // content has videoId
    return (
        <div className='p-5'>
            <h1 className='font-medium text-2xl'> {chapter?.chapter_name}</h1>
            <h2 className='text-gray-500'>{chapter?.about}</h2>

            {/* video */}
         
         <YouTube  videoId = {content?.videoId} opts={opts}/>
         
            {/* content */}



        </div>
    );
};

export default ChapterContent;