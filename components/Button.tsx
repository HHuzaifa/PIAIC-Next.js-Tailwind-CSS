"use client"
import { FC } from "react";
import { motion } from "framer-motion";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
  <motion.button whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.2 }} className="w-32 px-4 py-3  bg-gradient-to-r from-[#00504B] via-[#09746F] to-[#03635E] text-white rounded-2xl font-semibold font-buttonFont">
      {text}
    </motion.button>
  )
};

export default Button;