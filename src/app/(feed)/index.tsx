import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import {
  generateRandomArray,
  generateRandomImageLink,
  generateRandomVideoLink,
} from "@/libs/helpers/mock.helper";
import { FeedVideo } from "@/core/domain/feed/feed-video.model";
import { UserProfile } from "@/core/domain/user/user-profile.model";
import FeedVideoItem from "@/components/Feed/FeedVideoItem";
import { useVideoPlayerStore } from "@/stores/video-player.store";
export default function Feed() {
  // const videoRef = useRef(null);

  const [videos, setVideos] = useState<FeedVideo[]>([]);
  const { setCurrentVideoIndex } = useVideoPlayerStore();
  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems[0] && viewableItems[0]?.index) {
      console.log(viewableItems[0]);
      setCurrentVideoIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  useEffect(() => {
    const dummyData: FeedVideo[] = generateRandomArray(4).map((i) => {
      return {
        id: `${i}`,
        url: generateRandomVideoLink(),
        profile: new UserProfile({
          username: `芒果布丁_${i}`,
          subtitle: `本场赞2.2w赞`,
        }),
        avatar: generateRandomImageLink(),
        poster: generateRandomImageLink(),
      };
    });
    setVideos(dummyData);
  }, []);

  return (
    <FlatList
      data={videos}
      renderItem={({ item, index }) => (
        <FeedVideoItem index={index} data={item} />
      )}
      keyExtractor={(item: FeedVideo) => item.id}
      pagingEnabled={true}
      showsVerticalScrollIndicator={false}
      viewabilityConfigCallbackPairs={
        viewabilityConfigCallbackPairs.current as never
      }
    />
  );
}
