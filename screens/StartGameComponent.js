import { View, Text, StyleSheet } from "react-native";

function StartGameComponent(){
    return <View style={styles.startGameRoot}>
    <Text>Game Screen</Text>
    </View>
}
export default StartGameComponent;

const styles = StyleSheet.create({
    startGameRoot: {
        flex: 1,
    }
})