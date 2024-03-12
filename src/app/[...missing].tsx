import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Theme/Themed";
import i18n from "@/libs/helpers/globalization.helper";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: i18n.t("page_not_found") }} />
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t("page_not_found")}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
