import tw from "@/styles/tailwind";
import { Image, ImageSourcePropType, ImageStyle, StyleProp } from "react-native";
type Props = {
  source: ImageSourcePropType;
  size?: number;
  style?: StyleProp<ImageStyle>;
};
export default function ProfileAvatar({ size, source, style }: Props) {
  const optionalStyle = style ?? {} as any;
  return (
    <Image
      source={source}
      style={{
        ...tw`w-${size ?? 16} h-${size ?? 16} rounded-full`,
        ...optionalStyle,
      }}
    />
  );
}
