"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Criar email com os dados do formulário
    const subject = encodeURIComponent("Contato - Don Luan Barber Shop")
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n\n` +
        `Mensagem:\n${formData.message}`,
    )

    window.open(`mailto:chaberekluizhenrique@gmail.com?subject=${subject}&body=${body}`)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero agendar um horário na Don Luan Barber Shop.")
    window.open(`https://wa.me/5541988292926?text=${message}`, "_blank")
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Avenida Paris, 555",
      action: () => window.open("https://maps.google.com/?q=Avenida+Paris,+555", "_blank"),
    },
    {
      icon: Phone,
      title: "Telefone/WhatsApp",
      info: "(41) 98829-2926",
      action: handleWhatsAppClick,
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "chaberekluizhenrique@gmail.com",
      action: () => window.open("mailto:chaberekluizhenrique@gmail.com"),
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Seg-Sex: 9h-19h | Sáb: 8h-17h",
      action: null,
    },
  ]

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-barber-black mb-4">
              ENTRE EM <span className="text-barber-gold">CONTATO</span>
            </h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para atendê-lo! Entre em contato conosco para agendar seu horário ou esclarecer qualquer
              dúvida.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-bebas text-2xl text-barber-black mb-6">INFORMAÇÕES DE CONTATO</h3>

              {contactInfo.map((item, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-barber-gold/10 p-3 rounded-full">
                        <item.icon className="h-6 w-6 text-barber-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-barber-black mb-1">{item.title}</h4>
                        <p className="text-gray-600 mb-2">{item.info}</p>
                        {item.action && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={item.action}
                            className="border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-barber-black bg-transparent"
                          >
                            {item.title === "Endereço"
                              ? "Ver no Mapa"
                              : item.title === "Telefone/WhatsApp"
                                ? "Chamar no WhatsApp"
                                : "Enviar E-mail"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Map */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1234567890123!2d-49.2734567890123!3d-25.4567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzI0LjQiUyA0OcKwMTYnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização Don Luan Barber Shop"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bebas text-2xl text-barber-black mb-6">ENVIE UMA MENSAGEM</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Seu e-mail"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        type="tel"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <Textarea
                        placeholder="Sua mensagem"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-barber-gold hover:bg-yellow-500 text-barber-black font-bold py-3"
                    >
                      ENVIAR MENSAGEM
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
