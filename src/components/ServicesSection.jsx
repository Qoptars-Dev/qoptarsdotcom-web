
const ServicesSection = () => {
  const services = [
    {
      title: 'Drone Design',
      description: 'Our team of expert designers and engineers work together to create drones that are not only functional but also visually stunning. We believe that good design is a key factor in providing an exceptional user experience.',
      image: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/a49ddcf02cb88cac2d4b308f8c801eaa/large.jpg",
    },
    {
      title: 'Drone Assembly',
      description: 'We understand that not everyone has the time or knowledge to assemble their own drones, which is why we offer drone assembly services for our customers. Our team of professionals will ensure that your drone is assembled to perfection.',
      image: 'https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/20367-ts.jpg?itok=UkYM3Kdj',
    },
    {
      title: 'Drone Maintenance',
      description: 'We also offer drone maintenance services to ensure that your drone is always in top condition. Our team of technicians will conduct regular maintenance checks and repairs to ensure that you get the most out of your drone.',
      image: 'https://static.wixstatic.com/media/17cc55_59a4180dea814c0a89b964822e3fd7ee~mv2.jpg/v1/fill/w_1000,h_668,al_c,q_85/17cc55_59a4180dea814c0a89b964822e3fd7ee~mv2.jpg',
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-gray-200 mb-8 text-center font-Mont font-medium">What We Do</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 font-Mont rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} Service`}
                  className="h-64 w-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
