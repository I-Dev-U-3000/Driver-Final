import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, View } from "react-native";
import OnBoarding from "./Onboarding";
import tw from "twrnc";

export default AboutScreen = () => {
  return (
    <View style={styles.container}>
      <OnBoarding />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
