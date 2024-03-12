import tw from "@/styles/tailwind";
export const theme = {
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

export const lightTheme = {
  dark: false,
  colors: {
    primary: theme.colors.primary,
    background: theme.colors.background,
    card: theme.colors.primary,
    text: theme.colors.headerControls,
    border: theme.colors.transparent,
    notification: theme.colors.primary,
    tint: theme.colors.headerControls,
    headerTintColor: theme.colors.headerControls,
  },
};

export const darkTheme = {
  // dark: true,
  dark: false,
  colors: {
    ...lightTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background,
    card: theme.colors.background,
    text: theme.colors.headerControls,
    border: theme.colors.dark,
    notification: theme.colors.primary,
  },
};

// const tintColorLight = '#2f95dc';
// const tintColorDark = '#fff';

// export default {
//   light: {
//     text: '#000',
//     background: '#fff',
//     tint: tintColorLight,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#fff',
//     background: '#000',
//     tint: tintColorDark,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorDark,
//   },
// };

export default theme;
