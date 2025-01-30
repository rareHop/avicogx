import React from 'react';
import { Github, Bot } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1623934199716-dc28818a6ec7')] bg-cover bg-center opacity-10"></div>
        
        {/* Floating Minecraft Stickers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              <img 
                src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" 
                className="w-16 h-16 object-contain opacity-30" 
                alt="Minecraft" 
              />
            </div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <Bot size={84} className="text-emerald-400 animate-bounce" />
            </div>
            <h1 className="text-8xl font-minecraft mb-6 text-shadow-xl">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
                AviCogX
              </span>
            </h1>
            <p className="text-2xl mb-8 text-gray-300 text-shadow-lg">
              Advanced Minecraft Bot powered by Mineflayer API
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/rareHop" 
                 className="minecraft-button px-8 py-4 text-lg group">
                <span className="relative z-10 flex items-center gap-2">
                  <Github size={24} />
                  <span>GitHub</span>
                </span>
              </a>
              <a href="https://avioo.vercel.app" 
                 className="minecraft-button px-8 py-4 text-lg group">
                <span className="relative z-10 flex items-center gap-2">
                  <Bot size={24} />
                  <span>Discord Bot</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-minecraft text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#2B2B2F]/80 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500 transition transform hover:-translate-y-1">
                <h3 className="text-xl font-minecraft mb-4 text-emerald-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Version Support */}
      <section className="py-20 bg-[url('https://images.unsplash.com/photo-1627856014754-2907e2355d54')] bg-fixed bg-cover bg-center">
        <div className="container mx-auto px-4 text-center backdrop-blur-sm bg-black/50 py-12 rounded-lg">
          <h2 className="text-4xl font-minecraft mb-8">Version Support</h2>
          <p className="text-xl text-gray-300 mb-6">
            Compatible with Minecraft versions 1.8 to 1.21.1
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['1.8', '1.12', '1.16', '1.18', '1.20', '1.21'].map(version => (
              <span key={version} className="px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/40 font-minecraft">
                {version}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: 'Entity Tracking',
    description: 'Advanced entity knowledge and tracking system for monitoring players and mobs.'
  },
  {
    title: 'Block Knowledge',
    description: 'Query the world around you with millisecond response times for any block.'
  },
  {
    title: 'Physics Engine',
    description: 'Sophisticated physics and movement system handling all bounding boxes.'
  },
  {
    title: 'Combat System',
    description: 'Advanced combat capabilities including attacking entities and using vehicles.'
  },
  {
    title: 'Inventory Management',
    description: 'Complete inventory control including crafting, chests, and dispensers.'
  },
  {
    title: 'World Interaction',
    description: 'Comprehensive world interaction including digging, building, and item usage.'
  }
];

export default Home;