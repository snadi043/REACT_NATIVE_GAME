import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/colors';

function GuessNumberOutput({children}){
    return <View style={styles.numberContainer}>
        <Text style={styles.textContainer}>{children}</Text>
    </View>
}

export default GuessNumberOutput;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    numberContainer: {
        borderColor: Colors.accent500,
        borderWidth: 4,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: deviceWidth < 380 ? 12 : 24,
    },
    textContainer: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight: 'bold',
    }
});