import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children, style}){
    return <Text style={[styles.labelText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    labelText:{
        color: Colors.accent500,
        fontSize: 22,
        fontFamily: 'open-sans-regular',
        textAlign: 'center'
    },
})