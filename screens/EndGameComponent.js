import { View, Text, StyleSheet, Image, ScrollView, useWindowDimensions } from "react-native";
import CustomizedButton from '../components/ui/CustomizedButton';
import Title from '../components/ui/Title';
import Colors from "../constants/colors";

function EndGameComponent({userNumber, roundsNumber, startNewGame}){
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if(width < 380){
        imageSize = 150;
    }

    if(height < 400){
        imageSize = 80;
    }

    const imageStyles = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
                <View style={[styles.imageContainer, imageStyles]}> 
                    <Image style={styles.image} source={require('../assets/images/success.png')}/>
                </View>
                    <Text style={styles.summaryText}>Your phone took <Text style={styles.enhanced}>{roundsNumber}</Text> rounds to identify the number <Text style={styles.enhanced}>{userNumber}</Text></Text>
                    <CustomizedButton onCustomizedButtonPressProp={startNewGame}>Start A New Game</CustomizedButton>
                </View>
    </ScrollView>
}
export default EndGameComponent;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 36, 
    },
    imageContainer: {
        // height: deviceWidth < 380 ? 150 : 300,
        // width: deviceWidth < 380 ? 150: 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin: 36,
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