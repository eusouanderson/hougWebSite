import React from 'react';
import { Icon } from '@iconify/react';

type ImageItem = {
    src: string;
    name: string;
    price: string;
};

const imageItems: ImageItem[] = [
    { src: 'url-da-imagem-1.jpg', name: 'Nome 1', price: 'R$100,00' },
    { src: 'url-da-imagem-2.jpg', name: 'Nome 2', price: 'R$200,00' },
    { src: 'url-da-imagem-3.jpg', name: 'Nome 3', price: 'R$300,00' },
];

export const LastReleases = () => {
    return (
        <div className='flex flex-col relative justify-between w-full text-black max-w-[1400px] px-8 lg:px-20 py-20'>
            <h1 className='text-4xl'>Últimos lançamentos</h1>
            <p>Coleções dos nossos estilistas</p>
            <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-5 lg:grid-rows-4 gap-4 pt-4 w-full h-full">
                <div
                    className="relative lg:col-span-2 lg:row-span-2 lg:bg-cover bg-center rounded-lg bg-black w-full min-h-[350px] lg:min-h-[250px]"
                    style={{ backgroundImage: `url(${imageItems[0].src})` }}
                >
                    <Icon icon="mingcute:heart-line" className="absolute top-6 right-6 text-white text-3xl cursor-pointer" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2>{imageItems[0].name}</h2>
                    </div>
                    <div className="absolute bottom-8 right-8 text-white">
                        <h2>{imageItems[0].price}</h2>
                    </div>
                </div>

                <div
                    className="relative lg:col-span-2 lg:row-start-3 lg:row-span-2 bg-cover bg-center rounded-lg bg-black w-full min-h-[350px] lg:min-h-[250px]"
                    style={{ backgroundImage: `url(${imageItems[1].src})` }}
                >
                    <Icon icon="mingcute:heart-line" className="absolute top-6 right-6 text-white text-3xl cursor-pointer" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2>{imageItems[1].name}</h2>
                    </div>
                    <div className="absolute bottom-8 right-8 text-white">
                        <h2>{imageItems[1].price}</h2>
                    </div>
                </div>

                <div
                    className="relative lg:col-start-3 lg:col-span-3 lg:row-span-4 bg-cover bg-center rounded-lg bg-black w-full min-h-[350px] lg:min-h-[500px]"
                    style={{ backgroundImage: `url(${imageItems[2].src})` }}
                >
                    <Icon icon="mingcute:heart-line" className="absolute top-6 right-6 text-white text-3xl cursor-pointer" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2>{imageItems[2].name}</h2>
                    </div>
                    <div className="absolute bottom-8 right-8 text-white">
                        <h2>{imageItems[2].price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

