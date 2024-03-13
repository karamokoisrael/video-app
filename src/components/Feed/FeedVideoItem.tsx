import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@/configurations/constants/layout";
import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import tw from "@/styles/tailwind";
import { Video, ResizeMode } from "expo-av";
import { SafeAreaView, View, Image, Text } from "react-native";
import ProfileAvatar from "../Images/ProfileAvatar";
import { generateRandomArray } from "@/libs/helpers/mock.helper";
type Props = {
  data: FeedVideo;
};
export default function FeedVideoItem({ data }: Props) {
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
      <SafeAreaView style={tw`flex items-center z-50`}>
        <View style={tw`flex`}>
          {/* Card Left Side */}
          <View style={tw`float-left flex-row items-center`}>
            <ProfileAvatar source={{ uri: data.avatar }} />
            <View style={tw`flex p-2 items-start justify-between`}>
              <Text style={tw`text-base font-bold mt-5`}>
                {data.profile.username}
              </Text>
              <Text style={tw`text-base font-bold mt-5`}>
                {data.profile.subtitle}
              </Text>
            </View>
          </View>

          {/* Card Right Side */}
          <View style={tw``}>
            <View style={tw`flex flex-row`}>
              {generateRandomArray(3).map((item) => (
                <ProfileAvatar
                  key={item}
                  size={10}
                  source={{ uri: data.avatar }}
                />
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Video>
  );
}
