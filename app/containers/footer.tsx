import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row relative justify-between w-full text-black max-w-[1400px] px-8 lg:px-20 py-10'>
      <div className='flex flex-col items-center lg:items-start text-2xl'>
        <Link href={"#"} className="text-3xl font-bold font-bebas">Início</Link>
        <Link href={"#sobre"} className="text-3xl font-bold font-bebas">Sobre</Link>
        <Link href={"#colecoes"} className="text-3xl font-bold font-bebas">Coleções</Link>
        <Link href={"#prompt"} className="text-3xl font-bold font-bebas">Criar com prompt</Link>
        <Link href={"#contato"} className="text-3xl font-bold font-bebas">Contato</Link>

        <div className='flex flex-col pt-10'>
          <span>©️ 2024</span>
          <h1 className='text-6xl font-bold'>HOUG Store</h1>
        </div>
      </div>
      
      <div className='flex flex-col gap-8'>
        <div className='flex gap-2'>
          <Icon icon="mingcute:facebook-fill" className='text-4xl text-black hover:scale-105 hover:rotate-45 transition-all ease-in-out duration-500 cursor-pointer' />
          <Icon icon="ic:sharp-whatsapp" className='text-4xl text-black hover:scale-105 hover:rotate-45 transition-all ease-in-out duration-500 cursor-pointer' />
          <Icon icon="ri:instagram-line" className='text-4xl text-black hover:scale-105 hover:rotate-45 transition-all ease-in-out duration-500 cursor-pointer' />
        </div>
        <div className='text-xl'>
          <h1>Instagram®</h1>
          <h1>contato@hougstore.com.br</h1>
          <h1>(00) 00000-0000</h1>
        </div>
        <span className='w-full h-[2px] rounded-xl bg-black' />
        <h1 className='text-3xl w-/4 font-bold'>Crie sua roupa única<br/> com sua identidade</h1>
      </div>
    </div>
  )
}
