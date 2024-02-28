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
        <Text style={{fontSize:20,textAlign: "center",marginTop:10,fontWeight:700}}>{item.title}</Text>
        <Text >{item.description}</Text>
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
    width:200,
    height:500
  },
  title: {
    fontWeight: "800",
    fontSize: 38,
    marginBottom: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
    marginLeft:20,
  },

  // description: {
  //   fontWeight: "300",
  //   color: "#62656",
  //   textAlign: "center",
  //   paddingHorizontal: 64,
  // },
});
