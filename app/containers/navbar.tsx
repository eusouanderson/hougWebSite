import React from 'react'
import { Icon } from '@iconify/react';
import { Menu } from '../components/menu';
import Link from 'next/link';
import CartPopup from '../components/cartPopup';

export const Navbar = () => {
    return (
        <nav className='flex fixed flex-row items-center justify-between w-full max-w-[1400px] h-[60px] bg-transparent px-8 lg:px-20 py-10 z-[21] -mb-28'>
            <Menu />

            <Link href={"/"}>
                <h1 className='font-bold text-white text-5xl lg:text-4xl font-bebas ml-24 lg:ml-0 bg-blend-multiply'>HOUG</h1>
            </Link>

            <div className='flex items-center justify-center gap-6'>
                <Link href={'/usuario'}>
                    <Icon icon="mingcute:user-4-fill" className='text-4xl text-white' />
                </Link>
                <CartPopup />
            </div>
        </nav>
    )
}

