'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden" style={{ width: '200vw' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Top Window - Mountain Range */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 bg-transparent z-5"
        style={{
          clipPath: 'polygon(0% 100%, 20% 60%, 40% 80%, 60% 40%, 80% 70%, 100% 50%, 100% 100%)'
        }}
      />

      {/* Top Left Window - Phone */}
      <div 
        className="absolute top-16 left-16 w-16 h-24 bg-transparent z-5"
        style={{
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
        }}
      />

      {/* Top Right Window - Envelope */}
      <div 
        className="absolute top-16 right-16 w-20 h-16 bg-transparent z-5"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)'
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
            className="text-center text-white"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-cairo">
              Hablemos de
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-8 font-cairo">
              tu proyecto
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-2xl mx-auto font-poppins">
              ¿Tienes una idea que quieres hacer realidad? Nos encantaría escucharla y ayudarte a transformarla en algo extraordinario.
            </p>
          </motion.div>
        </div>

        {/* Middle Window - Speech Bubble */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-transparent z-5"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 70% 70%, 70% 100%, 50% 70%, 0% 70%)'
          }}
        />

        {/* Right Side - Contact Info and Form */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg font-cairo">Email</h3>
                    <p className="text-gray-300 font-source-sans">hola@tpi.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg font-cairo">Teléfono</h3>
                    <p className="text-gray-300 font-source-sans">+54 11 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg font-cairo">Ubicación</h3>
                    <p className="text-gray-300 font-source-sans">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg font-cairo">Horarios</h3>
                    <p className="text-gray-300 font-source-sans">Lun - Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2 font-poppins text-sm">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-source-sans text-sm"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 font-poppins text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-source-sans text-sm"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2 font-poppins text-sm">Servicio de Interés</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-source-sans text-sm [&>option]:bg-white [&>option]:text-gray-900">
                    <option value="" className="bg-white text-gray-900">Selecciona un servicio</option>
                    <option value="marketing" className="bg-white text-gray-900">Marketing Digital</option>
                    <option value="web" className="bg-white text-gray-900">Diseño Web</option>
                    <option value="grafico" className="bg-white text-gray-900">Diseño Gráfico</option>
                    <option value="audiovisual" className="bg-white text-gray-900">Audiovisual</option>
                    <option value="comunicacion" className="bg-white text-gray-900">Comunicación</option>
                    <option value="eventos" className="bg-white text-gray-900">Eventos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 font-poppins text-sm">Mensaje</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-source-sans text-sm"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-poppins text-sm"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Window - Wave */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-transparent z-5"
        style={{
          clipPath: 'polygon(0% 100%, 20% 50%, 40% 100%, 60% 50%, 80% 100%, 100% 50%, 100% 100%)'
        }}
      />

      {/* Bottom Left Window - Rocket */}
      <div 
        className="absolute bottom-16 left-16 w-16 h-24 bg-transparent z-5"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />

      {/* Bottom Right Window - Target */}
      <div 
        className="absolute bottom-16 right-16 w-20 h-20 bg-transparent z-5"
        style={{
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
        }}
      />
    </section>
  );
} 