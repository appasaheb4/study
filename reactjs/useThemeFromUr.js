import {useState, useEffect} from 'react';

// useThemeFromUrl.tsx

export const useThemeFromUrl = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get('theme');
    if (themeParam == 'dark' || themeParam == 'light') {
      setTheme(themeParam);
    }
  }, []);

  return {theme};
};

// http://localhost:3000/?theme=dark
