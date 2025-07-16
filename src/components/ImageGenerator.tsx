import React, { useState, useCallback } from 'react';
import PromptForm from './PromptForm.tsx';
import ImageDisplay from './ImageDisplay.tsx';
import { PromptFormState } from '../types.ts';
import { generateImage } from '../services/geminiService.ts';
import { ASPECT_RATIOS, COLOR_PALETTES, EMOTIONS, VISUAL_STYLES } from '../constants.ts';

const ImageGenerator: React.FC = () => {
  const [formState, setFormState] = useState<PromptFormState>({
    prompt: 'A majestic lion wearing a crown, sitting on a throne on the moon.',
    style: VISUAL_STYLES[0],
    colorPalette: COLOR_PALETTES[0],
    emotion: EMOTIONS[0],
    aspectRatio: ASPECT_RATIOS[0],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerateClick = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateImage(formState);
      setGeneratedImage(imageUrl);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [formState]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <PromptForm
            formState={formState}
            setFormState={setFormState}
            onGenerate={handleGenerateClick}
            isLoading={isLoading}
          />
        </div>
        <div className="lg:col-span-8">
          <ImageDisplay
            isLoading={isLoading}
            error={error}
            generatedImage={generatedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;