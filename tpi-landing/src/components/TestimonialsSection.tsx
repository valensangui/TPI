'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const clients = [
  {
    name: "Del Valle Sidra",
    service: "Branding & Diseño Gráfico",
    logo: "/logos/delValle.png",
    id: "del-valle-sidra"
  },
  {
    name: "iCAP GLOBAL",
    service: "Marketing Digital & SEO",
    logo: "/logos/icap.png",
    id: "icap-global"
  },
  {
    name: "WASSINGTON",
    service: "Diseño Web & Desarrollo",
    logo: "/logos/wassington.jpg",
    id: "wassington"
  },
  {
    name: "Toyota FEDERICO",
    service: "Comunicación & Eventos",
    logo: "/logos/toyotafederico.png",
    id: "toyota-federico"
  },
  {
    name: "PINTURERÍAS JABULANI",
    service: "Branding & Diseño Gráfico",
    logo: "/logos/jabulani.png",
    id: "pinturerias-jabulani"
  },
  {
    name: "espai",
    service: "Diseño Web & UX/UI",
    logo: "/logos/espai.png",
    id: "espai"
  },
  {
    name: "Just+",
    service: "Marketing Digital & Redes",
    logo: "/logos/just.png",
    id: "just-plus"
  },
  {
    name: "FORGE",
    service: "Branding & Identidad Visual",
    logo: "/logos/forge.png",
    id: "forge"
  },
  {
    name: "LS2 HELMETS",
    service: "Diseño Gráfico & Packaging",
    logo: "/logos/LS2.png",
    id: "ls2-helmets"
  },
  {
    name: "RACE TECH",
    service: "Audiovisual & Video",
    logo: "/logos/raceTech.png",
    id: "race-tech"
  },
  {
    name: "M©F MARCA FUTURO",
    service: "Estrategia & Comunicación",
    logo: "/logos/marcaFuturo.png",
    id: "mcf-marca-futuro"
  },
  {
    name: "Matilde Oyharzabal",
    service: "Branding & Diseño Gráfico",
    logo: "/logos/matildeOyharzabal.png",
    id: "matilde-oyharzabal"
  }
];

export default function TestimonialsSection() {
  // Usar el scroll global en lugar del scroll de la sección
  const { scrollYProgress } = useScroll();

  // Transformar el scroll vertical en movimiento horizontal del fondo
  // El fondo se mueve en dirección opuesta al scroll para crear el efecto parallax
  const backgroundX = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section id="testimonials" className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden" style={{ width: '200vw' }}>
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
              Marcas que
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-8 font-cairo">
              Confían
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl mx-auto font-poppins">
              Hemos tenido el privilegio de trabajar con empresas reconocidas, transformando sus ideas en experiencias extraordinarias.
            </p>
          </motion.div>
        </div>

        {/* Right Side - Clients Grid and Stats */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-6xl">
            {/* Clients Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <a 
                    href={`/projects?client=${client.id}`}
                    className="block"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-200 h-24 sm:h-32 flex items-center justify-center cursor-pointer overflow-hidden">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                          <div className="text-center text-white p-3 w-full">
                            <h4 className="font-bold text-sm mb-1 font-cairo">{client.name}</h4>
                            <p className="text-xs text-blue-200 leading-tight font-source-sans">{client.service}</p>
                            <div className="text-xs text-blue-300 mt-1">Click para ver proyectos</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 font-cairo">150+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-source-sans">Proyectos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 font-cairo">98%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-source-sans">Satisfacción</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 font-cairo">5+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-source-sans">Años</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 font-cairo">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600 font-source-sans">Soporte</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 