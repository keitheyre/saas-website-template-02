'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Theme, Palette } from '@/lib/theme';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultPalette?: Palette;
};

type ThemeProviderState = {
  theme: Theme;
  palette: Palette;
  setTheme: (theme: Theme) => void;
  setPalette: (palette: Palette) => void;
};

const initialState: ThemeProviderState = {
  theme: 'light',
  palette: 'default',
  setTheme: () => null,
  setPalette: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  defaultPalette = 'default',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [palette, setPalette] = useState<Palette>(defaultPalette);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'vibrant', 'minimal', 'ai-focused', 'neon', 'default');
    root.classList.add(theme, palette);
  }, [theme, palette]);

  const value = {
    theme,
    palette,
    setTheme,
    setPalette,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};