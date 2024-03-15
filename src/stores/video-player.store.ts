
import { create } from "zustand";
import { VideoPlayerStore } from "@/core/domain/video/video-player-store.model";

export const useVideoPlayerStore = create<VideoPlayerStore>(
    (set, get) => ({
        currentVideoKey: "",
        setCurrentVideoKey: (key: string) =>
            set({ currentVideoKey: key }),
    })
);
