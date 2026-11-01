export type Difficulty = 'easy' | 'medium' | 'hard';

export type Dessert = {
  id: string;
  name: string;
  category: string;
  prepTimeMins: number;
  bakeTimeMins: number;
  tempFahrenheit: number;
  difficulty: Difficulty;
  photoUrl: string;
  ingredients: string[];
  steps: string[];
};