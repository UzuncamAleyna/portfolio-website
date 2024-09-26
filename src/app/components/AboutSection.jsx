"use client";
import React, { useTransition, useState } from "react";
import Image from 'next/image'
import TabButton from '../components/TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
      <ul className="list-none pl-0">
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> HTML & CSS
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> JavaScript & TypeScript
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> React.js & Next.js
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> React Native
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> Figma & Adobe XD
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> PHP
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> Laravel
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> MySQL & MongoDB
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> Craft CMS
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> Github
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> Blender & Three.js
        </li>
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 rounded-full w-3 h-3 mr-3"></span> Photoshop & Illustrator & InDesign
        </li>
      </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
      <ul className="list-none pl-0">
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 flex-shrink-0 rounded-full w-3 h-3 mr-3"></span> Artevelde University of Applied Sciences, Interactive Media Development
        </li>
      </ul>
      ),
    }
    ,
    {
      title: "Experience",
      id: "experience",
      content: (
      <ul className="list-none pl-0">
        <li className="flex items-center mb-2">
          <span className="bg-pink-500 flex-shrink-0 rounded-full w-3 h-3 mr-3"></span> Internship at Sweet Mustard as UX/UI-Designer & Front-End Developer
        </li>
      </ul>
      ),
    },
  ];

const AboutSection = () => {

    //Set the default tab to be open
    const [tab, setTab] = useState("skills");
    //To see which tab is open
    const [isPending, startTransition] = useTransition();
  
    //Function to handle tab change
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };
  
    return (
        <section id="about-me" className='text-white'>
                <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                        <p className='text-base lg:text-lg'>Hello there! 👋 I’m Aleyna Uzuncam, a passionate programming enthusiast and graphic designer. Having recently graduated, I’m excited to dive deeper into the world of tech and design. For me, programming isn’t just a skill; it’s my passion, my creative outlet, and my ticket to shaping the digital future. With a keen eye for design and a love for creating seamless user experiences, I bridge the gap between functionality and aesthetics, crafting innovative solutions in both the coding and design realms.</p>
                        <div className='flex flex-row justify-start mt-8'>
                            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                                {' '} 
                                Skills{' '}
                            </TabButton>
                            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                                {' '}
                                Education{' '}
                            </TabButton>
                            <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>
                                {' '}
                                Experience{' '}
                            </TabButton>
                        </div>
                        <div className="mt-8">
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </div>
                    </div>
                    <Image 
                        src='/images/summer-ally-2.jpg' 
                        width={400} height={400} 
                        alt='A photo of me'
                        className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                </div>
        </section>
    )
}

export default AboutSection;
