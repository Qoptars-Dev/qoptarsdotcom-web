import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Welcome() {

  const ref = useRef(null);
  const inView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if(inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={control}
      variants={{
        visible: { opacity: 1},
        hidden: { opacity: 0}
      }}
      transition={ { duration: 1 }}
      className="max-w-sm md:max-w-lg mx-auto my-6 text-center"
    >
        <h5 className="text-3xl md:text-5xl text-gray-100 font-Mont font-medium mb-4">
        Welcome To Qoptars      
      </h5>
      <h5 className="text-3xl text-gray-300 mb-3 font-light font-Mont tracking-tight">
        Dive into the world of Drones       
      </h5>
      <p className="font-normal px-6 text-gray-300">
        Discover the power of drone technology with Qoptars.
      </p>
    </motion.div>
  )
}


