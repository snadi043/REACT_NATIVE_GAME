import { View, Text, StyleSheet, Image } from "react-native";
import CustomizedButton from '../components/ui/CustomizedButton';
import Title from '../components/ui/Title';
import Colors from "../constants/colors";

function EndGameComponent({userNumber, roundsNumber, startNewGame}){
    return <View style={styles.rootContainer}>
    <Title>Game Over!</Title>
    <View style={styles.imageContainer}> 
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
    </View>
        <Text style={styles.summaryText}>Your phone took <Text style={styles.enhanced}>{roundsNumber}</Text> rounds to identify the number <Text style={styles.enhanced}>{userNumber}</Text></Text>
        <CustomizedButton>Start A New Game</CustomizedButton>
    </View>
}
export default EndGameComponent;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 36, 
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin: 36
    },
    image:{
        height: '100%',
        width: '100%',
    },
    summaryText:{
        fontFamily: 'open-sans-regular',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    enhanced:{
        color: Colors.primary500,
        fontFamily: 'open-sans-bold'
    }
});