import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { style } from "twrnc";
import theme from "./theme/theme";
import themeContext from "./theme/themeContext";
import { useState , useContext } from "react";
import { EvilIcons } from '@expo/vector-icons';
import tw from 'twrnc';


export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  const theme=useContext(themeContext)
  const [darkMode,setDarkMode]=useState(false)

  return (
    <View style={[tw`flex-1`]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={{ flex: 0.3 }}>
        <Text >{item.title}</Text>
        <Text >{item.description}</Text>
        {/* <EvilIcons name="arrow-right" size={60} color="darkorange" /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  // title: {
  //   fontWeight: "800",
  //   fontSize: 28,
  //   marginBottom: 10,
  //   color: "#493d8",
  //   textAlign: "center",
  // },
  // description: {
  //   fontWeight: "300",
  //   color: "#62656",
  //   textAlign: "center",
  //   paddingHorizontal: 64,
  // },
});
