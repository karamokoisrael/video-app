import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import tw from "@/styles/tailwind";
import { SafeAreaView, View, Text } from "react-native";
import ProfileAvatar from "../Images/ProfileAvatar";
import { generateRandomArray } from "@/libs/helpers/mock.helper";
import { FontAwesome } from "@expo/vector-icons";
type Props = {
  data: FeedVideo;
};
export default function FeedVideoHeader({ data }: Readonly<Props>) {
  return (
    <SafeAreaView
      style={tw`flex justify-around flex-row items-center justify-around z-50 mt-8 h-16`}
    >
      {/* Top Left Side */}
      <View style={tw`flex-row items-center justify-center h-16`}>
        <ProfileAvatar source={{ uri: data.avatar }} size={12} />
        <View
          style={tw`flex pl-2 pr-2 pt-0 mt-0 items-start justify-center h-14`}
        >
          <Text style={tw`text-sm font-bold text-slate-100 gap-1`}>
            {data.profile.username}
          </Text>
          <Text style={tw`text-sm font-bold  text-slate-100 gap-1`}>
            {data.profile.subtitle}
          </Text>
        </View>
      </View>

      {/* Top Right Side */}
      <View style={tw`flex flex-row items-center justify-around w-40`}>
        <View style={tw`flex flex-row gap-1`}>
          {generateRandomArray(3).map((item) => (
            <ProfileAvatar key={item} size={8} source={{ uri: data.avatar }} />
          ))}
        </View>
        <View
          style={tw`flex flex-row items-center justify-around text-slate-100 h-full w-12`}
        >
          <Text style={tw`text-sm font-medium text-slate-100 gap-2`}>174</Text>
          <FontAwesome
            name="close"
            style={tw`font-medium text-base text-slate-100 gap-2`}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
