import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function StartGameComponent(){
    return <View style={styles.startGameRoot}>
    <Title>Opponent's Guess</Title>
    <View>
        <Text>Higher or Lower ?</Text>
        {/* <Text>+ - </Text> */}
    </View>
    <View>
        {/* <Text>LOG ROUNDS</Text> */}
    </View>
    </View>
    
}
export default StartGameComponent;

const styles = StyleSheet.create({
    startGameRoot: {
        flex: 1,
        margin: 24,
    }
})