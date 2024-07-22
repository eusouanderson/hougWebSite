"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';
import AnimateButton from '../components/animateButton';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const Modal = ({ isOpen, setIsOpen }: any) => {
  const [removeBg, setRemoveBg] = useState(false);
  const [blackAndWhite, setBlackAndWhite] = useState(false);
  const [cartoon, setCartoon] = useState(false);
  const [realistic, setRealistic] = useState(false);

  const toggleSwitch = (setState: (arg0: boolean) => any, state: any) => () => setState(!state);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            className="fixed inset-0 bg-[#101010] bg-opacity-80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="bg-white relative rounded-3xl p-8 z-50 w-[80%] h-[80%] lg:w-3/4 lg:h-auto flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <h1 className="text-4xl font-bold">Crie a sua estampa aqui</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 w-full h-full'>
              <div className='flex flex-col w-full h-full'>
                <textarea rows={4} className='px-8 py-4 border-black border-2 rounded-2xl text-black' placeholder="Deixe sua imaginação fluir"></textarea>

                <h1 className='text-3xl mt-8'>Configure sua arte</h1>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className='flex items-center gap-4'>
                    <div className="switch" data-isOn={removeBg} onClick={toggleSwitch(setRemoveBg, removeBg)}>
                      <motion.div className="handle" layout transition={spring} />
                    </div>
                    <h1 className='text-lg lg:text-xl leading-5'>Remover fundo</h1>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className="switch" data-isOn={blackAndWhite} onClick={toggleSwitch(setBlackAndWhite, blackAndWhite)}>
                      <motion.div className="handle" layout transition={spring} />
                    </div>
                    <h1 className='text-lg lg:text-xl leading-5'>Preto e branco</h1>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className="switch" data-isOn={cartoon} onClick={toggleSwitch(setCartoon, cartoon)}>
                      <motion.div className="handle" layout transition={spring} />
                    </div>
                    <h1 className='text-lg lg:text-xl leading-5'>Cartoon</h1>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className="switch" data-isOn={realistic} onClick={toggleSwitch(setRealistic, realistic)}>
                      <motion.div className="handle" layout transition={spring} />
                    </div>
                    <h1 className='text-lg lg:text-xl leading-5'>Realista</h1>
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-end gap-4'>
                <div className="min-h-[300px] w-full h-full rounded-3xl bg-gray-200 flex items-center justify-center">
                  <p>Imagem aqui</p>
                </div>
                <button className='flex flex-col group max-h-[45px] px-8 py-2 rounded font-bold bg-black text-2xl text-white overflow-hidden hover:scale-[103%] transition-all duration-500 ease-in-out'>
                  <span className='group-hover:-translate-y-10 translate-y-0 transition-all duration-500 ease-in-out'>Avançar</span>
                  <span className='group-hover:-translate-y-8 translate-y-0 transition-all duration-500 ease-in-out'>Avançar</span>
                </button>
              </div>
            </div>
            <Icon icon="carbon:close-filled" onClick={() => setIsOpen(false)} className='absolute -right-6 bg-white rounded-full -top-14 text-5xl cursor-pointer text-black rotate-0 hover:rotate-45 transition-all ease-in-out duration-500' />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PromptSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full h-full'>
      <div className='flex items-center justify-center bg-[url("/images/studio.jpeg")] min-h-[100vh] bg-cover bg-center bg-no-repeat w-full z-0 -mt-20'>
        <AnimateButton setIsOpen={setIsOpen}/>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PromptSection;
