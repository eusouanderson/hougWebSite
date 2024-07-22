import Link from 'next/link';
import React from 'react';

interface ButtonHeaderProps {
  className: string;
}

export const ButtonHeader: React.FC<ButtonHeaderProps> = ({ className }) => {
  return (
    <div className={`${className} z-[19]`}>
      <span className='relative flex items-center justify-center border-2 border-white rounded-full min-w-[50px] min-h-[50px] w-[50px] h-[50px] animate-pulse'>
        <Link href={""} className='absolute flex items-center justify-center bg-white text-xl font-bold rounded-full min-w-[30px] min-h-[30px] w-[30px] h-[30px] hover:w-[50px] hover:h-[50px] transition-all ease-in-out duration-500 animate-none' />
      </span>
    </div>
  );
}
