"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function CardSwiper() {
  const cards = [
    {
      id: 1,
      image: "/img1.jpg",
      name: "Image",
      title: "Exploring the Role of Images in Digital Media",
      reference:
        "An overview of image use in media and its impact on communication.",
    },
    {
      id: 2,
      image: "/img2.jpg",
      name: "Article",
      title: "Scientific Articles: Essential Tools for Sharing Knowledge",
      reference:
        "Highlights the importance of articles in academic research and global collaboration.",
    },
    {
      id: 3,
      image: "/img3.jpg",
      name: "Paper",
      title: "How Research Papers Fuel Knowledge Expansion and Academic Growth",
      reference:
        "Discusses research papers' role in academic growth and knowledge sharing.",
    },
    {
      id: 4,
      image: "/img1.jpg",
      name: "Book",
      title: "Books as Historical Vessels of Knowledge and Culture",
      reference:
        "Focuses on the importance of books in preserving culture and knowledge.",
    },
    {
      id: 5,
      image: "/img2.jpg",
      name: "Image",
      title: "The Craft of Visual Storytelling",
      reference:
        "Examines how visual storytelling engages and connects with audiences.",
    },
    {
      id: 6,
      image: "/img1.jpg",
      name: "Image",
      title: "Exploring the Role of Images in Digital Media",
      reference:
        "An overview of image use in media and its impact on communication.",
    },
    {
      id: 7,
      image: "/img2.jpg",
      name: "Article",
      title: "Scientific Articles: Essential Tools for Sharing Knowledge",
      reference:
        "Highlights the importance of articles in academic research and global collaboration.",
    },
  ];

  return (
    <div className="w-full container mb-10">
      <h2 className="text-2xl font-semibold font-sans mb-9">
        Take an interdisciplinary approach to immigration
      </h2>
      <h4 className="text-sm font-medium mb-1">
        Explore migration issues through a variety of media types
      </h4>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        modules={[Navigation]}
        navigation
        loop={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="p-5">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-56 object-cover rounded-md"
              />
              <p className="mt-2 text-gray-700 text-sm">{card.name}</p>
              <h3 className="mt-1 text-lg font-semibold text-gray-800 hover:text-red-900 transition-colors duration-200">
                {card.title}
              </h3>
              <p className="text-gray-600 underline hover:text-red-900 transition-colors duration-200">
                {card.reference}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
