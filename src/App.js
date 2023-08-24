import HeroSlider from "./components/HeroSlider";
import DefaultNavbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import VisionSection from "./components/VisionSection";
import ProductSection from "./components/ProductSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import VerticalTimeline from "./components/VerticalTimeline";
import GallerySection from "./components/GallerySection";
import airsonic from "./assets/airsonic.jpeg";
import visionImg from "./assets/vision.jpg";
import InvestorsSection from "./components/InvestorsSection";
import ClienteleSection from "./components/ClienteleSection";

function App() {
  return (
    <div>
      <DefaultNavbar />
      <HeroSlider />
      <Welcome />
      <VisionSection flip={true}
        imageSrc={visionImg}
        imageAlt="vayu-drone"
        title="Our Vision"
        text1="We're revolutionizing the drone industry with cutting-edge technology and design."
        text2="At Qoptars, we specialize in manufacturing quadcopters that are not only efficient but also easy to use. Our mission is to provide our customers with the best possible drone experience."
        />
        <ProductSection flip={false} 
          imageSrc={airsonic}
          imageAlt={"airsonics"}
          title={"Our Products"}
          text1={"We have two products currently on the market: AirSonic and AirCine. "}
          text2={"Stay tuned for our upcoming product, Vayu, which is set to take the drone industry by storm."}
        />
        <ServicesSection />
        <GallerySection />
        <TeamSection />
        <VerticalTimeline />
        <InvestorsSection />
        <ClienteleSection />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
