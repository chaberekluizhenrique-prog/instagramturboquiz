import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      rating: 5,
      comment:
        "Excelente atendimento! O barbeiro é muito profissional e o resultado ficou perfeito. Já virei cliente fiel da Don Luan.",
      service: "Corte + Barba",
    },
    {
      name: "Rafael Santos",
      rating: 5,
      comment:
        "Melhor barbearia da região! Ambiente aconchegante, profissionais qualificados e preço justo. Super recomendo!",
      service: "Combo Completo",
    },
    {
      name: "João Oliveira",
      rating: 5,
      comment:
        "Sempre saio satisfeito daqui. A atenção aos detalhes é impressionante e o resultado sempre supera minhas expectativas.",
      service: "Corte Masculino",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-barber-black mb-4">
              O QUE DIZEM NOSSOS <span className="text-barber-gold">CLIENTES</span>
            </h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm a dizer sobre nossos
              serviços.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-barber-gold fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>

                  {/* Client Info */}
                  <div className="border-t pt-4">
                    <div className="font-semibold text-barber-black">{testimonial.name}</div>
                    <div className="text-sm text-barber-gold">{testimonial.service}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t">
            <div className="text-center">
              <div className="font-bebas text-3xl text-barber-gold mb-2">500+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl text-barber-gold mb-2">5★</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl text-barber-gold mb-2">5+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl text-barber-gold mb-2">100%</div>
              <div className="text-gray-600">Dedicação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
