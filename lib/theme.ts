export type Theme = 'light' | 'dark';
export type Palette = 'default' | 'vibrant' | 'minimal' | 'ai-focused' | 'neon';

export const palettes = {
  default: {
    primary: 'oklch(0.205 0 0)',
    secondary: 'oklch(0.97 0 0)',
    accent: 'oklch(0.97 0 0)',
    background: 'oklch(1 0 0)',
    foreground: 'oklch(0.145 0 0)',
  },
  vibrant: {
    primary: 'oklch(0.6 0.3 240)', // Blue
    secondary: 'oklch(0.7 0.2 120)', // Pink
    accent: 'oklch(0.8 0.25 60)', // Yellow
    background: 'oklch(0.98 0.02 240)',
    foreground: 'oklch(0.2 0 0)',
  },
  minimal: {
    primary: 'oklch(0.3 0 0)', // Gray
    secondary: 'oklch(0.95 0 0)',
    accent: 'oklch(0.9 0 0)',
    background: 'oklch(1 0 0)',
    foreground: 'oklch(0.1 0 0)',
  },
  'ai-focused': {
    primary: 'oklch(0.5 0.2 200)', // Purple
    secondary: 'oklch(0.85 0.1 180)',
    accent: 'oklch(0.75 0.15 300)', // Cyan
    background: 'oklch(0.05 0 0)',
    foreground: 'oklch(0.95 0 0)',
  },
  neon: {
    primary: 'oklch(0.7 0.4 120)', // Neon pink
    secondary: 'oklch(0.8 0.3 60)', // Neon yellow
    accent: 'oklch(0.6 0.5 180)', // Neon blue
    background: 'oklch(0.1 0 0)',
    foreground: 'oklch(0.95 0 0)',
  },
};

export const getThemeClass = (theme: Theme, palette: Palette) => {
  return `${theme} ${palette}`;
};