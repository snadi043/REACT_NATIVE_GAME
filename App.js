import { View, StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import HomescreenGameComponent from "./screens/HomescreenGameComponent";

export default function App() {
  return (
    <View
      style={styles.container}
    >
      <StatusBar style="auto"/>
      <HomescreenGameComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});