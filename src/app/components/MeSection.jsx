"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MeSection = () => {
    return (
        <section className="flex items-center justify-center h-screen text-center">
            <div>
                {/* Animated Image with Bounce Effect */}
                <div className="mb-8">
                    <Image
                        src='/images/me-photo.jpg' 
                        alt="Aleyna"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto animate-bounce-custom"
                    />
                </div>
                <h1 className='text-white mb-4 text-4xl lg:text-5xl font-extrabold'> 
                    Hi, <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600'>Aleyna</span> here.
                </h1>

                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl max-w-lg mx-auto mb-8'>
                I&rsquo;m a Software Developer based in Ghent, Belgium. I have great interest in Full-Stack Development, Artificial Intelligence, Web Design, and everything in between.
                </p>

                <div>
                   {/* Link to the contact section */}
                   <Link href="mailto:aleyna-uzuncam@hotmail.be">
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-pink-500 hover:bg-slate-200 hover:text-pink-500 text-white'>
                            Say hi
                        </button>
                    </Link>
                    {/* Link to the PDF for downloading */}
                    <Link href="/my-cv.pdf" download>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MeSection;