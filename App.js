import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomescreenGameComponent from "./screens/HomescreenGameComponent";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={['#52063C', '#DDB521']}
    >
      <StatusBar style="auto"/>
      <HomescreenGameComponent/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  }
});