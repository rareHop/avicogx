import React from 'react';
import { Shield, Cpu, Code2, Bot } from 'lucide-react';

function BotDetails() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
        AviCogX Bot Details
      </h1>

      {/* Core Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="bg-[#2B2B2F] p-6 rounded-lg border border-emerald-500/20">
              <div className="text-emerald-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">Technical Specifications</h2>
        <div className="bg-[#2B2B2F] p-6 rounded-lg">
          <div className="space-y-4">
            {specs.map((spec, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className="text-emerald-400 font-semibold md:w-1/4">{spec.label}</span>
                <span className="text-gray-300">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">Installation</h2>
        <div className="bg-[#2B2B2F] p-6 rounded-lg">
          <p className="mb-4 text-gray-300">Quick installation guide:</p>
          <pre className="bg-black/50 p-4 rounded-md overflow-x-auto mb-4">
            <code>{`npm install mineflayer
npm install avicogx`}</code>
          </pre>
          <p className="text-gray-400">
            For detailed installation instructions and configuration options,
            please refer to our documentation.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">Coming Soon</h2>
        <div className="bg-[#2B2B2F] p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Bot size={24} className="text-emerald-400" />
            <h3 className="text-xl font-semibold">New Features in Development</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {upcomingFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

const coreFeatures = [
  {
    icon: <Shield size={24} />,
    title: 'Stable & Secure',
    description: 'Built on the reliable Mineflayer API with Microsoft authentication support.'
  },
  {
    icon: <Cpu size={24} />,
    title: 'Advanced AI',
    description: 'Intelligent pathfinding and decision-making capabilities.'
  },
  {
    icon: <Code2 size={24} />,
    title: 'Easy Integration',
    description: 'Simple to set up and customize with JavaScript/TypeScript.'
  }
];

const specs = [
  { label: 'Version Support', value: 'Minecraft 1.8 to 1.21.1' },
  { label: 'API Base', value: 'Mineflayer' },
  { label: 'Language', value: 'JavaScript/TypeScript' },
  { label: 'Authentication', value: 'Microsoft & Offline Mode' },
  { label: 'Dependencies', value: 'Node.js >= 18' }
];

const upcomingFeatures = [
  'Enhanced combat system with advanced PvP capabilities',
  'Improved pathfinding with obstacle avoidance',
  'Advanced inventory management system',
  'Custom scripting engine for advanced automation',
  'Real-time monitoring dashboard'
];

export default BotDetails;