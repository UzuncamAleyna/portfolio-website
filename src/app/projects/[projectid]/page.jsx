"use client"; // Client-side rendering

import Image from 'next/image';
import projectsData from '../../data/projectsData'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'; 
import Link from 'next/link';
import GithubIcon from '../../../../public/images/github-icon.svg';
import BackArrow from '../../../../public/images/back-arrow.svg';

export default function ProjectDetail({ params }) {
  const { projectid } = params; 
  const project = projectsData.find(p => p.id === parseInt(projectid)); 

  if (!project) {
    return <p className="text-center text-white">Loading...</p>; 
  }

  return (
    <div className="bg-[#121212] text-white py-8 px-4 md:px-16">

      <Link href="/">
          <Image 
            src={BackArrow} 
            alt="Back Arrow" 
            width={32} 
            height={32} 
            className="text-white flex items-center mb-6 hover:scale-125 transition-all duration-300" 
          />
        </Link>

        <div className="border-b border-[#333] mb-8"></div>

      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <Link href={project.gitUrl}>
          <Image 
            src={GithubIcon} 
            alt="GitHub Icon" 
            width={32} 
            height={32} 
            className="hover:brightness-125 transition-all duration-300" 
          />
        </Link>
      </div>

      <p className="text-[#ADB7BE] mb-6">{project.description}</p>
      
      <div className="relative mb-8 overflow-hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: (index, className) => {
              const isBulletActive = className === 'swiper-pagination-bullet-active';
              return `<span class="${className} ${isBulletActive ? 'swiper-custom-active' : 'swiper-custom-inactive'}"></span>`;
            },
          }}
          modules={[Pagination]}
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full" style={{ height: '400px' }}> 
                <Image
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  layout="fill"
                  objectFit="contain" 
                  objectPosition="center"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="border-b border-[#333] mb-8"></div>
    </div>
  );
}
