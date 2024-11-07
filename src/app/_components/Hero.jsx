// 'use client';
// import React from "react";
// import { useRouter } from 'next/navigation';

// const Hero = () => {
//     const router = useRouter();

//     const handleNavigation = () => {
//         router.push('/create-course');
//     };

//     return (
//         <div className="hero fixed w-full h-screen">
//             <section className="bg-gray-900 text-white h-full">
//                 <div className="px-4 py-32 lg:flex lg:items-center h-full">
//                     <div className="max-w-3xl text-center mx-auto">
//                         <h1
//                             className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 text-3xl font-extrabold sm:text-5xl"
//                         >
//                             AI COURSE GENERATOR
//                         </h1>
//                         <span className="text-3xl font-extrabold text-white sm:text-5xl sm:block">
//                             Personalized Learning, Powered by AI.
//                         </span>

//                         <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
//                             Transform how you learn with AI-driven course generation tailored to your needs. 
//                             Start building your AI journey today.
//                         </p>

//                         <div className="mt-8 flex flex-wrap justify-center gap-4">
//                             <button
//                                 className="block w-full rounded border border-transparent bg-gradient-to-r from-teal-400 to-cyan-500 px-12 py-3 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring active:opacity-80 sm:w-auto transition duration-200 ease-in-out"
//                                 onClick={handleNavigation}
//                             >
//                                 Start Creating
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Hero;


'use client';
import React from "react";
import { useRouter } from 'next/navigation';
import './Hero.css'; // Make sure to create and import this CSS file

const Hero = () => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/create-course');
    };

    return (
        <div className="hero fixed w-full h-screen">
            <section className="bg-gray-900 text-white h-full">
                <div className="px-4 py-32 lg:flex lg:items-center h-full">
                    <div className="max-w-3xl text-center mx-auto">
                        <h1
                            className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 text-3xl font-extrabold sm:text-5xl animate__animated animate__fadeIn animate__delay-1s"
                        >
                            AI COURSE GENERATOR
                        </h1>
                        <span className="text-3xl font-extrabold text-white sm:text-5xl sm:block animate__animated animate__fadeIn animate__delay-2s">
                            Personalized Learning, Powered by AI.
                        </span>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed animate__animated animate__fadeIn animate__delay-3s">
                            Transform how you learn with AI-driven course generation tailored to your needs. 
                            Start building your AI journey today.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button
                                className="block w-full rounded border border-transparent bg-gradient-to-r from-teal-400 to-cyan-500 px-12 py-3 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring active:opacity-80 sm:w-auto transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
                                onClick={handleNavigation}
                            >
                                Start Creating
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
