'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BackgroundBar from './BackgroundBar';

const teamMembers = [
  {
    name: "Máximo Sanguinetti",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/msanguinetti",
    image: "/team/max.jpg"
  },
  {
    name: "Keren Weinstein",
    role: "Creative General Director",
    linkedin: "https://www.linkedin.com/in/keren-weinstein-29381120",
    image: "/team/ker.png"
  },
  {
    name: "Mercedes Tiagonce",
    role: "Creative Director",
    linkedin: "https://www.linkedin.com/in/mercedes-tiagonce-687a2215",
    image: "/team/mer.png"
  },
  {
    name: "Malena Saul",
    role: "Account Executive",
    linkedin: "https://www.linkedin.com/in/malena-luz-saul-b9b3621aa?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADDRficBspTKYPtzfFL-HhZoUqQ_Mbs6Kpg&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BABo3WybVRCueRWXfKiPm9Q%3D%3D",
    image: "/team/male.png"
  },
  {
    name: "Valentina Rovida López",
    role: "Community Manager",
    linkedin: "https://www.linkedin.com/in/valentina-rovida-l%C3%B3pez-b6a92821b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADd8-oIBZRqQUC9xwhP8xLvdw8Anq0_8puc&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BhRcg6UdBTFOw5cuWLyOU%2BQ%3D%3D",
    image: "/team/tina.png"
  },
  {
    name: "Javier Busto",
    role: "Creative Director",
    linkedin: "https://www.linkedin.com/in/javier-busto-b90b982b/",
    image: "/team/javi.jpeg"
  },
  {
    name: "Valentino Sanguinetti",
    role: "Digital Manager",
    linkedin: "https://www.linkedin.com/in/valentino-sanguinetti-8413a91b2/",
    image: "/team/valen.jpeg"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 relative overflow-hidden" style={{ width: '200vw' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* Left Side - Title and Subtitle */}
        <div className="flex-1 flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 font-cairo">
              Nuestro
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-8 font-cairo">
              Equipo
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl mx-auto font-poppins">
              Conoce a las mentes creativas detrás de Think Positive Ideas. Somos un equipo apasionado por transformar ideas en experiencias extraordinarias.
            </p>
          </motion.div>
        </div>

        {/* Right Side - Team Grid */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* Image */}
                  <div className="relative h-36 sm:h-40 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                        <h3 className="text-base font-bold mb-1 font-cairo">{member.name}</h3>
                        <p className="text-blue-200 mb-2 text-xs font-source-sans">{member.role}</p>
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-2.5 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold hover:bg-blue-700 transition-colors duration-300 font-poppins"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          Ver Perfil
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Default info */}
                  <div className="p-3 group-hover:hidden">
                    <h3 className="text-base font-bold text-gray-900 mb-1 font-cairo">{member.name}</h3>
                    <p className="text-gray-600 text-xs font-source-sans">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Barra de fondo con imagen única */}
      <BackgroundBar 
        image="/backgrounds/fondo-colores-tpi-4.png"
        height="h-20"
      />
    </section>
  );
} 