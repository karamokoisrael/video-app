import { sharedStyles } from "./shared";
import theme from "@/configurations/constants/theme";

import {
  Colors,
  Typography,
  Spacings,
  ThemeManager,
} from "react-native-ui-lib";

export function configRnuiLibTheme() {
  Colors.loadColors({
    primaryColor: theme.colors.primary,
    secondaryColor: theme.colors.secondary,
    textColor: "#221D23",
    errorColor: "#E63B2E",
    successColor: "#ADC76F",
    warnColor: "##FF963C",
  });

  Typography.loadTypographies({
    heading: { fontSize: 36, fontWeight: "600" },
    subheading: { fontSize: 28, fontWeight: "500" },
    body: { fontSize: 18, fontWeight: "400" },
  });

  Spacings.loadSpacings({
    page: 20,
    card: 12,
    gridGutter: 16,
  });

  // with plain object
  ThemeManager.setComponentTheme("Card", {
    borderRadius: 8,
  });

  // with a dynamic function
  ThemeManager.setComponentTheme("Button", (props: any, _context: any) => {
    return {
      ...props.style,
      ...sharedStyles.button,
    };
  });
  ThemeManager.setComponentTheme("SegmentedControl", (props: any, _context: any) => {
    return {
      ...props.style,
      ...sharedStyles.segmentedControl,
    };
  });
}
