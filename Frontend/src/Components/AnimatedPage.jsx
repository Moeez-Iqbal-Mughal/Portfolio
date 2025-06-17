// AnimatedPage.js
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedPage = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;