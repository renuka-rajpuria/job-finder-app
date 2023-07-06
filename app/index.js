import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router"; //think of this as a library similar to react-router

// import some constants these are going to be colors to be used throughout the application
import { COLORS, icons, images, SIZES } from '../constants';

// importing components which will initially be empty
// check if the components are properly linked by using Ctrl + Click
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    // defining the router, here useRouter is the hook
    const router = useRouter();

    return (
        // we have changed the wrapper from View to SafeAreaView to show the content safely
        // we will also apply some styles as follows
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            {/* <Text>Home</Text> */}
            <Stack.Screen
            options = {{

                headerStyle: {backgroundColor: COLORS.lightWhite },

                // Whether to hide the elevation shadow (Android) or the bottom border (iOS) on the header.
                headerShadowVisible: false,
                
                //additional property headerLeft that is an arrow function to return ScreenHeader component
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%" />
                ),

                headerRight: () => (
                    <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%" />
                ),
                headerTitle: ""

            }}
            />

        {/* users are already aware that they can vertically scroll on a mobile device     */}
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
            style = {{
                flex: 1,
                padding: SIZES.medium
            }}
            >
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default Home;