import { View, Text, StyleSheet, Alert } from "react-native";
import {useState} from 'react';
import Title from "../components/ui/Title";
import GuessNumberOutput from "../components/game/GuessNumberOutput";
import CustomizedButton from "../components/ui/CustomizedButton";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  // making the min and max boundaries static so that these values doesn't change for every new component rendering..// 
  let minBoundary = 1;
  let maxBoundary = 100;


function StartGameComponent({userNumber}){
    const userInitialGuessNumber = generateRandomBetween(minBoundary, maxBoundary, userNumber)
      const [currentGuess, setCurrentGuess] = useState(userInitialGuessNumber);

      function nextGuessNumberHandler(direction){
        if((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)){
            Alert.alert('Do not lie', 'Please select the proper direction of numbers to guess your expected number ', [{text: 'Sorry', style: 'cancel'}]);
        return;
        } 
        //direction parameter here is a string which is either 'higher' or 'lower'// 
        if(direction === 'lower'){
            maxBoundary = currentGuess; // max boundary is excluded from the range i,e if (1, 100) then it counts from 1-99..//
        }
        else{
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
      }

    return <View style={styles.startGameRoot}>
    <Title>Opponent's Guess</Title>
       <GuessNumberOutput>{currentGuess}</GuessNumberOutput>
    <View>
        <Text>Higher or Lower ?</Text>
        <View>

        {/* pre-configuring both the buttons to expect the 'direction' prop on them and execute as per the requirement using "this" and "bind" keywords. */}
            
            <CustomizedButton onCustomizedButtonPressProp={nextGuessNumberHandler.bind(this, 'lower')}> - </CustomizedButton>
            <CustomizedButton onCustomizedButtonPressProp={nextGuessNumberHandler.bind(this, 'greater')}> + </CustomizedButton>
        </View>
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