import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@/configurations/constants/layout";
import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import { Video, ResizeMode } from "expo-av";
import FeedHeaderVideo from "./FeedVideoHeader";
import { KeyboardAvoidingView, SafeAreaView, View } from "react-native";
import FeedVideoComments from "./FeedVideoComments";
import FeedVideoControls from "./FeedVideoControls";
import tw from "@/styles/tailwind";
import FeedVideoCommentBox from "./FeedVideoCommentBox";
import { useCallback, useMemo } from "react";
import { useVideoPlayerStore } from "@/stores/video-player.store";
type Props = {
  index: number;
  data: FeedVideo;
};
export default function FeedVideoItem({ index, data }: Readonly<Props>) {
  const { currentVideoIndex } = useVideoPlayerStore();
  const videoSelected = useMemo(() => {
    return currentVideoIndex == index;
  }, [currentVideoIndex]);

  return (
    <KeyboardAvoidingView>
      <Video
        source={{ uri: data.url }}
        resizeMode={ResizeMode.STRETCH}
        style={{
          height: WINDOW_HEIGHT,
          width: WINDOW_WIDTH,
        }}
        shouldPlay={videoSelected}
        isLooping={true}
        // usePoster={true}
        // posterSource={{ uri: data.poster }}
      >
        <FeedHeaderVideo data={data} />
        <View
          style={tw`flex flex-row items-center justify-around h-100 z-50 h-80%`}
        >
          <FeedVideoComments data={data} />
          <FeedVideoControls data={data} />
        </View>
        <View style={tw`z-50 h-18 w-full flex items-center justify-center`}>
          <FeedVideoCommentBox data={data} />
        </View>
      </Video>
    </KeyboardAvoidingView>
  );
}
