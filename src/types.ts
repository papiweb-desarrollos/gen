export interface PromptFormState {
  prompt: string;
  style: string;
  colorPalette: string;
  emotion: string;
  aspectRatio: string;
}

export interface ImageGenerationParams extends PromptFormState {}
