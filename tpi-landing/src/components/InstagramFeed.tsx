'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface InstagramPost {
  id: number;
  clientName: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  isVideo?: boolean;
}

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    clientName: "Sidra Del Valle",
    image: "/delValle/DV-1.png",
    caption: "Nuevo diseño de packaging para la línea premium 🍎✨",
    likes: 234,
    comments: 18
  },
  {
    id: 2,
    clientName: "ICAP Global",
    image: "/icap/12792370_526681524179134_1069938052893804079_o.png",
    caption: "Evento corporativo ICAP 2023 - Tecnología que conecta el mundo 🌐",
    likes: 189,
    comments: 12
  },
  {
    id: 3,
    clientName: "LS2 Helmets",
    image: "/ls2/1-DAY-FOR-DAKAR.jpg",
    caption: "Campaña Dakar Series - Seguridad y estilo en cada aventura 🏍️",
    likes: 456,
    comments: 34
  },
  {
    id: 4,
    clientName: "Toyota Federico",
    image: "/federico/Postal-A5-TESTDRIVE.jpg",
    caption: "Test Drive Experience - Vive la emoción Toyota 🚗💨",
    likes: 312,
    comments: 25
  },
  {
    id: 5,
    clientName: "Fundación Forge",
    image: "/forge/12241030_1689562977954145_2742162900722551631_o.png",
    caption: "Transformando vidas a través de la educación y el trabajo 📚💪",
    likes: 278,
    comments: 19
  },
  {
    id: 6,
    clientName: "Marca Futuro",
    image: "/MarcaFuturo/MF-PORTADA.png",
    caption: "Innovación y tecnología para el futuro que construimos 🚀",
    likes: 198,
    comments: 15
  },
  {
    id: 7,
    clientName: "Pinturerías Jabulani",
    image: "/jabulani/JABULANI-Perfil.png",
    caption: "Rediseño de marca y comunicación integral 🎨✨",
    likes: 167,
    comments: 11
  },
  {
    id: 8,
    clientName: "ESPAI",
    image: "/espai/Espai-Perfil.png",
    caption: "Creación de marca desde cero para proyecto inmobiliario premium 🏠💎",
    likes: 289,
    comments: 22
  },
  {
    id: 9,
    clientName: "Race Tech",
    image: "/raceTech/RACE-TECH-Perfil.png",
    caption: "Relanzamiento de marca con nueva identidad visual 🏁🔥",
    likes: 345,
    comments: 28
  }
];

export default function InstagramFeed() {
  return (
    <div className="w-full max-w-lg">
      {/* Header del Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-center justify-between mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">TPI</span>
          </div>
          <div>
            <h3 className="text-white font-semibold">tpideasok</h3>
            <p className="text-white/70 text-sm">Agencia de Comunicación</p>
          </div>
        </div>
        <div className="text-white/70">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </div>
      </motion.div>

      {/* Grid de Posts */}
      <div className="grid grid-cols-3 gap-2">
        {instagramPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
              {/* Imagen del Post */}
              <div className="aspect-square overflow-hidden">
                <Image
                  src={post.image}
                  alt={`${post.clientName} - ${post.caption}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h4 className="text-white font-semibold text-sm mb-1">{post.clientName}</h4>
                  <p className="text-white/90 text-xs line-clamp-2">{post.caption}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 mt-2 text-white/80 text-xs">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                      </svg>
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer del Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-6 text-center"
      >
        <p className="text-white/70 text-sm mb-3">Seguinos en Instagram</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
        >
          @tpideasok
        </motion.button>
      </motion.div>
    </div>
  );
}
