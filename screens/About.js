import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnBoarding from "./Onboarding";
import tw from "twrnc";
import { useState, useEffect,useContext } from "react";
import theme from "./theme/theme";
import themeContext from "./theme/themeContext";

export default AboutScreen = () => {
  const theme=useContext(themeContext)

  const [darkMode,setDarkMode]=useState(false)
  return (
    
    <View style={styles.container}>
    <SafeAreaView >
    <View>
      <OnBoarding />
      </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
