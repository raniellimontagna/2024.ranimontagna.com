'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export function NewSiteBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const handleVisitNewSite = () => {
    window.open('https://ranimontagna.com', '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1 justify-center md:justify-start">
          <div className="text-sm md:text-base">
            <span className="font-semibold">🚀 Novo portfólio disponível!</span>
            <span className="ml-2 opacity-90">
              Visite meu novo site em ranimontagna.com com design renovado e novas funcionalidades.
            </span>
          </div>
          <button
            onClick={handleVisitNewSite}
            className="bg-white/20 hover:bg-white/30 transition-colors duration-200 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2 whitespace-nowrap"
          >
            Visitar novo site
            <FaExternalLinkAlt className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:bg-white/20 transition-colors duration-200 p-1 rounded-md"
          aria-label="Fechar aviso"
        >
          <FaTimes className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}
