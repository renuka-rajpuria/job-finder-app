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
