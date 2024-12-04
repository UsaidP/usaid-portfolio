import { motion } from "motion/react";

const varients = {
  initial: {
    x: 0,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 100,
    y: 200,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const Test = () => {
  return (
    <section>
      <motion.div
        variants={varients}
        initial='initial'
        animate='animate'
        style={{ position: "relative", top: 0, left: 0 }}
      >
        <h1>Hello Usaid</h1>
      </motion.div>
      <motion.div
        style={{
          width: "200px",
          height: "200px",
          background: "green",
        }}
        // initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: [0, 100], y: [0, 200], opacity: [0, 1] }}
        transition={{
          duration: 2,
          ease: "circInOut",
        }}
      ></motion.div>
    </section>
  );
};

export default Test;
