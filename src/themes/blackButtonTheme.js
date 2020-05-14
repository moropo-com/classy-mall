import { Platform } from "react-native";

export default {
  // Button
  btnFontFamily: Platform.OS === "ios" ? "HelveticaNeue" : "Roboto_medium",
  btnDisabledBg: "#b5b5b5",
  btnDisabledClr: "#f1f1f1",

  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },

  get btnTextSize() {
    return Platform.OS === "ios"
      ? this.fontSizeBase * 1.1
      : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Color
  brandPrimary: "black",

  // Font
  // fontFamily: Platform.OS === "ios" ? "HelveticaNeue" : "Roboto",
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Icon
  // iconFamily: "Ionicons",
  iconFontSize: Platform.OS === "ios" ? 30 : 28,
  iconMargin: 7,

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: Platform.OS === "ios" ? 37 : 30,
  lineHeight: Platform.OS === "ios" ? 20 : 24,

  // Text
  textColor: "#000",
  inverseTextColor: "#fff",

  // Other
  borderRadiusBase: Platform.OS === "ios" ? 5 : 2,
  borderWidth: 1,
  contentPadding: 10,

  get darkenHeader() {
    return "black";
  },

  dropdownBg: "#000",
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  jumbotronBg: "#C9C9CE",
  jumbotronPadding: 30
};
