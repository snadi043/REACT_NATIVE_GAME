import { StyleSheet, StatusBar, ImageBackground  } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomescreenGameComponent from "./screens/HomescreenGameComponent";
import StartGameComponent from "./screens/StartGameComponent";
import { useState } from "react";

export default function App() {
  const [userChosenNumber, setUserChosenNumber] = useState();

  function confirmNumberHandler(userEnteredNumber){
    setUserChosenNumber(userEnteredNumber);
  }

  let screen = <HomescreenGameComponent onConfirmNumber={confirmNumberHandler}/>

  if(userChosenNumber){
    screen = <StartGameComponent/>
  }

  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={['#52063C', '#DDB521']}
    >
    {/* Uncomment the lines from 13 - 18 to see the backgroundImage in the app screen only in iOS devices.  */}
    
    {/* <ImageBackground 
    source={require('./assets/images/background.png')}
    style={styles.rootContainer}
    imageStyle={styles.backgroundImage}
    resizeMode="cover"
    > */}

      <StatusBar style="auto"/>
      {screen}

    {/* Uncomment this line which is closing tag of ImageBackground */}
    
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