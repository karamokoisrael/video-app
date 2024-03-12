import { useUserStore } from "@/stores/user.store";
import { router } from "expo-router";
import { useEffect, useState } from "react";

export default function useScreenGuard(autoRedirect = false) {

  const user = useUserStore((state) => state.user);
  const userStoreHydrated = useUserStore((state) => state.hydrated);
  const [subscriptionEnabled, setSubscriptionStatus] = useState(true);
  useEffect(() => {
    if (userStoreHydrated && subscriptionEnabled) {
      if (user.id == -1) {
        if (autoRedirect) router.push("/(auth)/sign-in");
        return () => setSubscriptionStatus(false);
      } else {
        if (autoRedirect) router.push("/(tabs)");
        return setSubscriptionStatus(false);
      }
    }
  }, [userStoreHydrated, user.id]);

  return {
    authentified: user.id != -1,
    authLoading: !userStoreHydrated,
  };
}
