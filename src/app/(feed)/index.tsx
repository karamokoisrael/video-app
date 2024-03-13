import { useEffect, useRef, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@/configurations/constants/layout";
import { SafeAreaView } from "react-native-safe-area-context";
import { generateRandomArray } from "@/libs/helpers/mock.helper";
import { FeedVideo } from "@/core/domain/feed/feed-video.model";
export default function Feed() {
  // const videoRef = useRef(null);
  const [videos, setVideos] = useState<FeedVideo[]>([]);

  useEffect(() => {
    const dummyData: FeedVideo[] = generateRandomArray(10).map((i) => {
      return {
        id: `${i}`,
        url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        username: `user${i + 1}`,
        avatar: "https://picsum.photos/500/500",
        poster: "https://picsum.photos/500/500",
      };
    });
    setVideos(dummyData);
  }, []);

  const renderItem = ({ item }: any) => (
    <View style={styles.videoContainer}>
      <Video
        source={{ uri: item.url }}
        resizeMode={ResizeMode.STRETCH}
        style={styles.video}
        shouldPlay={false}
        isLooping={true}
        usePoster={true}
        posterSource={item.poster}
      >
        {/* <Image source={{ uri: item.avatar }} style={styles.avatar} /> */}
        <Text style={styles.username}>{item.username}</Text>
      </Video>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item: FeedVideo) => item.id}
        pagingEnabled={true}
        // style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {},
  videoContainer: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  video: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});
