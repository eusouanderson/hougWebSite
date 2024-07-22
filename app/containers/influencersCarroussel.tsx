/* eslint-disable @next/next/no-img-element */
"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type ClothingItem = {
    name: string;
    price: string;
    releaseDate: string;
};

type Influencer = {
    name: string;
    description: string;
    imageUrl: string;
    profileUrl: string;
    collectionUrl: string;
    title: string;
    clothes: ClothingItem[];
};

const influencers: Influencer[] = [
    {
        name: "Natalia Collection",
        description: "Influencer, referência no mundo da moda com mais de 3 milhões de seguidores.",
        imageUrl: "https://defeez.ru/wp-content/uploads/2023/02/street-style-9-min-1024x732.jpg",
        profileUrl: "https://instagram.com/natalia",
        collectionUrl: "https://shop.com/natalia",
        title: "Descubra a sofisticação com Natalia",
        clothes: [
            { name: "Vestido Elegante", price: "R$300,00", releaseDate: "2024-05-01" },
            { name: "Blusa Moderna", price: "R$150,00", releaseDate: "2024-04-20" },
            { name: "Calça Chique", price: "R$200,00", releaseDate: "2024-05-10" },
        ],
    },
    {
        name: "Maria Silva",
        description: "Influencer de estilo de vida com mais de 2 milhões de seguidores.",
        imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c18e5f50804933.58da817501b06.jpg",
        profileUrl: "https://instagram.com/maria",
        collectionUrl: "https://shop.com/maria",
        title: "Explore o estilo de Maria",
        clothes: [
            { name: "Jaqueta Casual", price: "R$250,00", releaseDate: "2024-05-15" },
            { name: "Saia Estilosa", price: "R$130,00", releaseDate: "2024-04-25" },
            { name: "Camiseta Descolada", price: "R$90,00", releaseDate: "2024-05-05" },
        ],
    },
    {
        name: "Carla Mendes",
        description: "Pioneira em tendências com mais de 4 milhões de seguidores.",
        imageUrl: "https://www.chicstylecollective.com/wp-content/uploads/2022/02/pexels-photo-3598015.jpeg",
        profileUrl: "https://instagram.com/carla",
        collectionUrl: "https://shop.com/carla",
        title: "Inspire-se com Carla Mendes",
        clothes: [
            { name: "Macacão Fashion", price: "R$350,00", releaseDate: "2024-06-01" },
            { name: "Top de Luxo", price: "R$180,00", releaseDate: "2024-05-20" },
            { name: "Shorts Descontraído", price: "R$110,00", releaseDate: "2024-06-10" },
        ],
    },
    {
        name: "Beatriz Souza",
        description: "Estrela emergente da moda com 1 milhão de seguidores.",
        imageUrl: "https://video-images.vice.com/_uncategorized/1521649137817-rebel8-womens-2015-winter-1.jpeg",
        profileUrl: "https://instagram.com/beatriz",
        collectionUrl: "https://shop.com/beatriz",
        title: "Elegância e estilo com Beatriz",
        clothes: [
            { name: "Vestido Glamouroso", price: "R$400,00", releaseDate: "2024-07-01" },
            { name: "Calça Elegante", price: "R$220,00", releaseDate: "2024-06-15" },
            { name: "Blusa Casual", price: "R$160,00", releaseDate: "2024-06-25" },
        ],
    },
    {
        name: "Luciana Ribeiro",
        description: "Influencer especializada em alta moda com 5 milhões de seguidores.",
        imageUrl: "https://www.streetwearbr.com/wp-content/uploads/2016/04/superism-ian-connor-streetwear-brasil-01.jpg",
        profileUrl: "https://instagram.com/luciana",
        collectionUrl: "https://shop.com/luciana",
        title: "Descubra a alta moda com Luciana",
        clothes: [
            { name: "Terno Sob Medida", price: "R$600,00", releaseDate: "2024-07-20" },
            { name: "Vestido de Gala", price: "R$550,00", releaseDate: "2024-07-10" },
            { name: "Sapato de Luxo", price: "R$300,00", releaseDate: "2024-07-30" },
        ],
    },
    {
        name: "Fernanda Costa",
        description: "Conhecida por seu estilo único, com 2.5 milhões de seguidores.",
        imageUrl: "https://image-cdn.hypb.st/https%253A%252F%252Fhypebeast.com%252Fimage%252F2013%252F10%252Fstreetsnaps-rigeldavis-0.jpg",
        profileUrl: "https://instagram.com/fernanda",
        collectionUrl: "https://shop.com/fernanda",
        title: "Transforme seu visual com Fernanda",
        clothes: [
            { name: "Blazer Moderno", price: "R$320,00", releaseDate: "2024-08-01" },
            { name: "Vestido de Verão", price: "R$250,00", releaseDate: "2024-07-25" },
            { name: "Óculos de Sol", price: "R$150,00", releaseDate: "2024-08-10" },
        ],
    },
];

export const InfluencersCarroussel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % influencers.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const currentInfluencer = influencers[currentIndex];

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div className="absolute top-2 left-0 w-full h-1 flex gap-2 z-50 px-8 lg:20">
                {influencers.map((_, index) => (
                    <motion.div
                        key={index}
                        className="h-full w-full bg-gray-400 rounded-full overflow-hidden drop-shadow-md"
                    >
                        <motion.div
                            className="h-full bg-white rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: index <= currentIndex ? 1 : 0 }}
                            transition={{ duration: 10, ease: "linear" }}
                            style={{ transformOrigin: "left" }}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                key={currentInfluencer.name}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={currentInfluencer.imageUrl}
                    alt={currentInfluencer.name}
                    className="absolute inset-0 w-full h-full object-center lg:object-right object-cover z-[21] overflow-hidden"
                />
                <div className="absolute top-8 left-8 lg:top-10 lg:left-20 flex items-center justify-center gap-4 text-white z-[22]">
                    <img src={currentInfluencer.imageUrl} alt={currentInfluencer.name} className="border-4 border-black object-cover w-20 h-20 lg:w-28 lg:h-28 rounded-full" />
                    <div className='lg:block bg-black/50 backdrop-blur-lg rounded-2xl p-4 max-w-[400px] lg:max-w-auto'>
                        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between w-full'>
                            <h1 className="text-2xl font-bold">{currentInfluencer.name}</h1>
                            <button className='hidden lg:flex text-sm border-2 border-white px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out'>Ver perfil</button>
                        </div>
                        <p className="text-sm mt-2 w-3/4 hidden lg:flex">{currentInfluencer.description}</p>
                    </div>
                </div>
                <motion.button
                    className="absolute bottom-8 lg:bottom-20 text-center left-8 lg:left-auto lg:right-20 w-48 h-48 px-4 py-2 bg-black/50 backdrop-blur-lg text-white rounded-xl z-[22]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ filter: "blur(5px)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <h1 className="text-3xl">
                        Conferir a coleção completa
                    </h1>
                </motion.button>
                <div className="absolute hidden lg:flex flex-col bottom-10 left-10 p-8  z-[22]">
                    <h1 className='text-white text-2xl mb-4'>últimos Lançamentos</h1>
                    <div className='flex gap-4'>
                        {currentInfluencer.clothes.map((item, index) => (
                            <motion.div
                                key={index}
                                className="cursor-pointer w-48 h-48 bg-gray-200 p-4 flex flex-col justify-end rounded-xl"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <h1 className="text-xl font-semibold">{item.name}</h1>
                                <p>{item.price}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
