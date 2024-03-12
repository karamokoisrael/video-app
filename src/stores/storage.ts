import AsyncStorage from "@react-native-async-storage/async-storage";
import {createJSONStorage} from "zustand/middleware";

export const getStorage = () => {
    return createJSONStorage(() => AsyncStorage) as never;
}