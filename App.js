import { View, StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import HomescreenGameComponent from "./screens/HomescreenGameComponent";

export default function App() {
  return (
    <View
      style={styles.rootContainer}
    >
      <StatusBar style="auto"/>
      <HomescreenGameComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#DDB521',
    flex: 1,
  }
});