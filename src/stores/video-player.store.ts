
import { create } from "zustand";
import { VideoPlayerStore } from "@/core/domain/video/video-player-store.model";

export const useVideoPlayerStore = create<VideoPlayerStore>(
    (set, get) => ({
        currentVideoIndex: -1,
        setCurrentVideoIndex: (index: number) =>
            set({ currentVideoIndex: index }),
    })
);
