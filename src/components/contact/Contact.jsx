import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSVG";

const variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };

  const isInView = useInView(ref);
  return (
    <div className="contact" ref={ref} onSubmit={sendEmail}>
      <div className="cSection">
        <motion.form
          variants={variants}
          animate={isInView ? "animate" : "initial"}
          ref={form}
        >
          <motion.h1 variants={variants} className="cTitle">
            Get in Touch
          </motion.h1>
          <motion.div variants={variants} className="formItem">
            <motion.div variants={variants} className="name">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
              />
            </motion.div>
            <motion.div variants={variants} className="email">
              <label>Email</label>
              <input type="email" placeholder="Enter Email" name="user_email" />
            </motion.div>
            <motion.div variants={variants} className="message">
              <label>Message</label>
              <textarea
                name="user_message"
                id=""
                rows="10"
                placeholder="Write Your Message..."
              ></textarea>
            </motion.div>
            <motion.button variants={variants} className="formButton">
              Send
            </motion.button>
            {success && <p className="success">Message Sent Successfully</p>}
            {error && <p className="error">Something Went Wrong!</p>}
          </motion.div>
        </motion.form>
      </div>
      <motion.div
        className="svg"
        variants={variants}
        animate={isInView ? "animate" : "initial"}
      >
        <ContactSvg />
      </motion.div>
    </div>
  );
};

export default Contact;
