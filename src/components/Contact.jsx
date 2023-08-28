import whatsappLogo from "../assets/social-media/whatsapp.png";
import instagramLogo from "../assets/social-media/instagram.png";
import linkedinLogo from "../assets/social-media/linkedin.png";

export default function Contact() {
  return (
    <div className="w-3/4 mx-auto pb-20">
      <h2 className="text-3xl text-white font-light py-5">
        Want to say hello?
        <br />
        Have questions?
        <br />
        Feel free to contact us.
      </h2>
      <div className="py-5 flex gap-4">
        <a aria-label="Chat on WhatsApp Qoptars" href="https://wa.me/+919707114708?text=Hi,%20I'm%20interested%20to%20know%20more%20about%20your%20%20company." target="_blank" rel="noreferrer"> <img className="w-10" alt="Chat on WhatsApp Qoptars" src={whatsappLogo} />
        </a>
        <a aria-label="Instagram Qoptars" href="https://instagram.com/qoptars" target="_blank" rel="noreferrer"> <img className="w-10" alt="Qoptars Instagram" src={instagramLogo} />
        </a>
        <a aria-label="LinkedIn Qoptars" href="https://linkedin.com/company/qoptars" target="_blank" rel="noreferrer"> <img className="w-10" alt="Qoptars LinkedIn" src={linkedinLogo} />
        </a>
      </div>
    </div>
  );
}
