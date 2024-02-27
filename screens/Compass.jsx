import React from "react";
import { View } from "react-native";
import MapComponent from "./MapComponent";
import theme from "./theme/theme";
import themeContext from "./theme/themeContext";
import { useState,useContext } from "react";

const Compass = () => {
  const theme=useContext(themeContext)
  const [darkMode,setDarkMode]=useState(false)
  return (
    <View style={[{ flex: 1 },{backgroundColor:theme.backgroundColor}]}>
      <MapComponent />
    </View>
  );
};
export default Compass;
