import React from 'react';
import { Github, Instagram, Bot, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-emerald-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-minecraft mb-4 text-emerald-400">About AviCogX</h3>
            <p className="text-gray-400">
              Advanced Minecraft bot built with Mineflayer API, supporting versions 1.8 to 1.21.1. Created by RareHop.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-minecraft mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/documentation" className="text-gray-400 hover:text-emerald-400 transition">Documentation</a>
              </li>
              <li>
                <a href="/tutorials" className="text-gray-400 hover:text-emerald-400 transition">Tutorials</a>
              </li>
              <li>
                <a href="/bot-details" className="text-gray-400 hover:text-emerald-400 transition">Bot Details</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-minecraft mb-4 text-emerald-400">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/PrismarineJS/mineflayer" className="text-gray-400 hover:text-emerald-400 transition">Mineflayer API</a>
              </li>
              <li>
                <a href="https://github.com/PrismarineJS/node-minecraft-protocol" className="text-gray-400 hover:text-emerald-400 transition">MC Protocol</a>
              </li>
              <li>
                <a href="https://github.com/PrismarineJS/minecraft-data" className="text-gray-400 hover:text-emerald-400 transition">MC Data</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-minecraft mb-4 text-emerald-400">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/rareHop" className="text-gray-400 hover:text-emerald-400 transition">
                <Github size={24} />
              </a>
              <a href="https://instagram.com/zenitsu.dev" className="text-gray-400 hover:text-emerald-400 transition">
                <Instagram size={24} />
              </a>
              <a href="https://avioo.vercel.app" className="text-gray-400 hover:text-emerald-400 transition">
                <Bot size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-emerald-500/20 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by RareHop using <Code2 size={16} className="text-emerald-400" /> Mineflayer
          </p>
        </div>
      </div>
    </footer>
  );
}