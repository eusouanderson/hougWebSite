/* eslint-disable @next/next/no-img-element */
import React from 'react';

const product = {
    title: 'Nome da Roupa',
    price: 'R$200,00',
    description: 'Descrição detalhada do produto, com todas as informações relevantes.',
    images: [
        'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_sport_premium_6687_1_556d65880aca83315564e66260d4c2e6.jpg',
        'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_sport_premium_6687_1_556d65880aca83315564e66260d4c2e6.jpg',
        'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_sport_premium_6687_1_556d65880aca83315564e66260d4c2e6.jpg',
    ],
    options: {
        sizes: ['P', 'M', 'G', 'GG'],
        colors: ['Vermelho', 'Azul', 'Verde', 'Preto'],
    },
};

const relatedProducts = [
    { id: 1, src: 'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_sport_premium_6687_1_556d65880aca83315564e66260d4c2e6.jpg', title: 'Produto Relacionado 1', price: 'R$150,00' },
    { id: 2, src: 'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_sport_premium_6687_1_556d65880aca83315564e66260d4c2e6.jpg', title: 'Produto Relacionado 2', price: 'R$180,00' },
    { id: 3, src: 'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_sport_premium_6687_1_556d65880aca83315564e66260d4c2e6.jpg', title: 'Produto Relacionado 3', price: 'R$210,00' },
];

const recommendedProducts = [
    { id: 4, src: 'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_sport_premium_6687_1_556d65880aca83315564e66260d4c2e6.jpg', title: 'Produto Recomendado 1', price: 'R$250,00' },
    { id: 5, src: 'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_sport_premium_6687_1_556d65880aca83315564e66260d4c2e6.jpg', title: 'Produto Recomendado 2', price: 'R$230,00' },
    { id: 6, src: 'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_sport_premium_6687_1_556d65880aca83315564e66260d4c2e6.jpg', title: 'Produto Recomendado 3', price: 'R$190,00' },
];

const testimonials = [
    { id: 1, name: 'Cliente 1', text: 'Depoimento do cliente sobre o produto. Muito bom!' },
    { id: 2, name: 'Cliente 2', text: 'Ótimo produto, superou minhas expectativas.' },
    { id: 3, name: 'Cliente 3', text: 'Recomendo a todos, excelente qualidade.' },
];

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen max-w-[1150px] items-center justify-center mx-auto overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-36 w-full">
                <div className="flex flex-col space-y-4">
                    {product.images.map((src, index) => (
                        <img key={index} src={src} alt={`Imagem ${index + 1}`} className="rounded-lg w-[200px]" />
                    ))}
                </div>

                <div className="flex flex-col space-y-4">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-xl text-gray-700">{product.price}</p>
                    <p className="text-gray-600">{product.description}</p>

                    <div>
                        <h2 className="text-lg font-semibold">Tamanho</h2>
                        <div className="flex space-x-2">
                            {product.options.sizes.map((size, index) => (
                                <button key={index} className="border p-2 rounded">{size}</button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Cor</h2>
                        <div className="flex space-x-2">
                            {product.options.colors.map((color, index) => (
                                <button key={index} className="border p-2 rounded">{color}</button>
                            ))}
                        </div>
                    </div>

                    <button className="bg-black text-white p-4 rounded-lg mt-4">Adicionar ao Carrinho</button>
                </div>
            </div>

            <div className="w-full mt-8">
                <h2 className="text-2xl font-bold mb-4">Produtos Relacionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedProducts.map(product => (
                        <div key={product.id} className="border p-4 rounded-lg">
                            <img src={product.src} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-600">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-8">
                <h2 className="text-2xl font-bold mb-4">Produtos Recomendados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recommendedProducts.map(product => (
                        <div key={product.id} className="border p-4 rounded-lg">
                            <img src={product.src} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-600">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-8">
                <h2 className="text-2xl font-bold mb-4">Depoimentos dos Clientes</h2>
                <div className="space-y-4">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="p-4 border rounded-lg">
                            <p className="text-gray-600 italic">{testimonial.text}</p>
                            <p className="text-gray-800 font-semibold mt-2">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center text-center w-full mt-8 bg-gray-100 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Gostou deste produto?</h2>
                <p className="text-lg text-gray-700 mb-6">Veja nossa coleção completa e encontre mais produtos incríveis.</p>
                <button className="bg-black text-white p-4 rounded-lg">Ver Coleção Completa</button>
            </div>
        </div>
    );
};
