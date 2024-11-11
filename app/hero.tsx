"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img3.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="mt-40">
      <div className="mt-44 container  flex flex-col  absolute inset-0 z-10">
        <h2 className="font-semibold text-5xl text-start font-sans">
          Explore the world’s knowledge, cultures, and ideas
        </h2>

        {/* Search and Filter Section */}
        <div className="mt-6 w-full">
          <div className="flex justify-between items-center">
            <div className="flex">
              <button className="border border-black px-4 py-1.5 hover:border-red-900 hover:text-red-800 font-medium">
                All Content
              </button>
              <button className="border border-gray-500 text-gray-600 px-4 py-1.5 hover:border-red-900 hover:text-red-800 font-medium">
                Images
              </button>
            </div>
            <div>
              <h4 className="text-sm font-semibold underline cursor-pointer">
                Advanced Search
              </h4>
            </div>
          </div>

          <div className="relative">
            <input
              type="search"
              placeholder="Search journals, books, images, and primary sources"
              className="border border-black pl-4 pr-10 py-2 w-full focus:outline-none"
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="w-full relative -mt-1">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <Image
              src={img1}
              alt="Image 1"
              className="w-full h-[500px] object-cover"
            />
            <p className="text-lg max-w-7xl mx-auto mt-10">
              Explore ancient artifacts from around the world.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img2}
              alt="Image 2"
              className="w-full h-[500px] object-cover"
            />
            <p className="text-lg max-w-7xl mx-auto mt-10">
              A dive into contemporary art and cultural movements.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img3}
              alt="Image 3"
              className="w-full h-[500px] object-cover"
            />
            <p className="text-lg max-w-7xl mx-auto mt-10">
              Experience the beauty of nature most scenic landscapes.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
