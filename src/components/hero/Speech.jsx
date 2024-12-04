import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const speech = () => {
  return (
    <motion.div
      animate={{
        x: [100, 0],
        opacity: [0, 1],
        transition: { duration: 2, ease: "easeInOut" },
      }}
      className='bubbleContainer'
    >
      <div className='bubble'>
        <TypeAnimation
          sequence={[
            "expedita placeat accusantium ullam minima quis quase?",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            1000,
            "We produce food for Children",
            1000,
          ]}
          wrapper='span'
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src='/man.png' alt='bubble' />
    </motion.div>
  );
};

export default speech;
