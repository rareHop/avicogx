import React from 'react';
import { Code2, Book, Terminal } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

function Documentation() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
        Documentation
      </h1>

      {/* Quick Start */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">Quick Start</h2>
        <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
          <p className="mb-4">Requirements: Node.js &gt;= 18</p>
          <CodeBlock code="npm install mineflayer" />
        </div>
      </section>

      {/* Basic Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">Basic Example</h2>
        <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
          <CodeBlock code={`const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'localhost', // minecraft server ip
  username: 'Bot', // username to join as
  auth: 'microsoft' // for offline mode servers, you can set this to 'offline'
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)`} />
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">API Reference</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiDocs.map((doc, index) => (
            <div key={index} className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition">
              <div className="text-emerald-400 mb-4">{doc.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
              <p className="text-gray-300 mb-4">{doc.description}</p>
              <a href={doc.link} className="text-emerald-400 hover:text-emerald-300 transition">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const apiDocs = [
  {
    icon: <Code2 size={24} />,
    title: 'Core API',
    description: 'Complete reference for core bot functionality and events.',
    link: 'https://github.com/PrismarineJS/mineflayer/blob/master/docs/api.md'
  },
  {
    icon: <Book size={24} />,
    title: 'Tutorials',
    description: 'Step-by-step guides for common bot implementations.',
    link: 'https://github.com/PrismarineJS/mineflayer/blob/master/docs/tutorial.md'
  },
  {
    icon: <Terminal size={24} />,
    title: 'Examples',
    description: 'Collection of example bots and implementations.',
    link: 'https://github.com/PrismarineJS/mineflayer/tree/master/examples'
  }
];

export default Documentation;