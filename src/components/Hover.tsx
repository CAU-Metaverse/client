import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface FocusProps {
  children: ReactNode;
}

const Hover: FC<FocusProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.08 }}
    >
      {children}
    </motion.div>
  );
};

export default Hover;
