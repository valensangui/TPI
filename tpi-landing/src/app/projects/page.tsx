'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { navigateToTestimonials } from '../../components/SmoothScroll';
import Breadcrumb from '../../components/Breadcrumb';
import ClientSidebar from '../../components/ClientSidebar';
import MasonryGallery from '../../components/MasonryGallery';

// Datos de los proyectos por cliente con información real
const clientProjects = {
  'del-valle-sidra': {
    name: "Sidra Del Valle",
    logo: "/delValle/Perfil-DelValle.png",
    description: "Bodegas Cuvillier, una reconocida empresa familiar con más de 50 años en el mercado especializada en elaborar y comercializar Sidra Del Valle.",
    fullDescription: "En el año 2015, fuimos convocados para renovar su website, gestionar sus redes sociales, planificar y difundir el evento corporativo con el trade.",
    services: ["Social Media", "Diseño Gráfico", "Eventos", "Diseño Web"],
    year: "2015 - 2016",
    website: "http://www.delvalle.com.ar",
    images: [
      "/delValle/DV-1.png",
      "/delValle/14079760_926166524177975_1841574510252503130_n.png",
      "/delValle/12973288_839671319494163_5450503489905207703_o.png",
      "/delValle/12646868_798771976917431_1934304924549572541_o.jpg",
      "/delValle/11261633_804250233036272_4150278959224783253_o.png",
      "/delValle/980511_785821304879165_6992751908626761376_o.jpg",
      "/delValle/Corta-Semana.png",
      "/delValle/Desafio-DelValle-1.png"
    ]
  },
  'icap-global': {
    name: "ICAP Global",
    logo: "/icap/ICAP-Global-PerfilB.png",
    description: "ICAP Global es la empresa líder en integración tecnológica de audio, video, control y colaboración.",
    fullDescription: "Cuenta con presencia en Argentina, Chile, Colombia, Ibérica y USA. Reconocida por sus competidores dentro del mercado interno, el desafío fue desarrollar una estrategia de comunicación integral y una estrategia de medios con el objetivo de consolidar su posicionamiento en un contexto global. Hoy, continuamos realizando acciones para afianzar su imagen marcaria.",
    services: ["Branding", "Marketing Digital", "Diseño Gráfico", "Diseño Web", "Producción Audiovisual", "Eventos"],
    year: "2013",
    website: "http://www.icapglobal.com",
    images: [
      "/icap/12792370_526681524179134_1069938052893804079_o.png",
      "/icap/13130849_547678618746091_9046334155917751879_o.png",
      "/icap/13268437_557463757767577_6693461729684680195_o.png",
      "/icap/13517634_569490273231592_7944625644049030769_o.jpg",
      "/icap/13692975_576738699173416_5331470954002686018_o.png",
      "/icap/13698128_574298026084150_1017527427879438306_o.jpg",
      "/icap/14257583_597037493810203_5668655789391467076_o.png",
      "/icap/ICAP-ARGENTINA-Perfil-1.jpg"
    ]
  },
  'wassington': {
    name: "Wassington",
    logo: "/logos/wassington.jpg",
    description: "Wassington es una empresa líder en la fabricación de productos para el cuidado y conservación del calzado.",
    fullDescription: "Tiene presencia en todo el territorio nacional argentino y exporta a Uruguay, Paraguay, Chile, Venezuela, Estados Unidos y Brasil.",
    services: ["Branding", "Diseño Gráfico", "Marketing Digital", "Diseño Web"],
    year: "2018",
    website: null,
    images: []
  },
  'toyota-federico': {
    name: "Toyota Federico",
    logo: "/logos/toyotafederico.png",
    description: "Nombrados en 1993 como Concesionario Oficial Toyota, Federico S.A es una empresa familiar comprometida con la fidelización del cliente.",
    fullDescription: "Hoy, nos enfrentamos a un contexto económico difícil, en donde la situación impacta en el mercado con una baja del 54,8% de vehículos patentados sumado a objetivos comerciales exigentes por parte de Toyota. Respondemos de manera proactiva, trabajando enfocados en acciones de marketing, activación de campañas promocionales y canales digitales, comunicación en el punto de venta y actualización de su website.",
    services: ["Branding", "Diseño Gráfico", "Marketing Digital", "Diseño Web", "Eventos"],
    year: "2018",
    website: null,
    images: [
      "/federico/Postal-A5-TESTDRIVE.jpg",
      "/federico/Posteo-Club-Hipico-2-01-01.png"
    ]
  },
  'pinturerias-jabulani': {
    name: "Pinturerías del Centro Jabulani",
    logo: "/jabulani/JABULANI-Perfil.png",
    description: "Jabulani es uno de los representantes más importantes a nivel nacional de Pinturerías del Centro, la red de pinturerías más grande del país.",
    fullDescription: "Jabulani se destaca por ser líder en ventas y calidad de servicio. En principio, detectamos la necesidad de realizar un upgrade en la marca y en su comunicación. Diseñamos el logo respetando el manual de marca del franquiciante. Desarrollamos distintos proyectos y acciones promocionales. Elaboramos folletería, creamos una fan page con contenido exclusivo, completando el servicio con diseño en los puntos de venta.",
    services: ["Branding", "Estrategia Diferencial", "Diseño Gráfico", "Redes Sociales"],
    year: "2017",
    website: null,
    images: [
      "/jabulani/Captura-de-pantalla-2016-09-06-a-las-16.33.52.png",
      "/jabulani/12107740_631840770287714_3819074146132773777_n.jpg"
    ]
  },
  'espai': {
    name: "ESPAI",
    logo: "/espai/Espai-Perfil.png",
    description: "Quintans, una desarrolladora inmobiliaria integral, se crea en el 2010 con el objetivo de construir proyectos urbanos funcionales y de alta calidad.",
    fullDescription: "El trabajo fue para Espai, un emprendimiento inmobiliario en la zona de Barracas. Dado el perfil premium, creamos la marca desde cero, confeccionando el nombre, el diseño del logo, manual de marca y publicidad gráfica. Durante el proceso creativo, presentamos al cliente mockups de templates corporativos para afianzar su imagen de marca.",
    services: ["Branding", "Diseño Gráfico"],
    year: "2016",
    website: "www.espaiweb.com.ar",
    images: [
      "/espai/Papeleria-Mockup-ESPAI.jpg",
      "/espai/ESPAI-CORPOREO.jpg",
      "/espai/Cartel-Espai.jpg",
      "/espai/Cartel-espai-San-telmo.jpg"
    ]
  },
  'just-plus': {
    name: "JUST",
    logo: "/logos/just.png",
    description: "Just es una empresa familiar de origen Suizo dedicada al área de terapias de bienestar herbal.",
    fullDescription: "Su negocio se basa en un modelo de venta directa a través de la demostración de productos mediante consultoras independientes. Actualmente está presente en 35 países de todo el mundo. Cada año el cliente nos convoca para la renovación de un concepto que transmita la cultura corporativa para Just Latinoamérica. En la metodología de trabajo realizamos un proceso creativo cerrando el concepto en un video institucional.",
    services: ["Branding", "Producción Audiovisual"],
    year: "2015",
    website: "www.swissjustamerica.com",
    images: []
  },
  'forge': {
    name: "Fundación Forge",
    logo: "/forge/Forge-Perfil.png",
    description: "Fundación Forge es una organización sin fines de lucro creada en el 2005, dedicada a facilitar el acceso laboral de calidad a jóvenes de escasos recursos económicos en América Latina.",
    fullDescription: "Con sedes operativas en Argentina, Perú, México, Uruguay y Chile. En el año 2016, fuimos convocados para impulsar su identidad de marca trabajando en conjunto acciones de branding y marketing digital.",
    services: ["Branding", "Social Media", "Video", "Diseño Web"],
    year: "2016",
    website: "http://www.fondationforge.org",
    images: [
    ]
  },
  'ls2-helmets': {
    name: "LS2 Helmets",
    logo: "/ls2/LS2-PerfilB.png",
    description: "LS2 Helmets comienza como una pequeña fábrica de cascos de origen chino.",
    fullDescription: "En el 2005, se expande hacia Europa posicionándose como una marca de calidad y diseño. Trabajamos en su posicionamiento en el mercado argentino.",
    services: ["Comunicación ATL/BTL", "Branding", "Diseño Gráfico", "Social Media", "Eventos"],
    year: "2017",
    website: "http://www.ls2helmets.com",
    images: [
      "/ls2/1-DAY-FOR-DAKAR.jpg",
      "/ls2/flyer-reclutamiento-con-cascocs-3-02.jpg",
      "/ls2/Liao-Group_Gala-Dinner-Invitation.jpg",
      "/ls2/LS2-_-Dakar-Series-_-Guarani.jpg",
      "/ls2/LS2-Book-_-Tapa-_-Casco-con-mapa-fotografico.jpg",
      "/ls2/LS2-Cross-Country-_-Pharaons-Rally.jpg",
      "/ls2/EDITABLE_Graphic-LS2_Eicma-2012-01.jpg",
      "/ls2/LS2-POP-ART.jpg",
      "/ls2/Sealine-_-Marc-Coma-Campeon.jpg",
      "/ls2/IMG_8958-scaled.jpg",
      "/ls2/IMG_9014xx-scaled.jpg",
      "/ls2/IMG_9255-scaled.jpg",
      "/ls2/LS2Expostandgz-001gz-scaled.jpg",
      "/ls2/LS2Expostandgz-004gz-scaled.jpg",
      "/ls2/LS2Expostandgz-008gz-scaled.jpg"
    ]
  },
  'race-tech': {
    name: "Race Tech",
    logo: "/raceTech/RACE-TECH-Perfil.png",
    description: "Race Tech es una marca brasilera de productos para motociclistas que ofrecen seguridad, comodidad y diseño en sus equipos.",
    fullDescription: "Realizamos un análisis profundo de la competencia e identificamos que la marca necesitaba un cambio de identidad visual. Por ese motivo, trabajamos en la creación de un nuevo logo inspirándonos en la filosofía de Race Tech. Posteriormente relanzamos su posicionamiento, logrando altos niveles de awareness.",
    services: ["Branding", "Diseño Gráfico", "Comunicación ATL", "Social Media"],
    year: "2018",
    website: "racetechbr.com",
    images: [
      "/raceTech/avisos-1_1.jpg",
      "/raceTech/avisos-2_1.jpg",
      "/raceTech/brand-manual_1.jpg"
    ]
  },
  'mcf-marca-futuro': {
    name: "Marca Futuro - Un Proyecto de TPI",
    logo: "/MarcaFuturo/MarcaFuturo-Perfil.png",
    description: "En el 2004, a raíz de una investigación in-house sobre las nuevas tendencias tecnológicas, surgió la idea de crear un proyecto propio.",
    fullDescription: "Iniciamos el 2006 con 'Hogar y Oficina digital', en el tradicional edificio de La Europea. Concebido como un espacio versátil, abierto al público y empresas, creado con diseño de vanguardia reuniendo lo último en tecnología y confort, trabajamos con el aporte de más de 30 compañías líderes del mercado. Construyendo futuro: Container Sustentable CASA FOA 2009. Junto al Estudio de Arquitectura y Paisajismo Matilde Oyharzabal y en el marco de CASA FOA 2009, se desarrolló un proyecto de vivienda sustentable diseñada para generar el menor impacto al medio ambiente y a las generaciones futuras. Como agencia, desarrollamos la arquitectura marcaria, presentamos una estrategia de marketing digital con el objetivo de posicionar a Marca Futuro como un medio digital que provee información acerca de las tendencias tecnológicas. Gracias a la creación de contenido, logramos engagement, pudiendo alcanzar en el corto plazo más de 1500 seguidores.",
    services: ["Branding", "Eventos", "Diseño Web"],
    year: "2004 - 2009",
    website: "marcafuturo.com",
    images: [
      "/MarcaFuturo/1.jpg",
      "/MarcaFuturo/2.jpg",
      "/MarcaFuturo/3.jpg",
      "/MarcaFuturo/4.jpg",
      "/MarcaFuturo/5.jpg",
      "/MarcaFuturo/6.jpg",
      "/MarcaFuturo/7.jpg",
      "/MarcaFuturo/8.jpg",
      "/MarcaFuturo/9.jpg",
      "/MarcaFuturo/10.jpg",
      "/MarcaFuturo/Fotos.jpg",
      "/MarcaFuturo/Por-fuera.jpg",
      "/MarcaFuturo/Portada_1.jpg",
      "/MarcaFuturo/Trabajos_1.jpg",
      "/MarcaFuturo/CONTAINER-PERFIL.png"
    ]
  },
  'matilde-oyharzabal': {
    name: "Matilde Oyharzabal",
    logo: "/logos/matildeOyharzabal.png",
    description: "Desde el 2009 Matilde Oyharzabal preside su propio estudio de paisajismo junto a un equipo de colaboradores.",
    fullDescription: "Brindando servicios de diseño, dirección, asesoramiento y ejecución de la obra paisajística realizando encargos para distintos sectores del país. Entendiendo la función del paisajista, desarrollamos contenido en sus redes sociales a partir de material fotográfico utilizando elementos vegetales y naturales para anunciar fechas importantes en el calendario de la marca.",
    services: ["Branding", "Marketing Digital", "Fotografía", "Diseño Gráfico"],
    year: "2009",
    website: "matildeo.com",
    images: [
      "/matildeOyharzabal/12375046_914065798712735_9088441625044148312_o.jpg",
      "/matildeOyharzabal/13062481_991529624299685_1973228126861385849_n.jpg",
      "/matildeOyharzabal/Libritos.jpg",
      "/matildeOyharzabal/Pascuas2015_SiluetaFloreada.jpg"
    ]
  }
};

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const clientId = searchParams.get('client');
  const [currentClientId, setCurrentClientId] = useState(clientId);
  const [isNavigating, setIsNavigating] = useState(false);

  const client = currentClientId ? clientProjects[currentClientId as keyof typeof clientProjects] : null;
  
  // Obtener todos los IDs de clientes para la navegación
  const allClientIds = Object.keys(clientProjects);

  // Función para navegar entre proyectos
  const handleProjectNavigation = async (newClientId: string) => {
    if (isNavigating) return; // Prevenir navegaciones múltiples
    
    setIsNavigating(true);
    setCurrentClientId(newClientId);
    
    // Actualizar la URL sin recargar la página
    const newUrl = `/projects?client=${newClientId}`;
    window.history.pushState({ clientId: newClientId }, '', newUrl);
    
    // Scroll al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Pequeño delay para mostrar la transición
    setTimeout(() => setIsNavigating(false), 300);
  };

  // Actualizar el clientId cuando cambie la URL
  useEffect(() => {
    if (clientId) {
      setCurrentClientId(clientId);
    }
  }, [clientId]);

  // Manejar navegación del navegador (back/forward)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.clientId) {
        setCurrentClientId(event.state.clientId);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cliente no encontrado</h1>
          <p className="text-gray-600">El cliente especificado no existe en nuestra base de datos.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar Sticky */}
      <motion.header
        className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200 px-6 py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo TPI */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logos/tpi-logo.svg" 
              alt="TPI Logo" 
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-4">
            <Breadcrumb clientName={client.name} />
            
            {/* Indicador de navegación */}
            {isNavigating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 text-blue-600 text-sm"
              >
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <span>Cambiando proyecto...</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <ClientSidebar
            client={client}
            currentClientId={currentClientId || ''}
            allClientIds={allClientIds}
            onNavigate={handleProjectNavigation}
            onBackToTestimonials={navigateToTestimonials}
          />

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Resumen Card */}
            {client.fullDescription && (
              <motion.div
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-cairo pointer-events-none">Resumen del Proyecto</h2>
                <p className="text-gray-700 leading-relaxed pointer-events-none">
                  {client.fullDescription}
                </p>
              </motion.div>
            )}

            {/* Galería */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 font-cairo pointer-events-none">Galería de Proyectos</h2>
                <div className="text-sm text-gray-500 bg-blue-50 px-3 py-2 rounded-lg pointer-events-none">
                  💡 <strong>Tip:</strong> Haz click en cualquier imagen para verla en grande y navegar entre las imágenes del proyecto
                </div>
              </div>
              <MasonryGallery images={client.images} title={client.name} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
