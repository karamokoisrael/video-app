import tw from "@/styles/tailwind";
import { Theme } from "@react-navigation/native";
export const theme = {
  font: {
    fontFamily: 'SpaceMono'
  },
  colors: {
    background: tw.color("bg-gray-100"),
    onBackground: tw.color("bg-gray-100"),
    inputBg: tw.color(`bg-slate-50`),
    primary: "#203665",
    primaryOpac: "#2036650B",
    secondary: "#ec2324",
    secondaryOpac: "#203564",
    tertiary: "#1c3666",
    headerControls: "#fff",
    primary10: "#ea2325",
    success: "#28a745",
    warning: "#ffc107",
    info: "#17a2b8",
    gray: "#6c757d",
    danger: "#dc3545",
    dark: "#343a40",
    light: "#f8f9fa",
    white: "#fff",
    chip: "#ebdefa",
    transparent: "#fff0",
    inputBottom: "#959199",
  },
};

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: theme.colors.primary,
    background: theme.colors.background as string,
    card: theme.colors.primary,
    text: theme.colors.headerControls,
    border: theme.colors.transparent,
    notification: theme.colors.primary
  },
};

export const darkTheme: Theme = {
  // dark: true,
  dark: false,
  colors: {
    ...lightTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background as string,
    card: theme.colors.background as string,
    text: theme.colors.headerControls,
    border: theme.colors.dark,
    notification: theme.colors.primary,
  },
};


export default theme;
