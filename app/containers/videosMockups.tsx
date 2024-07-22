import Image from 'next/image'
import React from 'react'
import TextRotate from '../components/textRotate'
import { TagSpinning } from '../components/tagSpinning'

export const VideosMockups = () => {
  return (
    <div className='relative w-full'>
      <div className='absolute scale-75 lg:scale-125 -right-20 -top-40 lg:-top-20 z-20'>
        <TagSpinning />
      </div>
      <div className='flex flex-col relative justify-center w-full bg-[#fff] text-black rounded-3xl -mt-12 lg:-mt-4 py-20 z-10 overflow-x-hidden'>
        <div className='relative py-10'>
          <h1 className='w-3/4 mx-auto text-4xl lg:text-6xl text-center font-bold'>Roupas que falam mais alto que</h1>
          <h1 className='relative w-3/4 mx-auto text-4xl lg:text-6xl text-center font-bold'>
            <span className='mr-24'>palavras. Seja com nosso</span>
            <TextRotate />
          </h1>
          <h1 className='w-3/4 mx-auto text-4xl lg:text-6xl text-center font-bold'>streetwear personalizado por você.</h1>
        </div>
        <div className='flex items-center justify-center gap-20 mx-auto grid-cols-2 w-full max-w-[1200px]'>
          <Image
            src="/gif/casaco.gif"
            width={150}
            height={150}
            className='rounded-full'
            alt="Casaco 3D em movimento"
          />
          <Image
            src="/gif/calca.gif"
            width={150}
            height={150}
            className='rounded-full'
            alt="Calca 3D em movimento"
          />
          <Image
            src="/gif/short.gif"
            width={150}
            height={150}
            className='rounded-full'
            alt="Short 3D em movimento"
          />
          <Image
            src="/gif/casaco-branco.gif"
            width={150}
            height={150}
            className='rounded-full'
            alt="Casaco Branco 3D em movimento"
          />
        </div>
      </div>
    </div>
  )
}
