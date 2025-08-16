import { Award, Users, Clock, Star } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Produtos e técnicas de alta qualidade para resultados excepcionais",
    },
    {
      icon: Users,
      title: "Barbeiros Experientes",
      description: "Profissionais qualificados com anos de experiência no mercado",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Respeitamos seu tempo com agendamentos precisos e atendimento ágil",
    },
    {
      icon: Star,
      title: "Atendimento Exclusivo",
      description: "Cada cliente recebe atenção personalizada e cuidado individual",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-barber-black mb-4">
              SOBRE A <span className="text-barber-gold">DON LUAN</span>
            </h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Há anos dedicados à arte da barbearia, a Don Luan Barber Shop se estabeleceu como referência em cortes
              masculinos e cuidados com a barba, oferecendo uma experiência única que combina tradição e modernidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="/modern-barbershop-haircut.png"
                alt="Barbeiro profissional trabalhando"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-barber-gold text-barber-black p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="font-bebas text-3xl">5+</div>
                  <div className="text-sm font-medium">Anos de Experiência</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bebas text-2xl text-barber-black mb-4">NOSSA HISTÓRIA</h3>
                <p className="text-gray-600 mb-6">
                  Fundada com a paixão pela arte da barbearia clássica, a Don Luan nasceu do desejo de oferecer aos
                  homens modernos um espaço onde tradição e inovação se encontram. Cada corte é uma obra de arte, cada
                  cliente uma história única.
                </p>
                <p className="text-gray-600">
                  Nossa equipe de barbeiros especializados está sempre atualizada com as últimas tendências e técnicas,
                  garantindo que você saia sempre com o visual perfeito para qualquer ocasião.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-4">
                    <feature.icon className="h-8 w-8 text-barber-gold mx-auto mb-2" />
                    <h4 className="font-semibold text-barber-black text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
