'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    title: "Marketing Digital",
    description: "Redes Sociales, Email Marketing, SEO, SEM y Data Analytics para impulsar tu presencia online",
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
    description: "Desarrollo web responsive y moderno para crear experiencias digitales únicas",
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
    description: "Creación de identidades visuales impactantes y contenido creativo",
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
    description: "Producción de contenido multimedia profesional para tu marca",
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
    description: "Estrategias integrales de comunicación para posicionar tu marca",
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
    description: "Organización y producción de eventos memorables para tu marca",
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
  // Usar el scroll global en lugar del scroll de la sección
  const { scrollYProgress } = useScroll();

  // Transformar el scroll vertical en movimiento horizontal del fondo
  // El fondo se mueve en dirección opuesta al scroll para crear el efecto parallax
  const backgroundX = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section id="services" className="w-screen h-screen flex items-center justify-center bg-white relative overflow-hidden" style={{ width: '200vw' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Left Band - Before Title - Full Height */}
      <motion.div 
        className="absolute left-0 top-0 w-48 h-full z-5"
        style={{
          backgroundImage: `url('/backgrounds/fondo-colores-tpi-1.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          x: backgroundX
        }}
      />

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
              Transformamos ideas en experiencias digitales extraordinarias con nuestro enfoque de pensamiento positivo
            </p>
          </motion.div>
        </div>

        {/* Middle Band - Between Title and Content - Full Height */}
        <motion.div 
          className="absolute left-1/2 top-0 w-32 h-full transform -translate-x-1/2 z-5"
          style={{
            backgroundImage: `url('/backgrounds/fondo-colores-tpi-1.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            x: backgroundX
          }}
        />

        {/* Right Side - Services Grid */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-xl mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 font-cairo">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm font-source-sans">
                    {service.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-center font-source-sans">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-poppins text-sm">
                    Saber más
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Band - After Content - Full Height */}
      <motion.div 
        className="absolute right-0 top-0 w-48 h-full z-5"
        style={{
          backgroundImage: `url('/backgrounds/fondo-colores-tpi-1.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          x: backgroundX
        }}
      />
    </section>
  );
} 