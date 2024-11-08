// import { type } from 'os';
// import react from 'react';
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown';

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
        <div className='p-10'>
            <h1 className='font-medium text-2xl'> {chapter?.chapter_name}</h1>
            <h2 className='text-gray-500'>{chapter?.about}</h2>

            {/* video */}
         <div className='flex justify-center py-6'>
              <YouTube  videoId = {content?.videoId} opts={opts}/>
         </div>
          

                     {/* content */}
                     
                {/* Content Sections with Markdown rendering */}
                <div className="p-5 bg-gray-100 rounded-lg shadow-md space-y-4">
                    {content?.chapter?.map((item, index) => (
                    <div key={index} className="p-5 bg-white rounded-md shadow-sm">
                        <h2 className="font-semibold text-xl text-teal-600 mb-2">
                        {item.title}
                        </h2>

                        {/* Markdown rendering for description */}
                        <ReactMarkdown className="text-gray-700 mb-4">
                        {item.description}
                        </ReactMarkdown>

                        {/* Markdown rendering for code example */}
                         {item?.code_example && (
                            <ReactMarkdown className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">
                                {` \`\`\`javascript\n${item.code_example.replace(/<\/?precode>/g, '')}\n\`\`\` `}
                            </ReactMarkdown>
                        )}

                    </div>
           ))}
    </div>

                    
     </div>
              
    );
};

export default ChapterContent;