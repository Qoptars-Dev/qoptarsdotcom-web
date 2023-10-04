import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import whatsappLogo from "../assets/social-media/whatsapp.png";
import instagramLogo from "../assets/social-media/instagram.png";
import linkedinLogo from "../assets/social-media/linkedin.png";

export default function Contact({ text }) {
  const letters = Array.from(text);

  const ref = useRef(null);
  const inView = useInView(ref);
  const control = useAnimation();

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="w-3/4 mx-auto pb-20 flex flex-col md:flex-row justify-around">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={container}
      >
        <h2 className="text-3xl text-white font-light py-5">
          Want to say hello?
          <br />
          Have questions?
          <br />
        </h2>

        {letters.map((letter, index) => (
          <motion.span
            ref={ref}
            className="text-lg text-white"
            key={index}
            variants={child}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}

        <div className="py-5 flex gap-4">
          <a
            aria-label="Chat on WhatsApp Qoptars"
            href="https://wa.me/+919707114708?text=Hi,%20I'm%20interested%20to%20know%20more%20about%20your%20%20company."
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              className="w-10"
              alt="Chat on WhatsApp Qoptars"
              src={whatsappLogo}
            />
          </a>
          <a
            aria-label="Instagram Qoptars"
            href="https://instagram.com/qoptars"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img className="w-10" alt="Qoptars Instagram" src={instagramLogo} />
          </a>
          <a
            aria-label="LinkedIn Qoptars"
            href="https://linkedin.com/company/qoptars"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img className="w-10" alt="Qoptars LinkedIn" src={linkedinLogo} />
          </a>
        </div>
      </motion.div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.6642943520839!2d78.12317777433168!3d17.595816137036444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf74d7593e7b7%3A0x96e0ba6acb5ca6e8!2sIIT%20Hyderabad%2C%20Academic%20Block-C!5e1!3m2!1sen!2sin!4v1696343318347!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
