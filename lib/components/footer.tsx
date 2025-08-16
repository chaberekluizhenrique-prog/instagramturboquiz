import { Scissors, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-barber-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-barber-gold p-2 rounded-full">
                  <Scissors className="h-6 w-6 text-barber-black" />
                </div>
                <span className="font-bebas text-2xl">DON LUAN BARBER SHOP</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transformando o visual masculino com estilo, precisão e qualidade. Sua barbearia de confiança para um
                visual sempre impecável.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-barber-gold hover:text-barber-black p-2 rounded-full transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-barber-gold hover:text-barber-black p-2 rounded-full transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="font-bebas text-lg mb-4 text-barber-gold">LINKS RÁPIDOS</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-300 hover:text-barber-gold transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-300 hover:text-barber-gold transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-300 hover:text-barber-gold transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-gray-300 hover:text-barber-gold transition-colors">
                    Galeria
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-300 hover:text-barber-gold transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-bebas text-lg mb-4 text-barber-gold">CONTATO</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-barber-gold" />
                  <span className="text-gray-300 text-sm">Avenida Paris, 555</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-barber-gold" />
                  <span className="text-gray-300 text-sm">(41) 98829-2926</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-barber-gold" />
                  <span className="text-gray-300 text-sm">chaberekluizhenrique@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© {currentYear} Don Luan Barber Shop. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
