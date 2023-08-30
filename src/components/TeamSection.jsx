import suman from "../assets/suman.webp";
import manash from "../assets/man.webp";
import pritam from "../assets/pritam.webp";

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Manash P',
      designation: 'Founder & CEO',
      email: 'manash@qoptars.com',
      linkedin: 'https://www.linkedin.com/in/manash-pratim-k-798966139',
      phone: '+919707114708',
      image: manash,
    },
    {
      name: 'Pritam B',
      designation: 'Founder & CTO',
      email: 'pritam@qoptars.com',
      linkedin: 'https://www.linkedin.com/in/pritam-basumatary-656228196',
      phone: '+919101066329',
      image: pritam,
    },
    {
      name: 'Shekhar S',
      designation: 'COO',
      email: 'shekhar@qoptars.com',
      linkedin: 'https://www.linkedin.com/in/shekhar-suman-kalita-936a8b1b9',
      phone: '+918638826738',
      image: suman,
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl place-items-center mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-Mont font-medium text-white mb-8 text-center">Team</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="rounded-lg p-6 justify-center item-center">
              <img
                src={member.image}
                alt={`${member.name} Qoptars`}
                className="h-32 w-32 object-cover rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl text-center font-Mont font-light text-white mb-2">{member.name}</h3>
              <p className="text-gray-300 mb-2 text-center font-extralight">{member.designation}</p>
              <div className="flex items-center justify-center">
                <a href={`mailto:${member.email}`} className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white"  viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
