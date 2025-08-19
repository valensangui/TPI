'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Límites de caracteres
  const LIMITS = {
    name: 50,
    email: 100,
    message: 1000
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Validar límites de caracteres
    if (value.length <= LIMITS[name as keyof typeof LIMITS]) {
      // Sanitizar entrada - remover caracteres peligrosos
      const sanitizedValue = value
        .replace(/[<>]/g, '') // Remover < y >
        .replace(/javascript:/gi, '') // Remover javascript:
        .replace(/on\w+=/gi, '') // Remover event handlers
        .trim();
      
      setFormData(prev => ({
        ...prev,
        [name]: sanitizedValue
      }));
    }
  };

  const validateForm = () => {
    // Validar que no estén vacíos
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return 'Todos los campos son obligatorios';
    }

    // Validar longitud mínima
    if (formData.name.trim().length < 2) {
      return 'El nombre debe tener al menos 2 caracteres';
    }

    if (formData.message.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres';
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Formato de email inválido';
    }

    // Validar que no contenga contenido malicioso
    const maliciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+=/i,
      /data:text\/html/i,
      /vbscript:/i
    ];

    const allText = `${formData.name} ${formData.email} ${formData.message}`.toLowerCase();
    for (const pattern of maliciousPatterns) {
      if (pattern.test(allText)) {
        return 'Contenido no permitido detectado';
      }
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar formulario antes de enviar
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus('error');
      // Mostrar error específico
      alert(validationError);
      return;
    }

    // Prevenir múltiples envíos
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Rate limiting básico - verificar si se envió recientemente
      const lastSubmission = localStorage.getItem('lastFormSubmission');
      const now = Date.now();
      if (lastSubmission && (now - parseInt(lastSubmission)) < 30000) { // 30 segundos
        throw new Error('Por favor espera 30 segundos antes de enviar otro mensaje');
      }

      // Configuración de EmailJS
      const serviceId = 'service_5weryh2';
      const autoReplyTemplateId = 'template_4nxu5h1';
      const notificationTemplateId = 'template_0x27rys';
      const publicKey = 'CIvBC4HXUqqLtYRXd';

      // Enviar auto-reply al usuario
      const autoReplyResult = await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          from_name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        },
        publicKey
      );

      // Enviar notificación a tu email
      const notificationResult = await emailjs.send(
        serviceId,
        notificationTemplateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim()
        },
        publicKey
      );

      if (autoReplyResult.status === 200 && notificationResult.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Guardar timestamp del último envío exitoso
        localStorage.setItem('lastFormSubmission', now.toString());
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 relative overflow-hidden" style={{ width: '200vw' }}>
      {/* Imagen de fondo izquierda - ocupa toda la primera parte visible */}
      <div className="absolute left-0 top-0 w-screen h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fondo Contacto"
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
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-cairo text-gray-900">
              Hablemos de
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 font-cairo" style={{ color: '#5B21B6' }}>
              tu proyecto
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 max-w-2xl mx-auto font-poppins">
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

        {/* Right Side - Contact Form and Info */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-6xl flex gap-14 items-start">
            {/* Left Side - Contact Form (Centro Principal) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 max-w-xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-white mb-6 font-cairo text-center">
                Deja tu contacto
              </h3>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5 mb-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={LIMITS.name}
                    className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <div className="text-xs text-gray-400 mt-1 text-right">
                    {formData.name.length}/{LIMITS.name}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={LIMITS.email}
                    className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <div className="text-xs text-gray-400 mt-1 text-right">
                    {formData.email.length}/{LIMITS.email}
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={LIMITS.message}
                    className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  ></textarea>
                  <div className="text-xs text-gray-400 mt-1 text-right">
                    {formData.message.length}/{LIMITS.message}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-500 text-center mt-4">Mensaje enviado con éxito!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center mt-4">Error al enviar el mensaje. Inténtalo de nuevo.</p>
                )}
              </form>
            </motion.div>

            {/* Right Side - Contact Info (Tamaño Medio) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-96"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-cairo text-center">
                Conecta con nosotros
              </h3>
              
              <div className="space-y-5">
                {/* Email */}
                <a 
                  href="mailto:maximo@tpi.com"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-11 h-11 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white font-cairo group-hover:text-purple-300 transition-colors">Email</h4>
                    <p className="text-sm text-gray-300 font-source-sans group-hover:text-white transition-colors">maximo@tpi.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/5491158452020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white font-cairo group-hover:text-green-300 transition-colors">WhatsApp</h4>
                    <p className="text-sm text-gray-300 font-source-sans group-hover:text-white transition-colors">+54 11 5845-2020</p>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/tpideasok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-11 h-11 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white font-cairo group-hover:text-pink-300 transition-colors">Instagram</h4>
                    <p className="text-sm text-gray-300 font-source-sans group-hover:text-white transition-colors">@tpideasok</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/company/tpi-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white font-cairo group-hover:text-blue-300 transition-colors">LinkedIn</h4>
                    <p className="text-sm text-gray-300 font-source-sans group-hover:text-white transition-colors">TPI - Think Positive Ideas</p>
                  </div>
                </a>
              </div>
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