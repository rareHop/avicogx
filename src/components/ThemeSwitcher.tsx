import React from 'react';
import { Palette, Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark' | 'sunset' | 'ocean' | 'forest' | 'nether' | 'end' | 'rainbow';

export default function ThemeSwitcher() {
  const [theme, setTheme] = React.useState<Theme>('dark');
  const [isOpen, setIsOpen] = React.useState(false);

  const themes = {
    light: {
      background: 'bg-white',
      text: 'text-gray-900',
      accent: 'from-gray-400 to-gray-600'
    },
    dark: {
      background: 'bg-gray-900',
      text: 'text-white',
      accent: 'from-gray-600 to-gray-800'
    },
    sunset: {
      background: 'bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600',
      text: 'text-white',
      accent: 'from-yellow-400 to-red-500'
    },
    ocean: {
      background: 'bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400',
      text: 'text-white',
      accent: 'from-cyan-400 to-blue-500'
    },
    forest: {
      background: 'bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400',
      text: 'text-white',
      accent: 'from-green-400 to-emerald-600'
    },
    nether: {
      background: 'bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500',
      text: 'text-white',
      accent: 'from-red-500 to-orange-500'
    },
    end: {
      background: 'bg-gradient-to-br from-purple-900 via-violet-600 to-fuchsia-400',
      text: 'text-white',
      accent: 'from-purple-400 to-pink-600'
    },
    rainbow: {
      background: 'bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
      text: 'text-white',
      accent: 'from-indigo-400 to-pink-500'
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.className = `${themes[newTheme].background} ${themes[newTheme].text} theme-transition`;
    document.documentElement.style.setProperty('--accent-gradient', `linear-gradient(to right, ${themes[newTheme].accent})`);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="minecraft-button-alt p-3 rounded-lg hover:bg-white/10 transition transform hover:scale-105"
          aria-label="Theme palette"
        >
          <Palette size={24} className="text-white" />
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute bottom-full right-0 mb-2 bg-black/90 p-4 rounded-lg border border-white/20 grid grid-cols-3 gap-3 min-w-[180px]">
              {/* Quick Theme Toggles */}
              <button
                onClick={() => {
                  handleThemeChange('light');
                  setIsOpen(false);
                }}
                className="p-2 rounded-lg bg-white text-black hover:bg-gray-100 transition flex items-center justify-center"
                aria-label="Light theme"
              >
                <Sun size={20} />
              </button>
              <button
                onClick={() => {
                  handleThemeChange('dark');
                  setIsOpen(false);
                }}
                className="p-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition flex items-center justify-center"
                aria-label="Dark theme"
              >
                <Moon size={20} />
              </button>
              
              {/* Gradient Themes */}
              {Object.entries(themes).filter(([key]) => !['light', 'dark'].includes(key)).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    handleThemeChange(key as Theme);
                    setIsOpen(false);
                  }}
                  className={`
                    w-10 h-10 rounded-lg ${value.background} 
                    hover:ring-2 ring-white/50 transition transform hover:scale-105
                    ${theme === key ? 'ring-2 ring-white' : ''}
                  `}
                  aria-label={`${key} theme`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}