import theme, { Theme } from "@chakra-ui/theme";
import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  ...theme.styles,
  global: (props) => ({
    "html, body": {
      fontSize: "sm",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.50", "gray.800")(props),
      lineHeight: "tall",
    },
    fontFamily: "body",
    color: mode("gray.800", "whiteAlpha.900")(props),
    bg: mode("gray.50", "gray.800")(props),
    lineHeight: "base",
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    fontFeatureSettings: `"pnum"`,
    fontVariantNumeric: "proportional-nums",
  }),
};

const customTheme: Theme = {
  ...theme,
  config: {
    ...theme.config,
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  styles,
};

export default customTheme;
