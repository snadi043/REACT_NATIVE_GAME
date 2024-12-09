import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import {useEffect, useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Title from "../components/ui/Title";
import GuessNumberOutput from "../components/game/GuessNumberOutput";
import CustomizedButton from "../components/ui/CustomizedButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogList from "../components/game/GuessLogList";

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

function StartGameComponent({userNumber, onGameOver}){
    // Making the min and max values 1 & 100 respectively because 
    // whenever the currentGuess value changes the StartGameComponent executes 
    // and reads the min and max values again even though both are the same at some point. 
    // So. to avoid this issue we are manually making the values to 1 and 100. // 

    const userInitialGuessNumber = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(userInitialGuessNumber);
    const [userRounds, setUserRounds] = useState([userInitialGuessNumber]);
    const {height, width} = useWindowDimensions();

      // Making the useEffect to run before the variables, min and max boundaries are set to avoid the errors.//

      useEffect(() => {
        if(currentGuess === userNumber ){
            onGameOver(userRounds.length);
        }
      }, [userNumber, currentGuess, onGameOver]);

      useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
      }, []);


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
        setUserRounds(prevUserRounds => [ newRndNumber, ...prevUserRounds]);
      }

      const userGuessRoundsLogLength = userRounds.length;

      let content = (
        <>
            <GuessNumberOutput>{currentGuess}</GuessNumberOutput>
                <Card>
                    <InstructionText style={styles.instructionStyles}>Higher or Lower ?</InstructionText>
                        <View style={styles.buttonsContainer}>

                            {/* pre-configuring both the buttons to expect the 'direction' prop on them and execute as per the requirement using "this" and "bind" keywords. */}
                            <View style={styles.buttonContainer}>
                                <CustomizedButton onCustomizedButtonPressProp={nextGuessNumberHandler.bind(this, 'lower')}>
                                    <Ionicons name="remove" size='24' color="white"></Ionicons>
                                </CustomizedButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <CustomizedButton onCustomizedButtonPressProp={nextGuessNumberHandler.bind(this, 'greater')}>
                                    <Ionicons name="add" size='24' color="white"></Ionicons> 
                                </CustomizedButton>
                            </View>
                        </View>
                </Card>
      </>
      );

      // considering the google pixel 3 emulator the if condition is written.

      if(width > 500){
        content = <>
            <View style={styles.landscapeViewContainer}>
                <View style={styles.buttonContainer}>
                    <CustomizedButton onCustomizedButtonPressProp={nextGuessNumberHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size='24' color="white"></Ionicons>
                    </CustomizedButton>
                </View>
                <GuessNumberOutput>{currentGuess}</GuessNumberOutput>
                <View style={styles.buttonContainer}>
                    <CustomizedButton onCustomizedButtonPressProp={nextGuessNumberHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size='24' color="white"></Ionicons> 
                    </CustomizedButton>
                </View>
            </View>
        </>
      }

    return <View style={styles.startGameRoot}>
                <Title>Opponent's Guess</Title>
                {content}
                <View style={styles.itemLogContainer}>
                    {/* {userRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}
                    <FlatList 
                        renderItem={(itemData) => <GuessLogList guess={itemData.item} roundNumber={userGuessRoundsLogLength - itemData.index}>{itemData.item}</GuessLogList>} 
                        data={userRounds} 
                        keyExtractor={(item) => item}
                    >
                    </FlatList>
                </View>
            </View>
    
}
export default StartGameComponent;

const styles = StyleSheet.create({
    startGameRoot: {
        flex: 1,
        margin: 24,
    },
    instructionStyles:{
        marginBottom: 24,
    },
    buttonsContainer:{
        flexDirection: 'row',
    },
   buttonContainer:{
        flex: 1,
   },
   landscapeViewContainer:{
        flexDirection: 'row',
        alignItems: 'center',
   },
   itemLogContainer:{
    flex: 1,
    padding: 8,
   }
})