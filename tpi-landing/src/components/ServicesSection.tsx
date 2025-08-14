'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import BackgroundBar from './BackgroundBar';

const services = [
  {
    title: "Marketing Digital",
    shortDescription: "Redes Sociales, SEO y Analytics",
    fullDescription: "Redes Sociales, Email Marketing, SEO, SEM y Data Analytics para impulsar tu presencia online",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
    details: [
      "Redes Sociales (Facebook, Twitter, LinkedIn, Instagram, Pinterest, YouTube)",
      "Email Marketing",
      "Posicionamiento SEO",
      "Posicionamiento SEM (Google Ads)",
      "Data Analytics (Google Analytics)"
    ]
  },
  {
    title: "Diseño Web",
    shortDescription: "Sitios web responsive y modernos",
    fullDescription: "Desarrollo web responsive y moderno para crear experiencias digitales únicas",
    icon: "💻",
    color: "from-purple-500 to-pink-500",
    details: [
      "Desarrollo Web Responsive",
      "Landing Pages",
      "Actualización y Mantenimiento"
    ]
  },
  {
    title: "Diseño Gráfico",
    shortDescription: "Identidades visuales impactantes",
    fullDescription: "Creación de identidades visuales impactantes y contenido creativo",
    icon: "🎨",
    color: "from-green-500 to-teal-500",
    details: [
      "Diseño de Logotipo",
      "Contenido para Redes Sociales",
      "Ilustración",
      "Editorial",
      "Flyers",
      "Packaging",
      "Brochures"
    ]
  },
  {
    title: "Audiovisual",
    shortDescription: "Contenido multimedia profesional",
    fullDescription: "Producción de contenido multimedia profesional para tu marca",
    icon: "🎬",
    color: "from-orange-500 to-red-500",
    details: [
      "Fotografía",
      "Video",
      "Contenido para Redes Sociales"
    ]
  },
  {
    title: "Comunicación",
    shortDescription: "Estrategias integrales de marca",
    fullDescription: "Estrategias integrales de comunicación para posicionar tu marca",
    icon: "📢",
    color: "from-indigo-500 to-purple-500",
    details: [
      "Comunicación ATL/BTL",
      "Branding",
      "Prensa/RRPP",
      "Estrategia"
    ]
  },
  {
    title: "Eventos",
    shortDescription: "Eventos memorables para tu marca",
    fullDescription: "Organización y producción de eventos memorables para tu marca",
    icon: "🎪",
    color: "from-pink-500 to-rose-500",
    details: [
      "Stands",
      "Activaciones",
      "Fotografía y Video"
    ]
  }
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="w-screen h-screen flex items-center justify-center bg-white relative overflow-hidden" style={{ width: '200vw' }}>
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
              Nuestros
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-8 font-cairo">
              Servicios
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl mx-auto font-poppins">
              Transformamos ideas en experiencias digitales extraordinarias
            </p>
          </motion.div>
        </div>

        {/* Right Side - Services Grid */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl relative">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Card Principal */}
                <div className={`bg-white p-6 shadow-lg transition-all duration-500 h-full border border-gray-200 relative overflow-visible ${
                  hoveredService === index 
                    ? 'rounded-2xl shadow-2xl scale-110 z-50' 
                    : hoveredService !== null 
                      ? 'opacity-20 scale-95 blur-sm' 
                      : 'rounded-2xl hover:shadow-2xl'
                }`}>
                  {/* Contenido Principal */}
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-cairo">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-source-sans">
                    {service.shortDescription}
                  </p>
                  
                  {/* Indicador de Hover */}
                  {hoveredService === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Panel Expandido - Solo cuando está en hover */}
                {hoveredService === index && (
                  <div className={`absolute bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50 ${
                    // Posición específica para cada servicio
                    index === 0 ? 'left-1/2 top-[100%] transform -translate-x-1/2 -translate-y-1/2 w-96 h-[32rem]' : // Servicio 0
                    index === 1 ? 'left-1/2 top-[100%] transform -translate-x-1/2 -translate-y-1/2 w-96 h-96' : // Servicio 1
                    index === 2 ? 'left-1/2 top-[100%] transform -translate-x-1/2 -translate-y-1/2 w-96 h-[32rem]' : // Servicio 2
                    index === 3 ? 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96' : // Servicio 3
                    index === 4 ? 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96': // Servicio 4
                    index === 5 ? 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96' : // Servicio 5
                    index === 6 ? 'right-full top-0 mr-4 w-96 h-[32rem]' : // Servicio 6
                    index === 7 ? 'right-full top-0 mr-4 w-96 h-[32rem]' : // Servicio 7
                    'right-full top-0 mr-4 w-96 h-[32rem]' // Servicio 8
                  }`}>
                    {/* Header del servicio - Línea superior */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mr-4`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-cairo">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-base font-source-sans">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                    
                    {/* Contenido principal - Layout horizontal */}
                    <div className="flex gap-8">
                      {/* Columna izquierda - Descripción */}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 font-cairo">Descripción</h4>
                        <p className="text-gray-700 text-sm font-source-sans leading-relaxed">
                          {service.fullDescription}
                        </p>
                      </div>
                      
                      {/* Columna derecha - Lista de detalles */}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 font-cairo">Lo que incluye:</h4>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center font-source-sans">
                              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Botón de acción - Centrado en la parte inferior */}
                    <div className="mt-6 text-center">
                      <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-poppins text-lg">
                        Solicitar Servicio
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barra de fondo con imagen única */}
      <BackgroundBar 
        image="/backgrounds/fondo-colores-tpi-1.png"
        height="h-20"
      />
    </section>
  );
} 