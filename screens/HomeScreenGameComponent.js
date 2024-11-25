import { TextInput, View, StyleSheet } from "react-native";
import CustomizedButton from "../components/CustomizedButton";

function HomescreenGameComponent(){
    return <View styles={styles.inputContainer}>
            <TextInput/>
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
    }
})