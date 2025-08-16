"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Instagram,
  TrendingUp,
  Users,
  Heart,
  Zap,
  Camera,
  MessageCircle,
  Target,
  BarChart3,
  Sparkles,
  Mail,
} from "lucide-react"

type Answer = {
  text: string
  value: number
  icon: React.ReactNode
}

type Question = {
  id: number
  question: string
  icon: React.ReactNode
  answers: Answer[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quantas vezes por semana você posta no Instagram?",
    icon: <Camera className="w-8 h-8" />,
    answers: [
      { text: "Menos de 1", value: 1, icon: <span className="text-2xl">😴</span> },
      { text: "1–2 vezes", value: 2, icon: <span className="text-2xl">🐌</span> },
      { text: "3–5 vezes", value: 3, icon: <span className="text-2xl">🚀</span> },
      { text: "Mais de 5 vezes", value: 4, icon: <span className="text-2xl">⚡</span> },
    ],
  },
  {
    id: 2,
    question: "Seus posts recebem curtidas e comentários com frequência?",
    icon: <Heart className="w-8 h-8" />,
    answers: [
      { text: "Quase nunca", value: 1, icon: <span className="text-2xl">😢</span> },
      { text: "Às vezes", value: 2, icon: <span className="text-2xl">🤔</span> },
      { text: "Quase sempre", value: 3, icon: <span className="text-2xl">😊</span> },
      { text: "Sempre", value: 4, icon: <span className="text-2xl">🔥</span> },
    ],
  },
  {
    id: 3,
    question: "Você sente que seus posts não alcançam as pessoas certas?",
    icon: <Target className="w-8 h-8" />,
    answers: [
      { text: "Sim, sempre tenho essa sensação", value: 1, icon: <span className="text-2xl">🎯</span> },
      { text: "Não, meu público me encontra", value: 4, icon: <span className="text-2xl">✨</span> },
    ],
  },
  {
    id: 4,
    question: "Já tentou crescer seu perfil sozinho e não teve resultado?",
    icon: <BarChart3 className="w-8 h-8" />,
    answers: [
      { text: "Sim, já tentei várias estratégias", value: 1, icon: <span className="text-2xl">😤</span> },
      { text: "Não, nunca tentei seriamente", value: 4, icon: <span className="text-2xl">🌱</span> },
    ],
  },
  {
    id: 5,
    question: "Qual é seu maior objetivo no Instagram?",
    icon: <Sparkles className="w-8 h-8" />,
    answers: [
      { text: "Ganhar mais seguidores", value: 3, icon: <Users className="w-6 h-6" /> },
      { text: "Ter mais engajamento", value: 4, icon: <MessageCircle className="w-6 h-6" /> },
      { text: "Viralizar meus posts", value: 2, icon: <TrendingUp className="w-6 h-6" /> },
      { text: "Tornar meu perfil popular", value: 3, icon: <Instagram className="w-6 h-6" /> },
    ],
  },
]

export default function InstagramQuiz() {
  const [currentStep, setCurrentStep] = useState<"landing" | "quiz" | "loading" | "result">("landing")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [finalPercentage, setFinalPercentage] = useState(0)

  const handleStartQuiz = () => {
    setCurrentStep("quiz")
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const answerValue = questions[currentQuestion].answers[selectedAnswer].value
      const newAnswers = [...answers, answerValue]
      setAnswers(newAnswers)
      setSelectedAnswer(null)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setCurrentStep("loading")
        startLoadingAnimation()
      }
    }
  }

  const startLoadingAnimation = () => {
    const targetPercentage = Math.floor(Math.random() * 10) + 90
    setFinalPercentage(targetPercentage)

    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 3 + 1

      if (progress >= targetPercentage) {
        progress = targetPercentage
        setLoadingProgress(progress)
        clearInterval(interval)

        setTimeout(() => {
          setCurrentStep("result")
        }, 500)
      } else {
        setLoadingProgress(progress)
      }
    }, 100)
  }

  const calculateResult = () => {
    return finalPercentage
  }

  const getResultMessage = (percentage: number) => {
    if (percentage >= 80) {
      return "Parabéns! Seu perfil tem grande potencial, mas ainda há espaço para otimizações que podem multiplicar seus resultados!"
    } else if (percentage >= 60) {
      return "Bom trabalho! Você está no caminho certo, mas algumas estratégias podem acelerar muito seu crescimento!"
    } else if (percentage >= 40) {
      return "Há muito potencial inexplorado! Com as estratégias certas, você pode transformar completamente seu perfil!"
    } else {
      return "Não se preocupe! Todo grande perfil começou do zero. Com nosso método, você vai descobrir estratégias poderosas para decolar!"
    }
  }

  const handleCTAClick = () => {
    window.open("https://cakto.com.br/ebook-instagram", "_blank")
  }

  if (currentStep === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 slide-up">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full animate-bounce">
                  <Instagram className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-work-sans)]">
                Seu Instagram <span className="text-primary animate-pulse">ESTÁ PARADO?</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-[family-name:var(--font-open-sans)]">
                Descubra o que está te segurando!
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Responda 5 perguntas rápidas e veja como turbinar seu perfil agora mesmo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="animate-pulse">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Crescimento Rápido</h3>
                  <p className="text-muted-foreground">Estratégias comprovadas para acelerar seu crescimento</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="animate-bounce">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Mais Seguidores</h3>
                  <p className="text-muted-foreground">Atraia o público certo para seu perfil</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="animate-pulse">
                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Engajamento Real</h3>
                  <p className="text-muted-foreground">Gere curtidas e comentários genuínos</p>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={handleStartQuiz}
              size="lg"
              className="text-xl px-12 py-6 pulse-glow hover:scale-110 transition-all duration-300 font-[family-name:var(--font-work-sans)] font-semibold animate-pulse"
            >
              <Zap className="w-6 h-6 mr-2 animate-bounce" />
              Quero descobrir meu potencial
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === "quiz") {
    const progress = ((currentQuestion + 1) / questions.length) * 100
    const question = questions[currentQuestion]

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            <Card className="border-0 shadow-xl slide-up hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full animate-bounce">{question.icon}</div>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground font-[family-name:var(--font-work-sans)]">
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {question.answers.map((answer, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`w-full p-6 text-left justify-start text-lg hover:scale-105 transition-all duration-300 ${
                      selectedAnswer === index ? "ring-2 ring-primary animate-pulse" : ""
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="animate-bounce">{answer.icon}</div>
                      <span>{answer.text}</span>
                    </div>
                  </Button>
                ))}
                <div className="pt-6">
                  <Button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="w-full py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      {currentQuestion < questions.length - 1 ? "Próxima pergunta" : "Ver resultado"}
                      <Zap className="w-5 h-5 animate-pulse" />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl slide-up">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-6 rounded-full animate-spin">
                    <TrendingUp className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                  Analisando seu perfil...
                </CardTitle>
                <p className="text-lg text-muted-foreground mb-8">
                  Calculando sua compatibilidade com crescimento rápido
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Progresso da análise</span>
                    <span className="text-sm font-semibold text-primary animate-pulse">
                      {Math.round(loadingProgress)}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-red-500 transition-all duration-300 ease-out rounded-full animate-pulse"
                      style={{ width: `${loadingProgress}%` }}
                    />
                  </div>
                </div>
                <div className="text-center space-y-3 text-sm text-muted-foreground">
                  <p className="animate-bounce">🔍 Analisando frequência de posts...</p>
                  <p className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                    📊 Calculando potencial de engajamento...
                  </p>
                  <p className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                    🎯 Identificando oportunidades de crescimento...
                  </p>
                  <p className="animate-bounce" style={{ animationDelay: "0.6s" }}>
                    ⚡ Gerando estratégias personalizadas...
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const percentage = calculateResult()
  const message = getResultMessage(percentage)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="border-0 shadow-2xl slide-up">
            <CardHeader className="pb-6">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-6 rounded-full animate-pulse">
                  <TrendingUp className="w-16 h-16 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                Seu Resultado
              </CardTitle>
              <div className="text-6xl md:text-8xl font-bold text-primary mb-4 animate-bounce">{percentage}%</div>
              <p className="text-xl text-muted-foreground">de compatibilidade com crescimento rápido</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">{message}</p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-foreground">🚀 Com nosso método, você vai aprender:</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>✅ Estratégias que podem aumentar seu alcance em poucos dias</li>
                  <li>✅ Como criar conteúdo que viraliza naturalmente</li>
                  <li>✅ Técnicas para atrair seguidores genuínos</li>
                  <li>✅ Segredos do algoritmo do Instagram</li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Mail className="w-6 h-6 text-primary animate-bounce" />
                  <h3 className="text-lg font-semibold text-foreground">📧 Entrega Instantânea</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Você receberá o material digital completo no email cadastrado no momento da compra.</strong>{" "}
                  Lá você encontrará um método comprovado e testado por milhares de pessoas para transformar seu
                  Instagram em uma máquina de crescimento e engajamento real!
                </p>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-red-500/10 border-2 border-primary/30 p-8 rounded-xl">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold text-foreground">🌟 Última Chance!</h3>
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed mb-4">
                  <span className="text-primary animate-pulse">Você está a um passo</span> de ter acesso às melhores
                  estratégias para se tornar famoso no Instagram!
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Clique no botão abaixo e adquira aquilo que vai{" "}
                  <strong className="text-primary">decidir o futuro das suas redes sociais!</strong>
                </p>
              </div>
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="text-xl px-12 py-6 pulse-glow hover:scale-110 transition-all duration-300 font-[family-name:var(--font-work-sans)] font-semibold animate-pulse"
              >
                <Zap className="w-6 h-6 mr-2 animate-bounce" />
                Sim, quero receber o Ebook
              </Button>
              <p className="text-sm text-muted-foreground animate-pulse">
                🔒 Acesso imediato • 100% Digital • Garantia de satisfação
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
