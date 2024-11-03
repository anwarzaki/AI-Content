import react from 'react';
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
            autoplay: 0,
    },
  };

const ChapterContent = ({chapter,content}) => {
    return (
        <div className='p-5'>
            <h1 className='font-medium text-2xl'> {chapter?.chapter_name}</h1>
            <h2 className='text-gray-500'>{chapter?.about}</h2>

            {/* video */}
         
         <YouTube  videoId = {chapter?.videoId} opts={opts}/>
         
            {/* content */}



        </div>
    );
};

export default ChapterContent;