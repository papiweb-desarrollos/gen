import { GoogleGenAI } from "@google/genai";
import { ImageGenerationParams } from '../types.ts';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const buildDetailedPrompt = (params: ImageGenerationParams): string => {
  const { prompt, style, colorPalette, emotion, aspectRatio } = params;
  return `
    Create a visually stunning, high-quality image based on the following detailed description.
    
    Primary Subject: "${prompt}"
    
    Artistic Style: ${style}.
    Color Palette: ${colorPalette}.
    Mood & Emotion: ${emotion}.
    Composition: A dynamic and attractive composition.
    
    Ensure the final image is polished, professional, and directly represents the primary subject while adhering to the specified style, color, and emotional tone. The aspect ratio should be ${aspectRatio}.
  `;
};

export const generateImage = async (params: ImageGenerationParams): Promise<string> => {
  try {
    const detailedPrompt = buildDetailedPrompt(params);
    
    console.log("Generating image with prompt:", detailedPrompt);
    console.log("Using aspect ratio:", params.aspectRatio);

    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: detailedPrompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: params.aspectRatio,
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image.imageBytes) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
      return imageUrl;
    } else {
      throw new Error("API returned no image data.");
    }
  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate image: ${error.message}`);
    }
    throw new Error("An unknown error occurred during image generation.");
  }
};