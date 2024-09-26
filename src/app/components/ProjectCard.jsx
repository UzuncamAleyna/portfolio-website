import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'; 
import Image from 'next/image';
import GithubIcon from '../../../public/images/github-icon.svg';
import EyeOpen from '../../../public/images/eye-open.svg';


const ProjectCard = ({ images = [], title, description, language, gitUrl, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
  
  <div 
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className={`transition duration-300 ease-in-out hover:shadow-lg rounded-xl bg-[#33353e] cursor-default`}
  style={{ backgroundColor: isHovered ? '#4d4f59' : '#33353e' }} 
  >
  {/* <div className="relative overflow-hidden rounded-t-xl h-48 w-full">
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
      {images && images.length > 0 ? (
        images.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-48">
              <Image
                src={imgUrl}
                alt={`${title} image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </SwiperSlide>
        ))
      ) : (
        <div className="relative w-full h-48 bg-gray-500">
          <p>No images available</p>
        </div>
      )}
    </Swiper>
  </div> */}
  <div className="text-white py-6 px-4 flex justify-between items-center">
    <div>
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-[#ADB7BE]">{description}</p>
      <div className="flex items-center mt-5 justify-between">
        <p className="text-pink-500 mr-4 text-sm">{language}</p>
        <div className="flex items-center gap-3">
        <Link href={gitUrl}>
          <Image src={GithubIcon} alt="GitHub Icon" width={32} height={32} className="hover:brightness-125 transition-all duration-300" />
        </Link>
        <Link href={`/projects/${id}`}>
          <Image src={EyeOpen} alt="Preview Icon" width={32} height={32} className="hover:brightness-125 transition-all duration-300"/>
       </Link>
       </div>
      </div>
    </div>
  </div>
  </div>

  );
};

export default ProjectCard;