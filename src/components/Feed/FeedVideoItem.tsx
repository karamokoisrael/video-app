import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@/configurations/constants/layout";
import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import tw from "@/styles/tailwind";
import { Video, ResizeMode } from "expo-av";
import { SafeAreaView, View, Text } from "react-native";
import ProfileAvatar from "../Images/ProfileAvatar";
import { generateRandomArray } from "@/libs/helpers/mock.helper";
import { FontAwesome } from "@expo/vector-icons";
type Props = {
  data: FeedVideo;
};
export default function FeedVideoItem({ data }: Readonly<Props>) {
  return (
    <Video
      source={{ uri: data.url }}
      resizeMode={ResizeMode.STRETCH}
      style={{
        height: WINDOW_HEIGHT,
        width: WINDOW_WIDTH,
      }}
      shouldPlay={false}
      isLooping={true}
      // usePoster={true}
      // posterSource={{ uri: data.poster }}
    >
      <SafeAreaView
        style={tw`flex justify-around flex-row items-center justify-around z-50 mt-8`}
      >
        {/* Card Left Side */}
        <View style={tw`flex-row items-center justify-center h-16 bg-red-100`}>
          <ProfileAvatar style={tw`bg-red-100`} source={{ uri: data.avatar }} size={10} />
          <View style={tw`flex pl-2 pl items-start justify-center bg-orange-100 h-full`}>
            <Text style={tw`text-sm font-bold mt-5`}>
              {data.profile.username}
            </Text>
            <Text style={tw`text-sm font-bold mt-5`}>
              {data.profile.subtitle}
            </Text>
          </View>
        </View>

        {/* Card Right Side */}
        <View style={tw`bg-red-100`}>
          <View style={tw`flex flex-row`}>
            {generateRandomArray(3).map((item) => (
              <ProfileAvatar
                key={item}
                size={8}
                source={{ uri: data.avatar }}
              />
            ))}
          </View>
          <View style={tw`flex flex-row items-center justify-around`}>
            <Text style={tw`text-xl font-medium text-slate-900`}>174</Text>
            <FontAwesome size={8} icon="close" />
          </View>
        </View>
      </SafeAreaView>
    </Video>
  );
}
