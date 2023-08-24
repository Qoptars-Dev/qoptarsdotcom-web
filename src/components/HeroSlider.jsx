import image1 from "../assets/IMG_5055.jpg";
import image2 from "../assets/LYD03263.jpeg";

import { Carousel } from "flowbite-react";

export default function HeroSlider() {
  return (
    <Carousel slide={false} className="h-[70vh] md:h-[90vh] mb-10">
      <div className="h-full">
        <img src={image1} alt="AirSonic S FPV" className="h-full w-full object-cover" />
        <div className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 text-gray-200 text-5xl md:text-7xl text-bold text-center font-Mont font-medium">
          <p>AirSonic S</p>
          <p className="text-gray-300 font-light text-xl md:text-5xl">
            Freestyle And Flagship FPV
          </p>
          <a
            href="https://airfpv.in/"
            target="_blank"
            rel="noreferrer"
            className="relative inline-block text-base md:text-xl px-4 py-2 font-light group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black group-hover:border-white"></span>
            <span className="relative text-black group-hover:text-white">
              Buy Now
            </span>
          </a>
        </div>
      </div>
      <div className="h-full">
        <img src={image2} alt="Vayu Copter Drone" className="object-cover w-full h-full" />
        <div className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 text-gray-200 text-5xl md:text-7xl text-bold text-center font-Mont font-medium">
        <p>VAYU</p>
          <p className="text-gray-300 font-medium text-xl md:text-5xl">
            Our state-of-the-art VayuCopter
          </p>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="relative inline-block text-base md:text-xl px-4 py-2 font-light group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black group-hover:border-white"></span>
            <span className="relative text-black group-hover:text-white">
              Coming Soon
            </span>
          </a>
        </div>
      </div>
    </Carousel>
  );
}
