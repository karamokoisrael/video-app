import { FeedComment } from "@/core/domain/feed/feed-comment.model";
import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import tw from "@/styles/tailwind";
import { View, Text } from "react-native-ui-lib";

export default function FeedVideoComment({
  type,
  username,
  text,
}: FeedComment) {
  const isHighlighted = type == "highlighted";
  return (
    <View
      style={tw`h-10 max-w-80% bg-slate-950 bg-opacity-70 mb-1 p-2 rounded-md flex flex-row items-center justify-start`}
    >
      {!isHighlighted ? (
        <Text style={tw`ml-1 text-[#aa595b]`}>{username}</Text>
      ) : null}

      <Text style={tw`text-${isHighlighted ? "[#7db065]" : "slate-100"}`}>
        {isHighlighted ? "" : ": "}
        {text}
      </Text>
    </View>
  );
}
