'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const clients = [
  {
    name: "Del Valle Sidra",
    service: "Branding & Diseño Gráfico",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=Del+Valle"
  },
  {
    name: "iCAP GLOBAL",
    service: "Marketing Digital & SEO",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=iCAP"
  },
  {
    name: "WASSINGTON",
    service: "Diseño Web & Desarrollo",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=WASSINGTON"
  },
  {
    name: "Toyota FEDERICO",
    service: "Comunicación & Eventos",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=Toyota"
  },
  {
    name: "PINTURERÍAS JABULANI",
    service: "Branding & Diseño Gráfico",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=Jabulani"
  },
  {
    name: "espai",
    service: "Diseño Web & UX/UI",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=espai"
  },
  {
    name: "Just+",
    service: "Marketing Digital & Redes",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=Just+"
  },
  {
    name: "FORGE",
    service: "Branding & Identidad Visual",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=FORGE"
  },
  {
    name: "LS2 HELMETS",
    service: "Diseño Gráfico & Packaging",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=LS2"
  },
  {
    name: "RACE TECH",
    service: "Audiovisual & Video",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=RACE+TECH"
  },
  {
    name: "M©F MARCA FUTURO",
    service: "Estrategia & Comunicación",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=M©F"
  },
  {
    name: "Matilde Oyharzabal",
    service: "Branding & Diseño Gráfico",
    logo: "https://via.placeholder.com/150x80/6B7280/FFFFFF?text=Matilde"
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

      {/* Left Band - Before Title - Full Height */}
      <motion.div 
        className="absolute left-0 top-0 w-48 h-full z-5"
        style={{
          backgroundImage: `url('/backgrounds/fondo-colores-tpi-6.png')`,
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

        {/* Middle Band - Between Title and Content - Full Height */}
        <motion.div 
          className="absolute left-1/2 top-0 w-32 h-full transform -translate-x-1/2 z-5"
          style={{
            backgroundImage: `url('/backgrounds/fondo-colores-tpi-6.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            x: backgroundX
          }}
        />

        {/* Right Side - Clients Grid and Stats */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-6xl">
            {/* Clients Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 border border-gray-200 h-16 sm:h-20 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-8 sm:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                        <div className="text-center text-white p-2 w-full">
                          <h4 className="font-bold text-xs mb-1 font-cairo">{client.name}</h4>
                          <p className="text-xs text-blue-200 leading-tight font-source-sans">{client.service}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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

      {/* Right Band - After Content - Full Height */}
      <motion.div 
        className="absolute right-0 top-0 w-48 h-full z-5"
        style={{
          backgroundImage: `url('/backgrounds/fondo-colores-tpi-6.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          x: backgroundX
        }}
      />
    </section>
  );
} 