import { TextInput, View, StyleSheet } from "react-native";
import CustomizedButton from "../components/CustomizedButton";

function HomescreenGameComponent(){
    return <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                maxLength={2} 
                cursorColor={720639} 
                keyboardType="number-pad"
                multiline={false}
                />
                <CustomizedButton>Reset</CustomizedButton>
                <CustomizedButton>Confirm</CustomizedButton>
            </View>
}
export default HomescreenGameComponent;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: '#72063C',
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


    }
})