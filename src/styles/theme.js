export const lightTheme = {
  colors: {
    primary: "#2563EB",
    secondary: "#F97316",
    success: "#22C55E",
    warning: "#FACC15",
    danger: "#EF4444",

    background: "#F8FAFC",
    surface: "#FFFFFF",

    heading: "#0F172A",
    text: "#475569",

    border: "#E2E8F0",
  },

  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "22px",
    xxl: "32px",
    hero: "52px",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    xl: "25px",
    xxl: "50px",
  },

  transition: "0.3s ease",

  buttonSize: {
    small: {
      padding: "8px 16px",
      fontSize: "14px",
    },
    medium: {
      padding: "12px 24px",
      fontSize: "16px",
    },
    large: {
      padding: "16px 32px",
      fontSize: "18px",
    },
  },

  spacing: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
};


export const darkTheme = {
  ...lightTheme,

  colors: {
    ...lightTheme.colors,

    background: "#0F172A",
    surface: "#1E293B",

    heading: "#F8FAFC",
    text: "#CBD5E1",

    border: "#334155",
  },
};