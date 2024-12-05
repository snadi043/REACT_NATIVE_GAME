import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import CustomizedButton from "../components/ui/CustomizedButton";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/colors";

function HomescreenGameComponent({onConfirmNumber}){
    const [numberInput, setNumberInput] = useState('');

    function textInputHandler(enteredText){
        setNumberInput(enteredText);
    }

    function numberResetHandler(){
        setNumberInput('');
    }

    function numberConfirmHandler(){
        const enteredNumber = parseInt(numberInput);

        if(isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99){
            Alert.alert('Invalid Input Alert', 'Entered value must be a number and should be within 0 & 99', [{text: 'okay', onPress: {numberResetHandler}}]);
            return;
        }
        onConfirmNumber(enteredNumber);
        setNumberInput('');
    }

    return <View style={styles.titleContainer}>
            <Title>Guess My Number</Title>
                <Card>
                    <InstructionText>Enter a Number</InstructionText>
                    <TextInput 
                    style={styles.textInput}
                    maxLength={3} 
                    cursorColor={Colors.primary700} 
                    keyboardType="number-pad"
                    multiline={false}
                    onChangeText={textInputHandler}
                    value={numberInput}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <CustomizedButton onCustomizedButtonPressProp={numberResetHandler}>Reset</CustomizedButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <CustomizedButton onCustomizedButtonPressProp={numberConfirmHandler}>Confirm</CustomizedButton>
                        </View>
                    </View>
                </Card>
            </View>

}
export default HomescreenGameComponent;

const styles = StyleSheet.create({
    titleContainer:{
        color: 'white',
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
    },
    textInput:{
        height: 60,
        width: 50,
        color: Colors.accent500,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        textAlign: 'center',
        marginVertical: 8,
        fontFamily: 'open-sans-bold',
        // fontWeight: 'bold',
        fontSize: 28,
    },
    buttonsContainer:{
        flexDirection: 'row',
    },
   buttonContainer:{
        flex: 1,
   }
})
