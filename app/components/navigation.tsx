import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className='flex flex-col items-center justify-between h-[80%] w-[85%] z-50'>
    <div className="flex flex-col items-center">
      <MenuItem title="Início" href="#inicio" />
      <MenuItem title="Sobre" href="#sobre" />
      <MenuItem title="Coleções" href="#coleoes" />
      <MenuItem title="Criar Prompt" href="#prompt" />
      <MenuItem title="Contato" href="#contato" />
    </div>

    <div className="flex justify-center gap-4 w-full pt-10">
      <Link href={""} className="flex items-center justify-center group text-black text-2xl">
        <h1 className="relative">
          Instagram
          <span className="absolute left-0 -bottom-0 w-[0px] bg-black h-[2px] group-hover:w-full transition-all ease-in-out duration-700" />
        </h1>
        <Icon icon="uil:arrow-up" className='text-5xl text-black rotate-45 group-hover:rotate-90 transition-all ease-in-out duration-500' />
      </Link>

      <Link href={""} className="flex items-center justify-center group text-black text-2xl">
      <h1 className="relative">
          Facebook
          <span className="absolute left-0 -bottom-0 w-[0px] bg-black h-[2px] group-hover:w-full transition-all ease-in-out duration-700" />
        </h1>
        <Icon icon="uil:arrow-up" className='text-5xl text-black rotate-45 group-hover:rotate-90 transition-all ease-in-out duration-500' />
      </Link>
    </div>
  </motion.ul>
);