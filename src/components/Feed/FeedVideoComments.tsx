import { FeedComment } from "@/core/domain/feed/feed-comment.model";
import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import tw from "@/styles/tailwind";
import { View } from "react-native";
import FeedVideoComment from "./FeedVideoComment";

type Props = {
  data: FeedVideo;
};

const comments: FeedComment[] = [
  {
    username: "",
    type: "highlighted",
    text: "123456进入直播间",
  },
  {
    username: "芝***",
    type: "default",
    text: "这是哪儿的美景？",
  },
  {
    username: "留*",
    type: "default",
    text: "不错不错",
  },
  {
    username: "芝***",
    type: "default",
    text: "这是哪儿的美景？",
  },
  {
    username: "留*",
    type: "default",
    text: "不错不错",
  },
  {
    username: "芝***",
    type: "default",
    text: "这是哪儿的美景",
  },
];

export default function FeedVideoComments({ data }: Props) {
  return (
    <View style={tw`flex items-start justify-end h-full w-80%`}>
      {comments.map((comment, index) => (
        <FeedVideoComment
          key={index}
          type={comment.type}
          text={comment.text}
          username={comment.username}
        />
      ))}
    </View>
  );
}
