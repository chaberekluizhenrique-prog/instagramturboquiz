"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Zap, Eye, Package } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "Cortes Masculinos",
      description: "Cortes clássicos e modernos, adaptados ao seu estilo e formato do rosto",
      price: "A partir de R$ 35",
      features: ["Consulta personalizada", "Lavagem incluída", "Finalização com pomada"],
    },
    {
      icon: Zap,
      title: "Barba Completa",
      description: "Aparar, modelar e finalizar sua barba com técnicas profissionais",
      price: "A partir de R$ 25",
      features: ["Aparar e modelar", "Hidratação", "Óleos especiais"],
    },
    {
      icon: Eye,
      title: "Sobrancelha",
      description: "Design e modelagem de sobrancelhas masculinas para um olhar marcante",
      price: "A partir de R$ 15",
      features: ["Design personalizado", "Técnica com navalha", "Acabamento perfeito"],
    },
    {
      icon: Package,
      title: "Combo Completo",
      description: "Corte + Barba + Sobrancelha - O pacote completo para seu visual",
      price: "A partir de R$ 65",
      features: ["Economia de 15%", "Atendimento completo", "Resultado profissional"],
      popular: true,
    },
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero agendar um horário na Don Luan Barber Shop.")
    window.open(`https://wa.me/5541988292926?text=${message}`, "_blank")
  }

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-barber-black mb-4">
              NOSSOS <span className="text-barber-gold">SERVIÇOS</span>
            </h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de barbearia premium, sempre com a qualidade e atenção aos
              detalhes que você merece.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  service.popular ? "ring-2 ring-barber-gold" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-barber-gold text-barber-black px-3 py-1 text-xs font-bold">
                    POPULAR
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <div className="bg-barber-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-barber-gold" />
                  </div>

                  <h3 className="font-bebas text-xl text-barber-black mb-2">{service.title}</h3>

                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  <div className="text-barber-gold font-bold text-lg mb-4">{service.price}</div>

                  <ul className="text-xs text-gray-500 space-y-1 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-barber-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={handleWhatsAppClick}
                    variant="outline"
                    className="w-full border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-barber-black transition-all duration-300 bg-transparent"
                  >
                    Agendar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-barber-gold hover:bg-yellow-500 text-barber-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              AGENDE TODOS OS SERVIÇOS
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
