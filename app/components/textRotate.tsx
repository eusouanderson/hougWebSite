"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    content: "visto"
  },
  {
    id: 2,
    content: "ouvido"
  },
  {
    id: 3,
    content: "único"
  }
];

const TextRotate = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex">
      <AnimatePresence>
        <motion.div
          key={items[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          className="absolute text-left top-0 right-4 lg:right-36"
        >
          <h1 className="text-4xl lg:text-6xl text-left font-bold">{items[index].content}</h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextRotate;