"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/modern-fade-haircut.png",
      alt: "Corte masculino moderno com fade",
    },
    {
      src: "/styled-beard-trim-barbershop.png",
      alt: "Barba aparada e estilizada",
    },
    {
      src: "/classic-pompadour.png",
      alt: "Corte clássico pompadour",
    },
    {
      src: "/modern-beard-grooming.png",
      alt: "Modelagem de barba moderna",
    },
    {
      src: "/mens-undercut-barber.png",
      alt: "Undercut masculino profissional",
    },
    {
      src: "/luxury-vintage-barbershop.png",
      alt: "Interior da barbearia",
    },
    {
      src: "/barber-tools.png",
      alt: "Ferramentas profissionais",
    },
    {
      src: "/mens-grooming-pomade.png",
      alt: "Produtos de cuidado masculino",
    },
  ]

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-barber-black mb-4">
              NOSSA <span className="text-barber-gold">GALERIA</span>
            </h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Confira alguns dos nossos trabalhos e veja a qualidade e precisão que aplicamos em cada corte e serviço
              realizado.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-barber-black/0 group-hover:bg-barber-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-barber-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
