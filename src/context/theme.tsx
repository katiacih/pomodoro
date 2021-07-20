import React, { createContext, useState, useContext } from 'react'


type Colors = {
  colors: {
    background: string
  }
}

type Theme = {
  type: 'light' | 'dark'
  light: Colors
  dark: Colors
}


export const themes:Theme = {
  type: 'light',
  light: {
    colors: {
      background: 'linear-gradient(to right, #da486d, #ff9966)'
    }
  },
  dark: {
    colors: {
    background: 'linear-gradient(0deg, rgba(100,44,71,1) 12%, rgba(15,32,39,1) 53%)'
    }
  }
};

export type ThemeContextType = {
  theme: Theme
  setTheme: (t: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes,
  setTheme: () => {}
})

type Props = {
  children: React.ReactNode
}


export const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(themes);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Erro ao carregar tema");
  const { theme, setTheme } = context;
  return { theme, setTheme };
}