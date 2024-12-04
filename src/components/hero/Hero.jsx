import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Sphere3D from "./Sphere3D";
import { Suspense } from "react";

const awardVariant = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariant = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hSection left'>
        <motion.h1
          initial={{ x: -50, y: -50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className='hTitle'
        >
          Hey There! <br />
          <span> I am Usaid Patel</span>
        </motion.h1>
        <motion.div
          variants={awardVariant}
          initial='initial'
          animate='animate'
          className='awards'
        >
          <motion.h2 variants={awardVariant}>Full Stack Developer</motion.h2>
          <motion.p variants={awardVariant} className='awardText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            sint!
          </motion.p>
          <motion.div className='awardList'>
            <motion.img
              variants={awardVariant}
              src='./award1.png'
              alt='award1'
            />
            <motion.img
              variants={awardVariant}
              src='./award2.png'
              alt='award2'
            />
            <motion.img
              variants={awardVariant}
              src='./award3.png'
              alt='award3'
            />
          </motion.div>
        </motion.div>
        <motion.div
          animate={{
            x: [5, 0],
            opacity: [0, 1, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className='scroll'
        >
          <motion.a href='#services'>
            <svg
              width='50px'
              height='50px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
                stroke='white'
                strokeWidth='1'
              />
              <motion.path
                initial={{ y: 0 }}
                animate={{
                  y: 3,
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                d='M12 5V8'
                stroke='white'
                strokeWidth='1'
                strokeLinecap='round'
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
      <div className='hSection right'>
        <motion.div
          variants={followVariant}
          initial='initial'
          animate='animate'
          className='follow'
        >
          <motion.a variants={followVariant} href=''>
            <img src='/instagram.png' alt='instagram' />
          </motion.a>
          <motion.a variants={followVariant} href=''>
            <img src='/facebook.png' alt='facebook' />
          </motion.a>
          <motion.a variants={followVariant} href=''>
            <img src='/youtube.png' alt='youtube' />
          </motion.a>
          <motion.div variants={followVariant} className='followTextContainer'>
            <div className='followText'>Follow Me</div>
          </motion.div>
        </motion.div>
        {/*Bubble*/}
        <Speech />
        {/* Certificate */}
        <motion.div
          animate={{
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 2, ease: "easeInOut" },
          }}
          className='certificate'
        >
          <img src='/certificate.png' alt='certificate' />
          <h3>Full Stack Developer</h3>
          <p>
            I’m a developer experienced in building websites for medium-sized
            businesses.I knows HTML and CSS3, React, Bootstrap and much more. So
            let’s keep in touch.
          </p>
        </motion.div>
        {/* Contact Button */}
        <motion.a
          animate={{
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 2, ease: "easeInOut" },
          }}
          href='/#contact'
          className='contactLink'
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              transition: { duration: 10, repeat: Infinity, ease: "linear" },
            }}
            className='contactButton'
          >
            <svg viewBox='0 0 200 200' width='150' height='150'>
              <circle cx='100' cy='100' r='90' fill='pink' />
              <path
                id='innerCirclePath'
                fill='none'
                d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
              />
              <text className='circleText'>
                <textPath href='#innerCirclePath'>Hire Now •</textPath>
              </text>
              <text className='circleText'>
                <textPath href='#innerCirclePath' startOffset='45%'>
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className='arrow'>
              <svg
                viewBox='0 0 24 24'
                width='50'
                height='50'
                fill='none'
                stroke='black'
                strokeWidth='2'
              >
                <line x1='6' y1='18' x2='18' y2='6' />
                <polyline points='9 6 18 6 18 15' />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className='bg'>
        <Suspense fallback='loading...'>
          <Sphere3D />
        </Suspense>

        <div className='hImg'>
          <img src='./hero.png' alt='hero' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
