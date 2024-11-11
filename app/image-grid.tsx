import React from "react";

const images = [
  "https://www.jstor.org/assets/long-lived_20201006/images/browse-by-collection-cluster/youth-service-coalition-inc.jpg",
  "https://www.jstor.org/assets/long-lived_20201006/images/browse-by-collection-cluster/filatios-on-horseback.jpg",
  "https://www.jstor.org/assets/long-lived_20201006/images/browse-by-collection-cluster/great-wall-of-china.jpg",
  "https://www.jstor.org/assets/long-lived_20201006/images/browse-by-collection-cluster/letter-to-ernest-hemingway.jpg",
  "https://www.jstor.org/assets/long-lived_20201006/images/browse-by-collection-cluster/theatrical-qing-dynasty-robe.jpg",
  "https://www.jstor.org/assets/long-lived_20201006/images/browse-by-collection-cluster/birth-of-mahavira.jpg",
];

const ImageGrid = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 mx-auto py-10 container my-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-[200px] object-cover"
            loading="lazy"
          />
        ))}
      </div>
      <div className="flex flex-col max-w-lg items-center md:items-start justify-center h-full my-auto">
        <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
          Enrich your research with primary sources
        </h2>
        <p className="text-gray-600 mb-4 text-center md:text-left">
          Explore millions of high-quality primary sources and images from
          around the world, including artwork, maps, photographs, and more.
        </p>
        <button className="border border-black font-semibold text-sm px-4 py-2 hover:border-red-900 hover:text-red-900 transition duration-200">
          Browse by collection
        </button>
      </div>
    </section>
  );
};

export default ImageGrid;
