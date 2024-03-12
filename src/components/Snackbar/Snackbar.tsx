import theme from "@/configurations/constants/theme";
import useAlertStore, { AlertType } from "@/stores/alert.store";
import React from "react";
import { Toast } from "react-native-ui-lib";

export default function Snackbar() {
  const colors: Record<Partial<AlertType>, string> = {
    primary: theme.colors.primary,
    success: theme.colors.success,
    warning: theme.colors.warning,
    danger: theme.colors.danger,
  };

  const alertStore = useAlertStore();
  const visible = useAlertStore((state) => state.visible);
  const loader = useAlertStore((state) => state.loader);
  const duration = useAlertStore((state) => state.duration);
  return (
    <Toast
      visible={visible}
      position={alertStore.position || "top"}
      backgroundColor={
        alertStore.type ? colors[alertStore.type] : colors.primary
      }
      message={alertStore.content}
      onDismiss={() => alertStore.hideAlert()}
      // showDismiss={showDismiss}
      autoDismiss={duration}
      action={alertStore.action}
      showLoader={loader}
    />
  );
}
