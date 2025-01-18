import { Inter } from "next/font/google";
import { Waves } from "@/components/ui/waves-background";
import { ClientGlobe } from "@/components/ui/globe-client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen ${inter.className} bg-slate-900`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen">
        {/* Waves background */}
        <div className="absolute inset-0">
          <Waves
            lineColor="rgba(255, 255, 255, 0.2)"
            backgroundColor="transparent"
            waveSpeedX={0.0125}
            waveSpeedY={0.005}
            waveAmpX={32}
            waveAmpY={16}
            xGap={10}
            yGap={32}
            friction={0.925}
            tension={0.005}
            maxCursorMove={100}
          />
        </div>
        
        <div className="relative container mx-auto px-6 py-24 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Build Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Extraordinary
                </span>
              </h1>
              <p className="text-xl text-white/80">
                Create stunning web applications with Next.js and modern tools. Fast, responsive, and beautiful by default.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  Get Started
                </button>
                <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right content - Globe */}
            <ClientGlobe />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Fast Development</h2>
            <p className="text-white/70">
              Build and iterate quickly with Next.js hot reloading and intuitive development experience.
            </p>
          </div>
          <div className="p-6 rounded-lg hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Modern Stack</h2>
            <p className="text-white/70">
              Leverage the power of React, TypeScript, and Tailwind CSS for modern web development.
            </p>
          </div>
          <div className="p-6 rounded-lg hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Responsive Design</h2>
            <p className="text-white/70">
              Create beautiful, responsive layouts that work seamlessly across all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
