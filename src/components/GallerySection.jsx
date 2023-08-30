import gallery1 from "../assets/gallery-1.webp";
import gallery2 from "../assets/gallery-2.webp";
import gallery3 from "../assets/gallery-3.webp";

const GallerySection = () => {

  return (
<section className="w-screen">
  <div className="w-full my-12">
    <div className="flex justify-center overflow-hidden">
      <div className="w-full md:h-[60vh] flex flex-col md:flex-row gap-2">
        <div className="h-full overflow-hidden md:basis-1/4">
          <img
            src={gallery1}
            alt="IITH Aerial View Faculty Towers"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full md:basis-2/4 overflow-hidden">
          <img
            src={gallery2}
            alt="IITH Academic Buildings"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full overflow-hidden md:basis-1/4">
          <img
            src={gallery3}
            alt="IITH Aerial View"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  
  );
};

export default GallerySection;
