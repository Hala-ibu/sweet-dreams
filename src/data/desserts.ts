import type { Dessert } from '@/types';

export const desserts: Dessert[] = [
  {
    id: '1',
    name: "Hala's Dream Fudge",
    category: 'Cake',
    prepTimeMins: 15,
    bakeTimeMins: 30,
    tempFahrenheit: 325,
    difficulty: 'easy',
    photoUrl: 'https://picsum.photos/seed/fudge/600/400',
    ingredients: ['2 cups flour', '1 cup cocoa powder', '2 large eggs', '1 cup sugar'],
    steps: ['Preheat oven to 325°F', 'Gently fold dry and wet ingredients', 'Pour into pan and bake']
  },
  {
    id: '2',
    name: 'Vanilla Cheesecake',
    category: 'Cake',
    prepTimeMins: 20,
    bakeTimeMins: 45,
    tempFahrenheit: 350,
    difficulty: 'medium',
    photoUrl: 'https://picsum.photos/seed/cheesecake/600/400',
    ingredients: ['200g graham crackers', '100g butter melted', '600g cream cheese', '150g sugar'],
    steps: ['Crush biscuits and mix with melted butter', 'Beat cream cheese and sugar', 'Bake at 350°F']
  },
  {
    id: '3',
    name: 'Chocolate Chip Cookies',
    category: 'Cookie',
    prepTimeMins: 15,
    bakeTimeMins: 12,
    tempFahrenheit: 375,
    difficulty: 'easy',
    photoUrl: 'https://picsum.photos/seed/cookies/600/400',
    ingredients: ['1 cup butter', '1 cup brown sugar', '2 cups flour', '1 cup chocolate chips'],
    steps: ['Cream butter and sugar', 'Mix in dry ingredients and chocolate chips', 'Bake for 12 mins']
  },
  {
    id: '4',
    name: 'Berry Tart',
    category: 'Pastry',
    prepTimeMins: 30,
    bakeTimeMins: 20,
    tempFahrenheit: 350,
    difficulty: 'hard',
    photoUrl: 'https://picsum.photos/seed/tart/600/400',
    ingredients: ['1 pastry shell', '2 cups fresh berries', '1 cup custard'],
    steps: ['Bake shell until golden', 'Fill with custard', 'Top with berries']
  },
  {
    id: '5',
    name: 'Cinnamon Rolls',
    category: 'Pastry',
    prepTimeMins: 40,
    bakeTimeMins: 25,
    tempFahrenheit: 350,
    difficulty: 'medium',
    photoUrl: 'https://picsum.photos/seed/cinnamon/600/400',
    ingredients: ['3 cups dough flour', '2 tbsp cinnamon', '1/2 cup brown sugar', '1/4 cup butter'],
    steps: ['Roll out dough', 'Spread butter, sugar, and cinnamon', 'Roll, slice, and bake']
  }
];