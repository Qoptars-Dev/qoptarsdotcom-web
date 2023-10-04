import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


export default function VisionSection({ flip, imageSrc, imageAlt, title, text1, text2 }) {
    const containerClasses = flip ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row';

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
  
    return(
        <motion.section className="my-4"
        ref={ref}
        initial="hidden"
        animate={control}
        variants={{
          visible: { opacity: 1},
          hidden: { opacity: 0}
        }}
        transition={ { duration: 1 }}
        >
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex ${containerClasses}`}>
                {/* <!-- Image Section --> */}
                <div className="md:w-1/2 p-6">
                <img src={imageSrc} alt={imageAlt} className="w-full h-auto md:h-full md:w-auto mx-auto rounded-sm object-cover" />
                </div>
                
                {/* <!-- Text Description Section --> */}
                <div className="md:w-1/2 p-6">
                <h2 className="text-3xl font-Mont font-medium text-gray-100 mb-3">{title}</h2>
                <p className="text-gray-300 mb-3 text-lg">{text1}</p>
                <p className="text-gray-300">{text2}</p>
                </div>
            </div>
        </motion.section>
    )
}