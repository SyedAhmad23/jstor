"use client";
import Image from "next/image";

export default function Featured() {
  const cards = [
    {
      id: 1,
      image: "/img1.jpg",
      title: "Bring your work to life with images",
      reference:
        "Harness the power of visual materials—explore more than 3 million images now on JSTOR.",
      button: "Search for images",
    },
    {
      id: 2,
      image: "/img2.jpg",
      title: "Incorporate alternative voices in your research",
      reference:
        "Enhance your scholarly research with underground newspapers, magazines, and journals.",
      button: "Browse independent voices",
    },
    {
      id: 3,
      image: "/img3.jpg",
      title: "Take your research further with Artstor’s 3+ million images",
      reference:
        "Explore collections in the arts, sciences, and literature from the world’s leading museums, archives, and scholars.",
      button: "Search Artstor’s collections",
    },
  ];

  return (
    <div className="container my-20">
      <h2 className="text-2xl font-semibold font-sans mb-9">
        Broaden your research with images and primary sources
      </h2>
      <div className="grid grid-cols-3 ">
        {cards.map((card) => (
          <div key={card.id} className="p-5 w-full">
            <Image
              src={card.image}
              alt="Image"
              width={800}
              height={600}
              className="w-full h-[400px] object-cover rounded-md"
            />
            <h3 className="mt-1 mb-2 text-lg font-semibold text-gray-800 hover:text-red-900 transition-colors duration-200">
              {card.title}
            </h3>
            <p className="text-gray-600 hover:text-red-900 transition-colors duration-200">
              {card.reference}
            </p>
            <button className="border mt-1 border-black px-4 py-1.5 hover:border-red-900 hover:text-red-800 text-sm font-semibold">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
