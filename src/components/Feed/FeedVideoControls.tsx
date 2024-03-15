import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import { generateRandomNumber } from "@/libs/helpers/mock.helper";
import tw from "@/styles/tailwind";
import { View } from "react-native";
import VideoControlButton from "./VideoControlButton";

type Props = {
  data: FeedVideo;
};

export default function FeedVideoControls({ data }: Props) {
  const controlButtons = [
    {
      icon: "heart",
      text: `${generateRandomNumber(800, 1000)}`,
    },
    {
      icon: "comment",
      text: `${generateRandomNumber(300, 400)}`,
    },
    {
      icon: "hourglass-start",
      text: `${generateRandomNumber(300, 400)}`,
    },
    {
      icon: "share",
      text: `${generateRandomNumber(100, 200)}`,
    },
  ];
  return (
    <View style={tw`z-50 h-100 w-14`}>
      {controlButtons.map((controlButton, index) => (
        <VideoControlButton
          key={index}
          icon={controlButton.icon}
          text={controlButton.text}
        />
      ))}
    </View>
  );
}
