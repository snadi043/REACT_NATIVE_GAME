import { View, Text, StyleSheet } from "react-native";
import {useState} from 'react';
import Title from "../components/ui/Title";
import GuessNumberOutput from "../components/game/GuessNumberOutput";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }


function StartGameComponent({userNumber}){
    const userGuessNumber = generateRandomBetween(1, 100, userNumber)
      const [currentGuess, setCurrentGuess] = useState(userGuessNumber);

    return <View style={styles.startGameRoot}>
    <Title>Opponent's Guess</Title>
       <GuessNumberOutput>{currentGuess}</GuessNumberOutput>
    <View>
        <Text>Higher or Lower ?</Text>
        {/* <Text>+ - </Text> */}
    </View>
    <View>
        {/* <Text>LOG ROUNDS</Text> */}
    </View>
    </View>
    
}
export default StartGameComponent;

const styles = StyleSheet.create({
    startGameRoot: {
        flex: 1,
        margin: 24,
    }
})