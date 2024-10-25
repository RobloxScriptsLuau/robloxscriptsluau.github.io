'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

// This is sample data. Replace with your own appropriate content.
const tools = [
  {
    title: "Roblox Studio",
    pros: ["Official development tool", "Powerful creation capabilities", "Regular updates"],
    cons: ["Steep learning curve", "Limited to Roblox platform"],
    link: "https://www.roblox.com/create"
  },
  {
    title: "Blender",
    pros: ["Free and open-source", "Versatile 3D modeling", "Large community"],
    cons: ["Complex for beginners", "Requires manual export to Roblox"],
    link: "https://www.blender.org/"
  },
  {
    title: "RobloxAPI",
    pros: ["Automates Roblox tasks", "Useful for developers", "Open-source"],
    cons: ["Requires programming knowledge", "Limited to API functions"],
    link: "https://github.com/roblox-ts/roblox-ts"
  }
]

function TiltCard({ children }: { children: React.ReactNode }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const tiltX = (y - centerY) / 10
      const tiltY = (centerX - x) / 10
      setTilt({ x: tiltX, y: tiltY })
    }

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="group perspective"
      style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Roblox Development Tools</h1>
        <p className="text-xl text-gray-400">A curated list of tools for Roblox creators</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <TiltCard key={index}>
            <Card className="bg-gray-800 border-gray-700 transition-all duration-300 ease-out group-hover:shadow-xl h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-semibold text-green-400 mb-2">Pros:</h3>
                  <ul className="list-disc list-inside">
                    {tool.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">Cons:</h3>
                  <ul className="list-disc list-inside">
                    {tool.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full transition-transform duration-300 ease-out group-hover:translate-y-[-4px]">
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </TiltCard>
        ))}
      </div>
    </div>
  )
}
