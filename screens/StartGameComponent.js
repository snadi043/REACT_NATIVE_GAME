import { View, Text, StyleSheet } from "react-native";

function StartGameComponent(){
    return <View style={styles.startGameRoot}>
    <Text>Opponent's Guess</Text>
    <View>
        {/* <Text>+ - </Text> */}
    </View>
    <View>
        <Text>Higher or Lower ?</Text>
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