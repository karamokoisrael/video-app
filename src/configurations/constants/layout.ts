import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;
export const IS_SMALL_DEVICE = width < 375;

export const ITEMS_PER_PAGE = 10;