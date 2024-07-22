"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

export const InfluencersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      influencer: {
        name: "Natalia Collection",
        description: "Influencer, referência no mundo da moda com mais de 3 milhões de seguidores",
        image: "/images/natalia.jpg",
      },
      clothes: [
        { title: "Roupa 1", price: "R$100,00" },
        { title: "Roupa 2", price: "R$150,00" },
        { title: "Roupa 3", price: "R$200,00" },
        { title: "Roupa 4", price: "R$250,00" },
        { title: "Roupa 5", price: "R$300,00" },
      ],
    },
    {
      influencer: {
        name: "Maria Silva",
        description: "Influencer de estilo de vida com mais de 2 milhões de seguidores",
        image: "/images/maria.jpg",
      },
      clothes: [
        { title: "Roupa A", price: "R$120,00" },
        { title: "Roupa B", price: "R$170,00" },
        { title: "Roupa C", price: "R$220,00" },
        { title: "Roupa D", price: "R$270,00" },
        { title: "Roupa E", price: "R$320,00" },
      ],
    },
    // Adicione mais influencers e roupas conforme necessário
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10 mx-auto w-full max-w-[1200px] py-20'>
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex items-center">
          <img src={items[currentIndex].influencer.image} alt={items[currentIndex].influencer.name} className="bg-black w-24 h-24 rounded-2xl" />
          <div className="flex flex-col ml-4">
            <h1 className="text-3xl font-bold">{items[currentIndex].influencer.name}</h1>
            <p className="w-3/4">{items[currentIndex].influencer.description}</p>
          </div>
        </div>
        <div className="flex">
          <Icon onClick={handlePrev} icon="gg:arrow-left-r" className='text-5xl text-black hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer' />
          <Icon onClick={handleNext} icon="gg:arrow-right-r" className='text-5xl text-black hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer' />
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 w-full gap-4">
        {items[currentIndex].clothes.map((item, index) => (
          <motion.div
            key={index}
            className="min-h-[300px] bg-gray-200 p-10 flex flex-col justify-end rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p>{item.price}</p>
          </motion.div>
        ))}

        <motion.button
          className="col-span-1 row-span-1 bg-black text-white p-10 flex items-center justify-center rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ filter: "blur(5px)" }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="w-2/4 text-3xl">
            Conferir a coleção completa
          </h1>
        </motion.button>
      </div>
    </div>
  );
};

export default InfluencersSection;
