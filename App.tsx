import React from 'react';
import ImageGenerator from './components/ImageGenerator.tsx';
import { SparklesIcon } from './components/icons/SparklesIcon.tsx';
import { CoffeeIcon } from './components/icons/CoffeeIcon.tsx';
import StarfieldBackground from './components/StarfieldBackground.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col relative">
      <StarfieldBackground />
      <header className="p-4 border-b border-gray-700/50 shadow-lg bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 relative">
        <div className="container mx-auto flex items-center justify-center">
          <SparklesIcon className="w-8 h-8 text-purple-400 mr-3" />
          <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Gemini Image Generator
          </h1>
        </div>
      </header>
      <main className="flex-grow relative z-10">
        <ImageGenerator />
      </main>
      <footer className="p-6 text-center border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-3">
            <p className="text-sm text-gray-400">
              Powered by Google Gemini API. Created with React & Tailwind CSS.
            </p>
            <div className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors">
              <a 
                href="https://link.mercadopago.com.ar/papiweb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <CoffeeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Papiweb desarrollos informáticos
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;