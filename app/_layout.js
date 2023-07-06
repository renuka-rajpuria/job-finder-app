//First create a layout route in app/_layout.js which uses the pre-built Stack component from expo-router to render a native stack navigator.
import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// when the app is loading this will make the splash screen visible
SplashScreen.preventAutoHideAsync();

const Layout = () => {
const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  })

  // show the homepage only if the fonts are loaded, can think of this as useEffect
  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null;


  return <Stack onLayout = {onLayoutRootView} />;
}

export default Layout;