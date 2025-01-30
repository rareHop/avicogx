import React from 'react';
import { Play } from 'lucide-react';

function Tutorials() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
        Video Tutorials
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="bg-black/20 rounded-lg overflow-hidden backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition group">
            <div className="relative aspect-video">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${tutorial.thumbnail})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="bg-emerald-500/90 p-4 rounded-full">
                    <Play size={32} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-minecraft mb-2 text-emerald-400">{tutorial.title}</h3>
              <p className="text-gray-300 mb-4">{tutorial.description}</p>
              <a 
                href={tutorial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="minecraft-button-alt inline-flex items-center gap-2 px-4 py-2"
              >
                Watch Tutorial →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const tutorials = [
  {
    thumbnail: 'https://img.youtube.com/vi/ltWosy4Z0Kw/maxresdefault.jpg',
    title: 'Getting Started with AviCogX',
    description: 'Learn how to set up and create your first Minecraft bot using AviCogX.',
    link: 'https://www.youtube.com/watch?v=ltWosy4Z0Kw'
  },
  {
    thumbnail: 'https://img.youtube.com/vi/UWGSf08wQSc/maxresdefault.jpg',
    title: 'Advanced Features Tutorial',
    description: 'Explore advanced features including pathfinding and combat systems.',
    link: 'https://www.youtube.com/watch?v=UWGSf08wQSc'
  },
  {
    thumbnail: 'https://img.youtube.com/vi/ssWE0kXDGJE/maxresdefault.jpg',
    title: 'Bot Configuration Guide',
    description: 'Comprehensive guide to configuring your bot for optimal performance.',
    link: 'https://www.youtube.com/watch?v=ssWE0kXDGJE'
  },
  {
    thumbnail: 'https://img.youtube.com/vi/walbRk20KYU/maxresdefault.jpg',
    title: 'Custom Scripts & Automation',
    description: 'Learn how to create custom scripts and automate tasks with AviCogX.',
    link: 'https://www.youtube.com/watch?v=walbRk20KYU'
  }
];

export default Tutorials;