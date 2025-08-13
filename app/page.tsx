"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Download, ExternalLink, Coffee } from "lucide-react"

export default function RetroPortfolio() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Now Serving:CHAITYA SHAH."

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const skills = [
    {
      name: "Language Stack",
      description: "Python, SQL, C, C++, Arduino",
      icon: "🧠", // Mind = foundational knowledge, clean and smart
    },
    {
      name: "Frontend Toolkit",
      description: "HTML, CSS, JavaScript, React",
      icon: "🖥️", // Desktop screen = visual development
    },
    {
      name: "Data Science Lab",
      description: "Pandas, NumPy, Matplotlib, Sci-Kit Learn, Seaborn, TA-Lib, BackTrader, Pyfolio",
      icon: "📊", // Charts = data & analysis
    },
    {
      name: "Cybersecurity Ops",
      description: "Kali, Wireshark, Metasploit, Burp Suite, Wazuh, OpenCTI",
      icon: "🛡️", // Shield = protection/security
    },
    {
      name: "Dev Environments",
      description: "Jupyter Notebook, VS Code, PyCharm",
      icon: "💻", // Laptop = dev tools
    },
    {
      name: "Creative Suite",
      description: "Figma, Adobe Suite",
      icon: "🎨", // Palette = design & creativity
    },
  ]

  const projects = [
    {
      title: "Asset Allocation & Explainable AI Project",
      description:
        "Built a stock risk–return model with SHAP-based explainability, bridging quantitative finance with interpretable machine learning.",
      tech: ["TFT", "Python", "SHAP"],
      status: "Fresh & Hot",
    },
    {
      title: "Strategy Backtest",
      description: "Multiple strategies are tested revolving around Mean Reversion of various indicators",
      tech: ["Python", "Pyfolio", "TA-Lib"],
      status: "Chef's Special",
    },
    {
      title: "IOT and ML based Fruit Grader",
      description: "Using ESP32 camera and ResNet to classify a fruit as fresh, rotten or raw",
      tech: ["Arduino", "Python", "DeepLearning"],
      status: "Daily Special",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-green-50 to-yellow-50 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden retro-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 via-transparent to-green-200/20"></div>

        {/* CRT Monitor Frame */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl crt-effect scanlines">
            <div className="bg-black p-8 rounded-2xl border-4 border-gray-600">
              <div className="font-mono text-green-400 text-sm mb-4">C:\PORTFOLIO\Metanoid&gt; run_intro.exe</div>

              <div className="text-center">
                <h1 className="font-mono text-2xl md:text-4xl lg:text-5xl mb-6 min-h-[3rem] text-green-500">
                  {displayText}
                  <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>_</span>
                </h1>

                <div className="text-green-300 font-mono text-lg mb-8">
                  <div className="mb-2 text-green-500">Status: Available for hire</div>
                  <div className="mb-2 text-green-500">Location: Mumbai, India</div>
                  <div className="text-green-500">Speciality: Data Analysis, Quant, Python, AI/ML</div>
                </div>

                <Button
                  onClick={() => scrollToSection("about")}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg neon-glow transition-all duration-300 hover:scale-105"
                >
                  <Coffee className="mr-2 h-5 w-5" />
                  View Menu
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 float">☕</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20 float" style={{ animationDelay: "1s" }}>
          🍔
        </div>
        <div className="absolute top-1/2 right-20 text-4xl opacity-20 float" style={{ animationDelay: "2s" }}>
          💻
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-green-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="bg-amber-900 p-8 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-amber-50 p-8 rounded-2xl border-4 border-amber-800">
              <h2 className="font-bold text-4xl text-center mb-8 text-amber-900 font-mono">🍽️ MAIN COURSE: About Me</h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-lg text-amber-800">
                  <p className="leading-relaxed"></p>

                  <p className="leading-relaxed">
                    I’m Chaitya Shah an engineer by degree, a strategist by passion, and a storyteller by instinct. I
                    work at the crossroads of technology, finance, and human behavior, creating systems that turn data
                    into decisions and ideas into impact. My projects range from coding algorithms that move markets to
                    writing essays that connect street-level observations with big-picture strategy. What ties it all
                    together is curiosity the drive to ask why, and the persistence to figure out how
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-pink-500 text-white px-3 py-1">Coffee Enthusiast</Badge>
                    <Badge className="bg-green-500 text-white px-3 py-1">{"Chef"}</Badge>
                    <Badge className="bg-purple-500 text-white px-3 py-1">Problem Solver</Badge>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-pink-300">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-06-17_20-08-04.jpg-vPQNf1udqcbu85izcDBL6CEQAMs6Kp.jpeg"
                      alt="Chaitya Shah - Full Stack Developer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-5xl text-center mb-12 text-purple-800">🍴 TODAY'S MENU 🍴</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-white/80 backdrop-blur-sm border-4 border-purple-300 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{skill.icon}</div>
                  <CardTitle className="text-xl font-bold text-purple-800 font-mono">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-purple-600 font-medium">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume & Links Section */}
      <section id="resume" className="py-20 px-6 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-dashed border-orange-400">
            <h2 className="font-bold text-4xl mb-8 text-orange-800 font-mono">📄 ORDER SLIP 📄</h2>

            <div className="space-y-6">
              <div className="font-mono text-lg text-orange-700">
                <div>Order #: 2003-05-26</div>
                <div>Customer: Talent Scout</div>
                <div>Item: One Smart Guy</div>
                <div className="border-t-2 border-dashed border-orange-400 pt-4 mt-4">Total: Priceless Experience</div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/12iT0CbkT2sGFNJaOyeJtU9Mq5OjCZDUL/view?usp=sharing",
                      "_blank",
                    )
                  }
                >
                  <Download className="mr-2 h-5 w-5" />
                  Print Receipt (Resume)
                </Button>

                <Button
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                  onClick={() => window.open("https://github.com/Chaitya-AKA-Metanoid", "_blank")}
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>

                <Button
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                  onClick={() => window.open("https://www.linkedin.com/in/chaitya-shah26", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-r from-green-100 to-teal-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-center mb-12 text-red-600 font-sans text-4xl leading-3 tracking-wider">
            ⭐ CHEF'S SUGGESTION ⭐
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-white/90 backdrop-blur-sm border-4 border-teal-300 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-red-500 text-white px-2 py-1 text-xs">{project.status}</Badge>
                    <div className="text-2xl group-hover:animate-spin">🍽️</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-teal-800">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-teal-600 mb-4">{project.description}</CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-green-400 mb-4">
            © 2024 Chaitya Shah Digital Diner - Serving Fresh Code Since 2019
          </div>
          <div className="text-gray-400">Made with ❤️, ☕, and a lot of retro vibes</div>
        </div>
      </footer>
    </div>
  )
}
