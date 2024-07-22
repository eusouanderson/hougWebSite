/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

type CartItem = {
    id: number;
    src: string;
    title: string;
    size: string;
    quantity: number;
    price: string;
};

const cartItems: CartItem[] = [
    { id: 1, src: 'url-da-imagem-1.jpg', title: 'Produto 1', size: 'M', quantity: 1, price: 'R$100,00' },
    { id: 2, src: 'url-da-imagem-2.jpg', title: 'Produto 2', size: 'L', quantity: 2, price: 'R$200,00' },
];

const CartPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));
            return total + price * item.quantity;
        }, 0).toFixed(2).replace('.', ',');
    };

    return (
        <div className="relative">
            <button onClick={toggleCart} className='relative'>
                <Icon icon="uil:cart" className='text-4xl text-white' />
                <span className='text-sm flex items-center justify-center absolute -top-2 -right-5 min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] text-white bg-black rounded-full'>
                    {cartItems.length}
                </span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[51]" onClick={toggleCart} />
            )}

            <div className={`fixed top-0 right-0 h-full w-[90%] lg:w-2/5 bg-white shadow-lg z-[52] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="py-8 px-10 flex flex-col h-full">
                    <div className='flex w-full justify-between items-center mb-8'>
                        <h2 className="text-3xl font-bold font-bebas">Carrinho de Compras</h2>
                        <Icon icon="zondicons:close-solid" className="text-2xl cursor-pointer" onClick={toggleCart} />
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between p-4 border-b">
                                <img src={item.src} alt={item.title} className="w-16 h-16 object-cover rounded" />
                                <div className="ml-4 flex-1">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-600">Tamanho: {item.size}</p>
                                    <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                                    <p className="font-bold">{item.price}</p>
                                </div>
                                <button className="text-red-600">
                                    <Icon icon="mdi:delete" className="text-2xl" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="border-t p-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-bold">Subtotal:</span>
                            <span className="text-lg font-bold">R${calculateSubtotal()}</span>
                        </div>
                        <button className="w-full bg-black text-white py-2 mb-2 rounded">Finalizar Compra</button>
                        <button onClick={toggleCart} className="w-full bg-gray-300 text-black py-2 rounded">Continuar Comprando</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPopup;
