import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children}){
    return <Text style={styles.labelText}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    labelText:{
        color: Colors.accent500,
        fontSize: 24
    },
})