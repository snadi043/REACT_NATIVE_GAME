import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import CustomizedButton from "../components/CustomizedButton";

function HomescreenGameComponent(){
    const [numberInput, setNumberInput] = useState('');

    function textInputHandler(enteredText){
        setNumberInput(enteredText);
    }

    function numberResetHandler(){
        setNumberInput('');
    }

    function numberConfirmHandler(){
        

    }

    return <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                maxLength={2} 
                cursorColor={720639} 
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
            </View>
}
export default HomescreenGameComponent;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: '#3B021F',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {height: 2, width: 0},
        shadowRadius: 6,
        borderRadius: 8,
    },
    textInput:{
        height: 60,
        width: 50,
        color: '#DDB521',
        borderBottomColor: "#DDB521",
        borderBottomWidth: 2,
        textAlign: 'center',
        marginVertical: 8,
        fontWeight: 'bold',
        fontSize: 28,
    },
    buttonsContainer:{
        flexDirection: 'row',
    },
   buttonContainer:{
        flex: 1,
   }
})
