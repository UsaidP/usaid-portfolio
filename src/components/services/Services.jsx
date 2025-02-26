import "./services.css";
import { useRef, useState } from "react";
import ComputerModalContainer from "./computer/ComputerModalContainer.jsx";
import PsModalContainer from "./ps5/psModalContainer.jsx";
import MugModalContainer from "./mug/MugModalContainer.jsx";
import Counter from "./Counter/Counter.jsx";
import { motion, useInView } from "motion/react";

const services = [
  { id: 1, image: "./service1.png", title: "Web Development", counter: 50 },
  { id: 2, image: "./service2.png", title: "Product Design", counter: 15 },
  { id: 3, image: "./service3.png", title: "Branding", counter: 58 },
];
const titleVariant = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const showcaseVariant = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      ease: "easeInOut",
    },
  },
};
const Services = () => {
  const ref = useRef();
  const [servicesId, setServicesId] = useState(1);
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="service" ref={ref}>
      <div className="sService left">
        <div className="serviceList">
          <motion.h1
            variants={titleVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="sTitle"
          >
            How do I help?
          </motion.h1>
          <motion.div
            variants={showcaseVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="serviceList"
          >
            {services.map((service) => (
              <motion.div
                variants={showcaseVariant}
                className="showcase"
                key={service.id}
                onClick={() => setServicesId(service.id)}
              >
                <div className="serviceIcon">
                  <img src={service.image} alt="img" />
                </div>
                <div className="serviceInfo">
                  <h2>{service.title}</h2>
                  <h3>{service.counter + " Projects"}</h3>
                </div>
              </motion.div>
            ))}
            <div className="counter">
              <Counter from={0} to={12} text={"Project Completed"} />
              <Counter from={0} to={80} text={"Happy Client"} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="sService right">
        {servicesId === 1 ? (
          <ComputerModalContainer />
        ) : servicesId === 2 ? (
          <MugModalContainer />
        ) : (
          <PsModalContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
