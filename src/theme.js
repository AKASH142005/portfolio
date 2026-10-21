import { createTheme } from '@mui/material/styles';

export const getMuiTheme = (mode = 'dark') => {
  const isDark = mode === 'dark';
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#14b8a6', // Teal 500
        light: '#2dd4bf',
        dark: '#0f766e',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#38bdf8', // Sky 400
        light: '#7dd3fc',
        dark: '#0284c7',
        contrastText: '#0f172a',
      },
      background: {
        default: isDark ? '#070b14' : '#f8fafc',
        paper: isDark ? '#0f172a' : '#ffffff',
      },
      text: {
        primary: isDark ? '#f8fafc' : '#0f172a',
        secondary: isDark ? '#94a3b8' : '#64748b',
      },
      divider: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h3: {
        fontWeight: 700,
        letterSpacing: '-0.015em',
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            padding: '8px 20px',
            fontSize: '0.925rem',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: isDark
                ? '0 6px 20px -4px rgba(20, 184, 166, 0.35)'
                : '0 6px 16px -4px rgba(20, 184, 166, 0.25)',
            },
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            fontWeight: 500,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            backgroundColor: isDark ? 'rgba(15, 23, 42, 0.75)' : '#ffffff',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
            backdropFilter: 'blur(12px)',
          },
        },
      },
    },
  });
};
