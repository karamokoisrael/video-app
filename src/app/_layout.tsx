import "reflect-metadata";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import * as Localization from "expo-localization";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import useAppConfig from "@/hooks/useAppConfig";
import { useDeviceContext } from "twrnc";
import tw from "@/styles/tailwind";
import i18n, {
  defaultLocale,
  translations,
} from "@/libs/helpers/globalization.helper";
import PreLoader from "@/components/Loading/PreLoader";
import "react-native-gesture-handler";
import SnackbarProvider from "@/components/Snackbar/SnackBarProvider";
import { configRnuiLibTheme } from "@/styles/rnuilib-foundation.config";
import { QueryClient, QueryClientProvider } from "react-query";
import { injectDependencies } from "@/ioc/ioc-manager";
import { darkTheme, lightTheme } from "@/configurations/constants/theme";

require("react-native-ui-lib/config").setConfig({ appScheme: "default" });

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(feed)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
configRnuiLibTheme();
injectDependencies();

export default function RootLayout() {
  const [frontLoaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (frontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [frontLoaded]);

  if (!frontLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  //vars
  const queryClient = new QueryClient();

  //hooks
  const { loading } = useAppConfig();
  const colorScheme = useColorScheme();
  useDeviceContext(tw, { withDeviceColorScheme: false });

  // hooks/effects
  useEffect(() => {
    const detectedLanguage = Localization.locale.split("-")[0];
    if (
      Object.keys(translations).includes(detectedLanguage) &&
      detectedLanguage != defaultLocale
    ) {
      i18n.locale = detectedLanguage;
    }

    i18n.locale = "en";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? darkTheme : lightTheme}>
        <SnackbarProvider>
          {loading ? (
            <PreLoader />
          ) : (
            <Stack>
              <Stack.Screen name="(feed)" options={{ headerShown: false }} />
            </Stack>
          )}
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
