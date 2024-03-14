import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import tw from "@/styles/tailwind";
import { View } from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  data: FeedVideo;
};
export default function FeedVideoCommentBox({ data }: Props) {
  return (
    <View style={tw`flex items-center justify-center h-80% w-full`}>
      <TextInput
        style={tw`h-82% w-90% bg-slate-950 rounded-md text-slate-100 bg-opacity-70 p-2 mb-2`}
        placeholderTextColor={tw.color("text-slate-100")}
        placeholder="说点什么.…"
      />
    </View>
  );
}
