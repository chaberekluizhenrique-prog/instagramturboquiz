"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero agendar um horário na Don Luan Barber Shop.")
    window.open(`https://wa.me/5541988292926?text=${message}`, "_blank")
  }

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/luxury-vintage-barbershop.png')`,
        }}
      >
        <div className="absolute inset-0 bg-barber-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          ESTILO E PRECISÃO
          <br />
          <span className="text-barber-gold">EM CADA CORTE</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
          Transforme seu visual com a arte da barbearia premium. Experiência única, qualidade incomparável.
        </p>

        <Button
          onClick={handleWhatsAppClick}
          className="bg-barber-gold hover:bg-yellow-500 text-barber-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          AGENDE SEU HORÁRIO AGORA
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
