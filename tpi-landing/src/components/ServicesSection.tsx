'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import BackgroundBar from './BackgroundBar';
import * as THREE from 'three';

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
  const cubeRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef3D = useRef<THREE.Mesh | null>(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!cubeRef.current) return;

    // Crear escena Three.js
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Crear cámara
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 8; // Aumentar distancia para cubo más grande

    // Crear renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(320, 320); // Aumentar tamaño del renderer
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Crear geometría del cubo
    const geometry = new THREE.BoxGeometry(4, 4, 4); // Cambiado de 3, 3, 3 a 4, 4, 4

    // Crear materiales para cada cara con colores diferentes
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x3B82F6, transparent: true, opacity: 0.9 }), // Azul - Creatividad
      new THREE.MeshBasicMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.9 }), // Púrpura - Innovación
      new THREE.MeshBasicMaterial({ color: 0x10B981, transparent: true, opacity: 0.9 }), // Verde - Calidad
      new THREE.MeshBasicMaterial({ color: 0xEF4444, transparent: true, opacity: 0.9 }), // Rojo - Pasión
      new THREE.MeshBasicMaterial({ color: 0xEAB308, transparent: true, opacity: 0.9 }), // Amarillo - Excelencia
      new THREE.MeshBasicMaterial({ color: 0xEC4899, transparent: true, opacity: 0.9 }), // Rosa - Resultados
    ];

    // Crear el cubo
    const cube = new THREE.Mesh(geometry, materials);
    cubeRef3D.current = cube;
    scene.add(cube);

    // Función para crear texto 3D
    const createText = (text: string, position: [number, number, number], rotation: [number, number, number]) => {
      // Crear un canvas para el texto
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width = 512; // Aumentado de 256 a 512 para más espacio
      canvas.height = 256;
      
      // Configurar el contexto - SIN fondo blanco
      context.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
      context.fillStyle = '#1f2937'; // Solo el color del texto
      context.font = 'bold 48px Arial'; // Cambiado de 36px a 48px para texto más grande
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      
      // Dibujar solo el texto
      context.fillText(text, canvas.width / 2, canvas.height / 2);
      
      // Crear textura y material
      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.MeshBasicMaterial({ 
        map: texture, 
        transparent: true, 
        opacity: 1.0,
        side: THREE.DoubleSide
      });
      
      // Crear geometría plana para el texto - ajustada para palabras largas
      const textGeometry = new THREE.PlaneGeometry(3, 1.5); // Ajustado de 2x2 a 3x1.5 para mejor proporción
      const textMesh = new THREE.Mesh(textGeometry, material);
      
      // Posicionar y rotar el texto
      textMesh.position.set(...position);
      textMesh.rotation.set(...rotation);
      
      // Agregar el texto como hijo del cubo para que rote con él
      cube.add(textMesh);
    };

    // Agregar texto a cada cara del cubo
    createText('MARKETING', [0, 0, 2.2], [0, 0, 0]); // Frontal - z positivo
    createText('DISEÑO', [0, 0, -2.2], [0, Math.PI, 0]); // Trasera - z negativo
    createText('WEB', [-2.2, 0, 0], [0, -Math.PI/2, 0]); // Izquierda - x negativo
    createText('VIDEO', [2.2, 0, 0], [0, Math.PI/2, 0]); // Derecha - x positivo
    createText('EVENTOS', [0, 2.2, 0], [-Math.PI/2, 0, 0]); // Superior - y positivo
    createText('COMUNICACIÓN', [0, -2.2, 0], [Math.PI/2, 0, 0]); // Inferior - y negativo

    // Agregar renderer al DOM
    cubeRef.current.innerHTML = '';
    cubeRef.current.appendChild(renderer.domElement);

    // Función de renderizado
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotación automática suave cuando no se está arrastrando
      if (!isDragging.current) {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
      }
      
      // Renderizar la escena completa (cubo + texto)
      renderer.render(scene, camera);
    };

    animate();

    // Eventos del mouse
    const handleMouseDown = (event: MouseEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging.current || !cubeRef3D.current) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.current.x,
        y: event.clientY - previousMousePosition.current.y
      };

      cubeRef3D.current.rotation.y += deltaMove.x * 0.01;
      cubeRef3D.current.rotation.x += deltaMove.y * 0.01;

      previousMousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Agregar event listeners
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseleave', handleMouseUp);

    // Cleanup
    return () => {
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('mouseleave', handleMouseUp);
      
      if (cubeRef.current && renderer.domElement.parentNode) {
        cubeRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      materials.forEach(material => material.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <section id="services" className="w-screen h-screen flex items-center justify-center bg-white relative overflow-hidden" style={{ width: '200vw' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Imagen de fondo izquierda - ocupa toda la primera parte visible */}
      <div className="absolute left-0 top-0 w-screen h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="Fondo Servicios"
          className="w-full h-full object-cover"
        />
        {/* Overlay sutil para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/20"></div>
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
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 font-cairo" style={{ color: '#f67676' }}>
              Servicios
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl mx-auto font-poppins">
              Transformamos ideas en experiencias digitales extraordinarias
            </p>
          </motion.div>
        </div>

        {/* Center - Cubo 3D Real con Three.js */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="relative w-80 h-80">
            <div 
              ref={cubeRef}
              className="w-full h-full cursor-grab active:cursor-grabbing"
              style={{ 
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            />
            
            {/* Texto Flotante */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-lg font-bold text-gray-800">¡Cubo 3D Real!</div>
              <div className="text-sm text-gray-600">Click y arrastra para rotar</div>
            </div>
          </div>
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
    </section>
  );
} 