"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

const quickResponses = [
  "What services do you offer?",
  "How can I get a quote?",
  "Do you provide 24/7 support?",
  "Tell me about cloud migration",
]

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm the Elevenxdesk virtual assistant. How can I help you today? Feel free to ask about our IT services, request a quote, or get support.",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "services": "We offer a comprehensive range of IT services including Cloud Solutions, Cybersecurity, Managed IT Services, Software Development, IT Consulting, Data Analytics, and Network Infrastructure. Would you like to learn more about any specific service?",
        "quote": "I'd be happy to help you get a quote! You can visit our quote page at /quote to fill out a detailed form, or I can connect you with our sales team. What type of service are you interested in?",
        "support": "We provide always-on support for managed service clients, with priority handling for critical incidents. For direct help, call +971 4 572 8900 or email support@elevenxdesk.com.",
        "cloud": "Our Cloud Solutions cover assessment, migration, security hardening, optimization, and ongoing operations across AWS, Azure, and Google Cloud. If you want, I can point you to the best starting option for your environment.",
        "default": "Thanks for your question. For project-specific guidance, connect with our team at contact@elevenxdesk.com or +971 4 572 8900. I can also help you prepare for a consultation.",
      }

      const lowerContent = content.toLowerCase()
      let response = responses.default

      if (lowerContent.includes("service")) response = responses.services
      else if (lowerContent.includes("quote") || lowerContent.includes("price") || lowerContent.includes("cost")) response = responses.quote
      else if (lowerContent.includes("support") || lowerContent.includes("24/7") || lowerContent.includes("help")) response = responses.support
      else if (lowerContent.includes("cloud") || lowerContent.includes("migration") || lowerContent.includes("aws") || lowerContent.includes("azure")) response = responses.cloud

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105",
          "bg-primary text-primary-foreground",
          isOpen && "rotate-90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card rounded-xl shadow-2xl border border-border transition-all duration-300 overflow-hidden",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Elevenxdesk Assistant</h3>
              <p className="text-xs text-primary-foreground/80">Online | Typically replies instantly</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-muted/30">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-2",
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                )}
              >
                {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>
              <div
                className={cn(
                  "max-w-[75%] rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-card border border-border rounded-lg px-3 py-2">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Responses */}
        {messages.length < 3 && (
          <div className="px-4 py-2 border-t border-border bg-card">
            <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1.5">
              {quickResponses.map((response) => (
                <button
                  key={response}
                  onClick={() => handleSend(response)}
                  className="text-xs px-2 py-1 rounded-full border border-border hover:bg-muted transition-colors"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend(input)
          }}
          className="p-3 border-t border-border bg-card flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!input.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </>
  )
}
