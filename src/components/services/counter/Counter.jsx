import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";
import "./counter.css";

const Counter = ({ from, to, text }) => {
  const [count, setCounter] = useState(from);
  const counterRef = useRef();
  const isInView = useInView(counterRef);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 3,
      ease: "easeInOut",
      onUpdate: (prev) => {
        setCounter(Math.floor(prev));
      },
    });

    return () => animation.cancel();
  }, [isInView, from, to]);

  return (
    <div className="counter">
      <div className="project" ref={counterRef}>
        <p className="pcounter">{count}+</p>
        <h3 className="text">{text}</h3>
      </div>
    </div>
  );
};

export default Counter;
