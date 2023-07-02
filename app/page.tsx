'use client'

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-styles">
    <motion.div
      layout
      data-isopen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="child" />
    </motion.div>
    </div>
  );
}
