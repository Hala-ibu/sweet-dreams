export const Colors = {
  light: {
    text: '#2D3748',
    muted: '#718096',
    background: '#FFFDF9',
    card: '#FFF5F7',
    border: '#E2E8F0',
    primary: '#702459',
    onPrimary: '#FFFFFF',
    accent: '#D69E2E',
  },
  dark: {
    text: '#F7FAFC',
    muted: '#A0AEC0',
    background: '#1A202C',
    card: '#2D3748',
    border: '#4A5568',
    primary: '#F6AD55',
    onPrimary: '#1A202C',
    accent: '#F6E05E',
  },
} as const;

export type Theme = (typeof Colors)['light'];

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const FontSize = {
  small: 13,
  body: 16,
  title: 20,
  hero: 28,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  pill: 999,
} as const;