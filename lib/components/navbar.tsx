"use client"

import { Menu, Phone, MessageCircle } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const whatsappNumber = "5541988292962"
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento gratuito."

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-blue-600">
            <span className="text-sm font-bold text-white">SGS</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Serviços Gerais Silva</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button onClick={handleWhatsApp} variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
            <Phone className="h-4 w-4 mr-2" />
            (41) 98829-2962
          </Button>
          <Button onClick={handleWhatsApp} size="sm" className="bg-green-600 hover:bg-green-700">
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button onClick={handleWhatsApp} variant="outline" className="w-full text-green-600 border-green-600">
                  <Phone className="h-4 w-4 mr-2" />
                  (41) 98829-2962
                </Button>
                <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
