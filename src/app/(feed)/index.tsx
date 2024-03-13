import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { generateRandomArray } from "@/libs/helpers/mock.helper";
import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import { UserProfile } from "@/core/domain/user/user-profile.model";
import FeedVideoItem from "@/components/Feed/FeedVideoItem";
export default function Feed() {
  // const videoRef = useRef(null);
  const [videos, setVideos] = useState<FeedVideo[]>([]);

  useEffect(() => {
    const dummyData: FeedVideo[] = generateRandomArray(4).map((i) => {
      return {
        id: `${i}`,
        url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        profile: new UserProfile({
          username: `芒果布丁_${i}`,
          subtitle: `本场赞2.2w赞`,
        }),
        avatar: "https://picsum.photos/500/500",
        poster: "https://picsum.photos/500/500",
      };
    });
    setVideos(dummyData);
  }, []);

  return (
    <FlatList
      data={videos}
      renderItem={({ item }) => <FeedVideoItem data={item} />}
      keyExtractor={(item: FeedVideo) => item.id}
      pagingEnabled={true}
      showsVerticalScrollIndicator={false}
    />
  );
}
