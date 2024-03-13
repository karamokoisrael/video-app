import tw from "@/styles/tailwind";
import { Image, ImageSourcePropType, StyleProp } from "react-native";
type Props = {
  source: ImageSourcePropType;
  size?: number;
  style?: StyleProp<Image>;
};
export default function ProfileAvatar({ size, source, style }: Props) {
  return (
    <Image
      source={source}
      style={{...tw`w-${size || 16} h-${size || 16} rounded-full`, ...(style || {})}}
    />
  );
}
