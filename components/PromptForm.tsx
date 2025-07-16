import React from 'react';
import { PromptFormState } from '../types.ts';
import { VISUAL_STYLES, COLOR_PALETTES, EMOTIONS, ASPECT_RATIOS } from '../constants.ts';
import { SparklesIcon } from './icons/SparklesIcon.tsx';

interface PromptFormProps {
  formState: PromptFormState;
  setFormState: React.Dispatch<React.SetStateAction<PromptFormState>>;
  onGenerate: () => void;
  isLoading: boolean;
}

const FormLabel: React.FC<{ children: React.ReactNode; htmlFor: string }> = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-300 mb-2">
    {children}
  </label>
);

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
  <select
    {...props}
    className="w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
  >
    {props.children}
  </select>
);

const PromptForm: React.FC<PromptFormProps> = ({ formState, setFormState, onGenerate, isLoading }) => {
  const handleChange = <K extends keyof PromptFormState,>(
    field: K,
    value: PromptFormState[K]
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-2xl border border-gray-700/50 sticky top-24">
      <h2 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">Customize Your Image</h2>
      <div className="space-y-6">
        <div>
          <FormLabel htmlFor="prompt">🎨 Main Prompt</FormLabel>
          <textarea
            id="prompt"
            rows={4}
            className="w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            value={formState.prompt}
            onChange={(e) => handleChange('prompt', e.target.value)}
            placeholder="e.g., A futuristic city at sunset..."
            disabled={isLoading}
          />
        </div>
        <div>
          <FormLabel htmlFor="style">✨ Visual Style</FormLabel>
          <Select id="style" value={formState.style} onChange={(e) => handleChange('style', e.target.value)} disabled={isLoading}>
            {VISUAL_STYLES.map((style) => (
              <option key={style} value={style}>{style}</option>
            ))}
          </Select>
        </div>
        <div>
          <FormLabel htmlFor="colorPalette">🌈 Color Palette</FormLabel>
          <Select id="colorPalette" value={formState.colorPalette} onChange={(e) => handleChange('colorPalette', e.target.value)} disabled={isLoading}>
            {COLOR_PALETTES.map((palette) => (
              <option key={palette} value={palette}>{palette}</option>
            ))}
          </Select>
        </div>
        <div>
          <FormLabel htmlFor="emotion">🎭 Emotion / Mood</FormLabel>
          <Select id="emotion" value={formState.emotion} onChange={(e) => handleChange('emotion', e.target.value)} disabled={isLoading}>
            {EMOTIONS.map((emotion) => (
              <option key={emotion} value={emotion}>{emotion}</option>
            ))}
          </Select>
        </div>
        <div>
          <FormLabel htmlFor="aspectRatio">📐 Aspect Ratio</FormLabel>
          <Select id="aspectRatio" value={formState.aspectRatio} onChange={(e) => handleChange('aspectRatio', e.target.value)} disabled={isLoading}>
            {ASPECT_RATIOS.map((ratio) => (
              <option key={ratio} value={ratio}>{ratio}</option>
            ))}
          </Select>
        </div>
        <button
          onClick={onGenerate}
          disabled={isLoading || !formState.prompt.trim()}
          className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <SparklesIcon className="w-5 h-5 mr-2" />
              Generate Image
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PromptForm;