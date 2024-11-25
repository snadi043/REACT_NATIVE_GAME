import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "react-native-web";

export default function App() {
  return (
    <View
      style={styles.container}
    >
      <Text>Hello World!!!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});