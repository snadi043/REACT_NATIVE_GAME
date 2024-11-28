import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function GuessNumberOutput({children}){
    return <View style={styles.numberContainer}>
        <Text style={styles.textContainer}>{children}</Text>
    </View>
}

export default GuessNumberOutput;

const styles = StyleSheet.create({
    numberContainer: {
        borderColor: Colors.accent500,
        borderWidth: 4,
        padding: 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 24,
    },
    textContainer: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold',
    }
});