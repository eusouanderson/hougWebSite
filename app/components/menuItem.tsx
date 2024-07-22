import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface MenuItemProps {
  title: string;
  href: string;
}

export const MenuItem = ({ title, href }: MenuItemProps) => {
  return (
    <Link href={href}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1, filter: "blur(5px)" }}
        whileTap={{ scale: 0.95 }}
      >
        <h1 className="text-6xl font-bold">{title}</h1>
      </motion.li>
    </Link>
  );
};
