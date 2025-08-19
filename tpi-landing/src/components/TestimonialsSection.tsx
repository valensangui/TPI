'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BackgroundBar from './BackgroundBar';

const clients = [
  {
    name: "Del Valle Sidra",
    service: "Branding & Diseño Gráfico",
    logo: "/logos/delValle.png",
    logoColor: "/delValle/Perfil-DelValle.png",
    id: "del-valle-sidra"
  },
  {
    name: "iCAP GLOBAL",
    service: "Marketing Digital & SEO",
    logo: "/logos/icap.png",
    logoColor: "/icap/ICAP-Global-PerfilB.png",
    id: "icap-global"
  },
  {
    name: "WASSINGTON",
    service: "Diseño Web & Desarrollo",
    logo: "/logos/wassington.jpg",
    logoColor: "/logos/wassington.jpg",
    id: "wassington"
  },
  {
    name: "Toyota FEDERICO",
    service: "Comunicación & Eventos",
    logo: "/logos/toyotafederico.png",
    logoColor: "/logos/toyotafederico.png",
    id: "toyota-federico"
  },
  {
    name: "PINTURERÍAS JABULANI",
    service: "Branding & Diseño Gráfico",
    logo: "/logos/jabulani.png",
    logoColor: "/jabulani/JABULANI-Perfil.png",
    id: "pinturerias-jabulani"
  },
  {
    name: "espai",
    service: "Diseño Web & UX/UI",
    logo: "/logos/espai.png",
    logoColor: "/espai/Espai-Perfil.png",
    id: "espai"
  },
  {
    name: "Just+",
    service: "Marketing Digital & Redes",
    logo: "/logos/just.png",
    logoColor: "/logos/just.png",
    id: "just-plus"
  },
  {
    name: "FORGE",
    service: "Branding & Identidad Visual",
    logo: "/logos/forge.png",
    logoColor: "/forge/Forge-Perfil.png",
    id: "forge"
  },
  {
    name: "LS2 HELMETS",
    service: "Diseño Gráfico & Packaging",
    logo: "/logos/LS2.png",
    logoColor: "/ls2/LS2-PerfilB.png",
    id: "ls2-helmets"
  },
  {
    name: "RACE TECH",
    service: "Audiovisual & Video",
    logo: "/logos/raceTech.png",
    logoColor: "/raceTech/RACE-TECH-Perfil.png",
    id: "race-tech"
  },
  {
    name: "M©F MARCA FUTURO",
    service: "Estrategia & Comunicación",
    logo: "/logos/marcaFuturo.png",
    logoColor: "/MarcaFuturo/MarcaFuturo-Perfil.png",
    id: "mcf-marca-futuro"
  },
  {
    name: "Matilde Oyharzabal",
    service: "Branding & Diseño Gráfico",
    logo: "/logos/matildeOyharzabal.png",
    logoColor: "/logos/matildeOyharzabal.png",
    id: "matilde-oyharzabal"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-screen h-screen flex items-center justify-center bg-white relative overflow-hidden" style={{ width: '200vw' }}>
      {/* Imagen de fondo izquierda - ocupa toda la primera parte visible */}
      <div className="absolute left-0 top-0 w-screen h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fondo Testimonios"
          className="w-full h-full object-cover"
        />
        {/* Overlay sutil para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

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
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 font-cairo" style={{ color: '#6ebe43' }}>
                Confían
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 max-w-2xl mx-auto font-poppins">
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
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-200 h-24 sm:h-32 flex items-center justify-center cursor-pointer overflow-hidden relative group">
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Logo en escala de grises (por defecto) */}
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-contain p-2 filter grayscale transition-all duration-500 absolute inset-0"
                          />
                          
                          {/* Logo en color (aparece en hover) */}
                          <Image
                            src={client.logoColor}
                            alt={client.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-contain p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 absolute inset-0"
                          />
                        </div>
                        
                        {/* Indicador de clickeable */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Texto sutil en la parte inferior */}
                        <div className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="text-xs text-blue-600 font-medium bg-white/90 px-2 py-1 rounded-full shadow-sm">
                            Ver proyectos
                          </span>
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
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 font-cairo">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-source-sans">Satisfacción</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 font-cairo">20+</div>
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