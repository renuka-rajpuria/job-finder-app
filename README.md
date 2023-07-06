### Learning Tutorial: [JSMastery - React Native](https://youtu.be/mJ3bGvy0WAY)

## Introduction:
Learning how React Native become a popular choice for both Android and iOS development, learning about Expo, a tool that will allow us to get our app up and running in no time, fundamentals of React Native such as:
- It's different elements
- How it compares to React.js
- Code structure
- Styling

## About the application:
Name: Job it
Description: 3 screen application with modern UI/UX, that lets dynamically fetch data using the JSearch Rapid API, allowing the user to browse the most popular jobs from LinkedIn, Deed, Glassdoor and more. We will also implement the job details page, 
- custom hooks for fetching data
- dynamic stylesheet
- responsive design across all devices
- search functionality
- pagination
- custom screen headers
We will also be deploying it to the internet for sharing it with others.

## Steps

### 1. RapidAPI

We are going to use the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) that allows ultra fast and simple job search for jobs posted on LinkedIn, Glassdoor, Ziprecruiter and more! To use the API, Log In or Sign Up at [https://rapidapi.com/](https://rapidapi.com/) and when you are redirected to Rapid API hub, there are several APIs available. First we will make the React Native application and then call this API straight from the app. 

### 2. Basics of React Native

- React Native History: 

Before React Native, developing mobile apps for multiple platforms was daunting, developers had to write separate code bases for each platform which resulted in slower development cycles and higher costs, but with react native one can write a code that can work on both Android and iOS, which not only saves time but also makes one a more efficient developer. One of the reasons why React Native has become so popular is that it allows developers to use native components, which results in better performance and a seamless user experience. It is used by companies such as Meta and Airbnb. It was developed as an open source UI software framework by Meta. 

- Advantages of React Native:
    - Cross Platform compatibility
    - Native Components
    - Hot reloading: which lets one see the changes we make in real time, thus making the development process faster and more efficient. 
    - Strong community support: ensuring the framework continually evolves and improves.
    - Easy to learn: foundational understanding of Javascipt and React JS helps a lot.


- Expo:

We are supposedly familiar with tools such as create react app and veet, expo is just that for React Native, it provides many tools and services that simplify the development process and help you build your apps more easily. One of the bigger benefits of using Expo is its simplicity as we do not have to worry about configuring your development environment or dealing with native dependencies. Expo takes care of all of this for you so that you can focus on building your app. It also offers pre-built components and APIs for 
    - Navigation
    - Gestures
    - Camera
    - Maps and more

They have also a relatively new routing system called Expo Router, it takes a different approach to handling navigation by using a file-based routing system that is simple and more intuitive. So instead of relying on complex configuration files, one can define navigation routes using the file system structure just like Next JS.

- Ins and Outs of React Native Code

We will see how it looks, functions, and compare it to React.js. This will help to have a solid understanding of React Native Fundamental Components and how to use them. When coding in RN, we use JS just like in React.js but instead of rendering HTML elements, we will be rendering native mobile components.

Code snippet for basic RN components:

```javascript
import React from 'react';

// importing two components from react native library namely, View and Text
import { View, Text } from 'react-native';

// creating a functional component called App that returns the Text component wrapped inside the view component
const App = () => {
    return (
        <View>
            <Text>Hello World!</Text>
        </View>
    )}
```

It is interesting to see that we are using the JSX syntax, which makes it easier to create and visualize our components in a more HTML like way. 

Taking a closer look at the Text component, ```<Text>Hello World!</Text>```, while in React JS we use either ```<p>PTag</p> or <h2>H2 Tag</h2>``` in RN we use the Text component instead. It is used to display the text in the App and we can style it using the same CSS type syntax ```<Text style = {{fontSize: 24, color: 'blue'}}> Hello World! </Text>```

The ```<View>``` component, is used to create a container or "view" for the other components, think of it as a box or container that holds other components. It is similar to ```<div>``` element in HTML but with some added functionality specific to mobile apps. It is often used to create layout structures for other components, it has a number of props that can be used to control its appearance and behavior. It uses the flexbox layout by default which makes it really easy to control how the child components are laid out within the container, which means one can use flexbox properties such as flex-direction, justify-content, align-items, etc, to get just the layout you want. 

- Adding interactivity

```Touchable``` components are perfect for creating buttons, links and other interactive elements. In RN we do not have a button, we have ```TouchableOpacity``` instead. If you are looking to create a button or another interactive element that fades in opacity when pressed, this component can be used. Think of it as a cousin to the ```button``` component in React with room for more customization and flexibility. 

Example of creating own button component in RN:
```javascript
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function MyButton(props) {
    return (
        <TouchableOpacity onPress = {props.onPress}>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    );
}
```

```ActivityIndicator``` is used for showing a spinner or loading indicator in your app. As it is fully customizable, you can customize the size and color of the spinner by setting the size and color props. 

```FlatList``` is used for rendering a long list of items that needs to be scrolled efficiently. It is like a Map function in React but it has extra features like optimized scroll performance and item separation. 

When to use FlatList and when to use Map in React?
For larger lists with smooth scrolling -> FlatList
For smaller lists -> Map function

```ScrollView``` is like a magic box that can hold multiple components and views, providing a scrolling container for them. It is like ```overflow: scroll``` in HTML, allowing you to easily navigate through a list of items or a large amount of content in our app. By using it we can make sure that the users can easily explore all the content, making the app more intuitive and user-friendly. 

```SafeAreaView``` provides a safe zone to render your app's content without being covered by the device's hardware features like the notch, home indicator or status bar. This ensures that your content is displayed within the visible area, making your app more accessible. 

### 3. Setup

- Create a folder and open it in VSCode, here we have named the folder as ```job-finder-app```
- Open the following link: [expo.github.io/router/docs](https://expo.github.io/router/docs/)
- Expo Router brings the best routing concepts from the web to native iOS and Android apps. 
- Use their quick start to create our RN app: ```npx create-expo-app@latest --example with-router ./```
[Here we have added the ./ to create it in the current repository]
- Once everything is set up create an ```app``` folder in the ```job-finder-app``` repository and then create two files inside it namely ```index.js``` and ```_layout.js```, these are two very important files in any RN application.
- Inside of ```_layout.js``` we can import a ```Stack``` from ```expo-router```, reference: [expo.github.io/router/docs/guides/](https://expo.github.io/router/docs/guides/)
- Later we will be using this stack to link to all other pages in our application.
- The ```./app/_layout.js``` should have the following code for now:
```javascript
//First create a layout route in app/_layout.js which uses the pre-built Stack component from expo-router to render a native stack navigator.
import { Stack } from "expo-router";

const Layout = () => {
  return <Stack />;
}

export default Layout;
```
- Then go to ```./app/index.js``` and do the following:
```javascript
import { View, Text } from "react-native";

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home;
```

- Installing some other dependencies using: ```npm install expo-font axios react-native-dotenv``` where expo-font to add a custom font, axios for API requests and the last one is an external package that will allow user to work with environment variables. 

- Run the application using ```npm start```, which is going to build and compile the application and give a QR code with which you can see and test it in your own hand. We can also open it in the browser.

- Install the [Expo Go](https://expo.dev/client) application from the PlayStore or App Store, which makes it extremely easy to test the RN applications. 

- Once downloaded, scan the QR code in Expo Go app, in case there is some issue here is the alternative solution: Press Ctrl + C to stop the server and run ```npm install -g expo-cli```, (if facing error go for ```sudo npm install -g expo-cli```) it will install globally the expo-cli package, which we will use from now on to run the application.

- Once the package is installed, use ```expo-cli start --tunnel``` this is going to run the metro bundler in a different tunnel mode, which will allow us to run the app. You might need to run ```npm install @expo/ngrok@^4.1.0``` also ensure that your development laptop/computer needs to be on the same network as your mobile.

- Starter code for the application to focus on the functionality:

    Add the ```./constants``` folder which contains files such as ```icons.js```, ```images.js```, ```index.js``` and ```theme.js``` which are some helpers which will make the development process much simpler. 

    Add the `./styles` folder as well that has the `search.js` that has the styles for the search page.

    Add `./assests` folder that has all the fonts and images we will be using.

    Lastly add the most important `./components` fiolder that defines the file structure and has nothing more than the function definition and styles. The actual logic, the jsx, the RN elements will be written now. 


### 4. Home Screen

- Let us start with `./app/index.js` add some self explanatory code such as:

```javascript
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
    )
}

export default Home;
```
- Let us now start with building the components one after the other from top down, starting with `../components/header/ScreenHeaderBtn.jsx`:

```javascript
// since in RN buttons are TouchableOpacity
import { Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";

// the iconUrl and other values are passed as props by the index.js
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        //react native with CSS properties
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
```

- Then `../components/home/Welcome.jsx`:
```javascript
import { useState } from "react";
import {
  View, // similar to div
  Text, // similar to p tag
  TextInput, // similar to input
  TouchableOpacity, // similar to button
  Image,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./welcome.style";

import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {

  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Renuka</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
```

- Need to add the styles in `./app/_layout.js`:

```javascript
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
```
- add these in `./components/home/popular/Popularjobs.jsx`

```javascript
import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/* actual jobs */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
```
### 5. API Integration (useFetch Hook)

- In the main directory create a folder called `hook` and inside it create a file `useFetch.js` the code in which will be initially:
```javascript
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
}
```

Then go to RapidAPI and Jsearch API (subscribe to the one of the plans if you havent already, then get started.) Copy the code snippet that represents something like:

```javascript
const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '<RAPID_API_KEY>',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
```

Create a `.env` in your root directory to store your RAPID_API_KEY to keep it safe, but sometimes it wont work for everyone so for now put it in the code directly but remember to not upload it on Github like that.

The popular jobs folder should look like the one in repository.

Create a `utils` folder in the main directory and then have an `index.js` inside it.

Get started with Nearby Jobs and complete it.

### 6. Job Details Screen

- Creat a new folder `job-details` in the main directory and create a dynamic route of the name `[id].js` inside it
- Complete it along with its several components.
[Not implemented: like a job and share a job functionality]

### 7. Search Functionality

- Changes to `./app/index.js`, and the `welcome` component.

### 8. Deployment


## Concepts Learnt:
- develop visually appealing UI/UX designs
- fetch data from an external API and integrate it
- implement search & pagination functionality to improve performance and user experience
- create customAPI data fetching hooks to allow reusability
- write clean, organized, and maintainable code with proper architecture
- using stylesheets to dynamically apply styles to components based on user input
- follow the best practices for React Native development
- use [this](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) extension and type `rafce` for boilerplate react code
- remember for dynamic routes use: [] and for dynamic values use ${}