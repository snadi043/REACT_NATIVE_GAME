import { useState } from "react";
import { useFonts } from "expo-font";

import { StyleSheet, StatusBar, ImageBackground, SafeAreaView , View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomescreenGameComponent from "./screens/HomescreenGameComponent";
import StartGameComponent from "./screens/StartGameComponent";
import EndGameComponent from "./screens/EndGameComponent";
import Colors from "./constants/colors";

export default function App() {
  const [userChosenNumber, setUserChosenNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  useFonts({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  function confirmNumberHandler(userEnteredNumber){
    setUserChosenNumber(userEnteredNumber);
    setIsGameOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setIsGameOver(true);
    setRoundsNumber(numberOfRounds);

  }

  function startNewGameHandler(){
    setUserChosenNumber(null);
    setRoundsNumber(0);
  }

  let screen =  (<HomescreenGameComponent onConfirmNumber={confirmNumberHandler}/> );

  if(userChosenNumber){
    screen = ( <StartGameComponent userNumber={userChosenNumber} onGameOver={gameOverHandler}/> );
  }

  if(userChosenNumber && isGameOver){
    screen = <EndGameComponent userNumber={userChosenNumber} roundsNumber={roundsNumber} startNewGame={startNewGameHandler}/>
  }

  return (
  
    <LinearGradient
      style={styles.rootContainer}
      colors={[Colors.primary500, Colors.accent500]}
    >
    {/* Uncomment the lines from 13 - 18 to see the backgroundImage in the app screen only in iOS devices.  */}
    
    {/* <ImageBackground 
    source={require('./assets/images/background.png')}
    style={styles.rootContainer}
    imageStyle={styles.backgroundImage}
    resizeMode="cover"
    > */}

      <StatusBar style="auto"/>
      <SafeAreaView style={styles.rootContainer}>
        {screen}
      </SafeAreaView>

    {/* Uncomment this line which is closing tag of ImageBackground */}
    
    {/* </ImageBackground> */}

    </LinearGradient>
    
    // </View>

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