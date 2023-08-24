import phed from "../assets/partners/phed.jpeg";
import mivi from "../assets/partners/mivi-logo-r.jpeg";
import spf from "../assets/partners/spf-logo.png";

const ClienteleSection = () => {
  const logos = [
    phed,
    mivi,
    spf
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-Mont font-medium text-gray-100 mb-8 text-center">Clientele</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4"
            >
              <img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="max-h-20 max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
