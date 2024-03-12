import tw from "@/styles/tailwind";
import { View } from "react-native";
import { LoaderScreen } from "react-native-ui-lib";
import theme from "@/configurations/constants/theme";

export default function PreLoader() {
  return (
    <View
      style={tw`h-[100%] w-[100%] flex flex-col items-center justify-around`}
    >
      {/*<ActivityIndicator />*/}
      <LoaderScreen color={theme.colors.primary} />
    </View>
  );
}
