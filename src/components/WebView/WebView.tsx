//@ts-ignore
import {
  WebView as ReactNativeWebView,
  WebViewProps,
} from "react-native-webview";
import { StyleProp, ViewStyle } from "react-native";

type Props = WebViewProps & {
  source: {
    uri?: string;
    html?: string;
  };
  style?: StyleProp<ViewStyle>;
  originWhitelist?: string[];
};
export default function WebView({ source, style, originWhitelist }: Props) {
  return (
    <ReactNativeWebView
      style={style || {}}
      originWhitelist={originWhitelist || ["*"]}
      source={source}
    />
  );
}
