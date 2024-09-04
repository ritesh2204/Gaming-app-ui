/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#767676',
  gray2: '#9D9D9D',
  lightGray: '#9c9c9e',
  primary: '#121B24',
  secondary: "#232D48",
  primaryText: '#AEB3E2',
  success: '#4CAF50',
  red: '#FF4242',
  orange: "#FF7B08",
  info: '#3790FB',
  evenblue:'#7D83FF',
  oddblue:'#3C4BA4',
  evenpink:'#FF78FF',
  oddpink:'#8E3D96',
  lightRgba:'rgba(70, 73, 101, 0.29)',
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
