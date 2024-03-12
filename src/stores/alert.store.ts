import i18n from "@/libs/helpers/globalization.helper";
import { Assets } from "react-native-ui-lib";
import { create } from "zustand";

export type AlertType = "primary" | "success" | "warning" | "danger";

export type AlertPosition = "top" | "bottom";

export type AlertAction = {
  iconSource: any;
  onPress: () => void;
};

export type AlertStore = {
  visible: boolean;
  content: string;
  duration: number;
  position: AlertPosition;
  loader: boolean;
  type: AlertType;
  action?: AlertAction;
  showAlert: (params: ShowAlertParams) => void;
  showLoader: (params?: ShowLoaderParams) => void;
  hideAlert: () => void;
  toggleAlert: () => void;
};

export type ShowAlertParams = {
  content: string;
  action?: AlertAction;
  type?: AlertType;
  position?: AlertPosition;
  duration?: number;
  loader?: boolean;
};

export type ShowLoaderParams = {
  content?: string;
  action?: AlertAction;
  type?: AlertType;
  position?: AlertPosition;
  duration?: number;
  loader?: boolean;
};

const defaultDuration = 3000;
const defaultContent = "";
const defaultPosition = "bottom";
const getDefaultAction = (get: any) => {
  const defaultAction: AlertAction = {
    iconSource: Assets.icons.x,
    onPress: () => get().hideAlert(),
  };
  return defaultAction;
};

const useAlertStore = create<AlertStore>((set, get) => ({
  visible: false,
  content: defaultContent,
  type: "primary",
  duration: defaultDuration,
  position: defaultPosition,
  loader: false,
  action: getDefaultAction(get),
  showAlert: ({
    content,
    action,
    type,
    position,
    duration,
    loader,
  }: ShowAlertParams) => {
    set({ visible: false });
    const data: Partial<AlertStore> = {
      content,
      visible: true,
      position: position || defaultPosition,
      action: action || getDefaultAction(get),
      type: type || "primary",
      duration: duration || defaultDuration,
      loader,
    };
    return set(data as AlertStore);
  },
  showLoader: (params?: ShowLoaderParams) => {
    const data: Partial<AlertStore> = {
      content: params?.content || i18n.t("loading"),
      visible: true,
      position: params?.position || defaultPosition,
      action: params?.action || getDefaultAction(get),
      type: params?.type || "primary",
      duration: params?.duration || 240*100,
      loader: true,
    };
    return set(data as AlertStore);
  },
  hideAlert: () => set({ visible: false }),
  toggleAlert: () => set({ visible: !get().visible }),
}));

export default useAlertStore;
