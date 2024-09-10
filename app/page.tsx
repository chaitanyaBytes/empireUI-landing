"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Menu, X, Zap, Brain, Palette, Box } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
// import { ThemeProvider } from "@/components/theme-provider";
// import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Brain className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">EmpireUI</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Components
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Themes
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Pricing
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              {/* <ModeToggle /> */}
              <Button variant="outline">Get Started</Button>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 transition-colors"
            >
              Components
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 transition-colors"
            >
              Themes
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 transition-colors"
            >
              Pricing
            </a>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="container py-10 h-screen sm:py-36 ">
        <div className="grid grid-cols-2 justify-center items-center">
          <div className="container mx-auto px-9 sm:px-6 ml-10 lg:px-8 text-left">
            <h1 className="text-5xl sm:text-6xl w-[40rem]  font-bold mb-6 flex gap-6">
              {/* Later change to be mini thumbnail component */}
              <Image
                src="/aiHero2.png"
                width={180}
                height={180}
                className=" rounded-lg shadow-lg"
                alt="Hero image"
              />
              <div className="flex-col items-center justify-center h-full gap-20 space-y-10">
                <span>Intelligent UIs with EmpireUI{""}</span>

                <div className="flex justify-start  space-x-4">
                  <Button size="lg">Get Started</Button>
                  <Button size="lg" variant="outline">
                    View Components
                  </Button>
                </div>
              </div>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl w-[40rem]">
              The AI-powered component library that adapts to your design needs.
              Build beautiful, responsive interfaces in record time.
            </p>
          </div>
          <div className=" h-96 mr-10">
            <SparklesCore
              background="transparent"
              minSize={0.2}
              maxSize={1.8}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#000000"
            />
          </div>
        </div>
        <div className="py-24 flex w-full justify-center items-center gap-14">
          <div className="">Vercel</div>
          <div className="">NextJS</div>
          <div className="">Radix UI</div>
          <div className="">Framer Motion</div>
        </div>
      </section>
      {/* Dependencies */}

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose NeuralUI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-12 w-12 mb-4 text-gray-900" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">
                Our components learn and adapt to your design preferences,
                ensuring consistency across your projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Palette className="h-12 w-12 mb-4 text-gray-900" />
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600">
                Easily tweak colors, fonts, and styles to match your brand
                identity with our intuitive theming system.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Box className="h-12 w-12 mb-4 text-gray-900" />
              <h3 className="text-xl font-semibold mb-2">Accessible</h3>
              <p className="text-gray-600">
                Built with accessibility in mind, ensuring your UIs are usable
                by everyone, right out of the box.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Component Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Intelligent Components
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Smart Button</h3>
              <Button className="w-full mb-4">Click me</Button>
              <p className="text-sm text-gray-600">
                Our buttons adapt their style based on usage patterns and
                context.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Adaptive Input</h3>
              <Input className="w-full mb-4" placeholder="Type something..." />
              <p className="text-sm text-gray-600">
                Inputs that suggest completions and validate in real-time using
                AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Smarter UIs?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of developers creating intelligent interfaces with
            NeuralUI.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            Start Building for Free
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NeuralUI</h3>
              <p className="text-sm text-gray-600">
                Empowering developers with AI-driven UI components.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} NeuralUI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
