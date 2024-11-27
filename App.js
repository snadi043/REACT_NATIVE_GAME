import { StyleSheet, StatusBar, ImageBackground  } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomescreenGameComponent from "./screens/HomescreenGameComponent";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={['#52063C', '#DDB521']}
    >
    {/* <ImageBackground 
    source={require('./assets/images/background.png')}
    style={styles.rootContainer}
    imageStyle={styles.backgroundImage}
    resizeMode="cover"
    > */}
      <StatusBar style="auto"/>
      <HomescreenGameComponent/>
    {/* </ImageBackground> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.15,
  }
});