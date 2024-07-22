import React from 'react'
import { ButtonHeader } from '../components/buttonHeader'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className='flex relative items-center justify-center bg-[url("/images/header.jpeg")] lg:min-h-[80vh] min-h-[60vh] bg-cover bg-center bg-no-repeat w-full pt-28'>
      <ButtonHeader className="absolute right-20 top-40" />
      <ButtonHeader className="absolute left-20 top-60" />
      <ButtonHeader className="absolute right-40 top-[27em]" />

      <div className='absolute inset-0 flex items-center justify-center'>
        <Image
          src="/gif/moving-cloth.gif"
          width={800}
          height={800}
          className='lg:-ml-20 -mb-28 z-[19] w-[700px] h-[700px] lg:w-[800px] lg:h-[800px]'
          alt="Casaco 3D em movimento"
        />
      </div>

      <h1 className='absolute left-12 lg:left-60 top-40 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-right text-white text-5xl lg:text-7xl font-bold'>Crie uma <br/>roupa única</h1>
      <h1 className='absolute leading-9 -right-12 lg:right-80 bottom-44 lg:top-80 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-left text-white text-5xl lg:text-7xl w-[250px] font-bold'>com a sua <span className='text-3xl lg:text-7xl'>personalidade</span></h1>
    </div>
  )
}
