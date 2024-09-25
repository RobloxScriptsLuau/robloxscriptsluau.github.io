'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RematchLandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 overflow-hidden font-sans">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 75%)`,
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Rematch
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Docs</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">API</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Examples</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Community</Link>
            </div>
            <Button className="hidden md:inline-flex bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              GitHub
            </Button>
            <Button variant="ghost" className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Button>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-20 text-center">
          <div className="space-y-8">
            <h2 className={`text-blue-600 font-bold text-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              THE FUTURE OF STATE MANAGEMENT
            </h2>
            <h1 className={`text-5xl md:text-7xl font-extrabold leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Revolutionizing the
              <br />
              future <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block animate-pulse">⚡</span> of Redux
            </h1>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              A powerful and intuitive state management solution that simplifies your Redux experience, taking it to the next level.
            </p>
            <div className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </Button>
              <Button variant="outline" className="text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Learn More →
              </Button>
            </div>
          </div>
        </main>

        <section className={`container mx-auto px-4 py-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Simple", description: "Easy to learn and implement in your projects", icon: "🚀" },
              { title: "Powerful", description: "Handles complex state management with ease", icon: "💪" },
              { title: "Flexible", description: "Adaptable to various project sizes and types", icon: "🔧" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Rematch. All rights reserved.</p>
        </footer>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
      `}</style>
    </div>
  )
}
