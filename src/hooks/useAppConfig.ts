import { useLayoutStore } from "@/stores/layout.store";

export default function useAppConfig() {

  const layoutStoreHydrated = useLayoutStore((state) => state.hydrated);


  return {
    loading: !(
      // configCtrl.data &&
      // configCtrl.data?.paymentMethods.length !== 0 &&
      layoutStoreHydrated
    ),
  };
}
