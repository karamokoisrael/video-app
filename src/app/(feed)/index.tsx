import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Video, ResizeMode } from 'expo-av';
export default function Feed() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    // Fetch videos from your backend or API
    // Example: fetch('https://your-api.com/videos')
    //   .then(response => response.json())
    //   .then(data => setVideos(data))
    //   .catch(error => console.error(error));

    // For demonstration, using dummy data
    const dummyData = [
      {
        id: 1,
        url: "https://example.com/video1.mp4",
        user: "user1",
        avatar: "https://example.com/avatar1.jpg",
      },
      {
        id: 2,
        url: "https://example.com/video2.mp4",
        user: "user2",
        avatar: "https://example.com/avatar2.jpg",
      },
      // Add more video data as needed
    ];
    setVideos(dummyData);
  }, []);

  const renderItem = ({ item }: any) => (
    <View style={styles.videoContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Video
        source={{ uri: item.url }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
      />
      <Text style={styles.username}>{item.user}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  videoContainer: {
    width: "100%",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  video: {
    width: "100%",
    height: 300,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});
