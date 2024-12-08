import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogList({guess, roundNumber}){
    return <View style={styles.itemList}>
        <Text style={styles.textStyle}>
            #{roundNumber}
        </Text>
        <Text style={styles.textStyle}>
            Opponent's Guess: {guess}
        </Text>
    </View>
}
export default GuessLogList;

const styles = StyleSheet.create({
    itemList: {
        borderColor: Colors.primary700,
        borderRadius: 36,
        borderWidth: 1,
        elevation: 4,
        padding: 12,
        marginVertical: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    textStyle: {
        fontFamily: 'open-sans-regular'
    }
})