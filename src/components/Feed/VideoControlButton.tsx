import tw from "@/styles/tailwind";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonProps, Text, TouchableOpacity } from "react-native-ui-lib";

type Props = ButtonProps & {
  icon: string;
  text: string;
};
export default function VideoControlButton({ icon, text }: Props) {
  return (
    <TouchableOpacity
      style={tw`flex items-center justify-center pb-3 pt-3 rounded-full`}
      onPress={() => alert(`${text} Pressed`)}
    >
      <>
        <FontAwesome name={icon as never} style={tw`text-4xl text-slate-100`} />
        <Text style={tw`text-slate-100`}>{text}</Text>
      </>
    </TouchableOpacity>
  );
}
