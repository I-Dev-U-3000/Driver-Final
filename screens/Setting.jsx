import { View, Text,Switch,TouchableOpacity } from 'react-native'
import React,{useState,useContext} from 'react'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from './theme/themeContext'
import { Svg, Line } from "react-native-svg";
import tw from 'twrnc'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


export default function SettingScreen() {
    const theme=useContext(themeContext)

    const [darkMode,setDarkMode]=useState(false)
    const navigation = useNavigation();
    return ( 

        <View style={[{flex:1,justifyContent:"flex-start",marginLeft:5,marginRight:5,marginTop:5},{backgroundColor:theme.backgroundColor}]}>
        <View style={tw`flex-row dark:text-white items-center ml-5 mt-5 mr-10 justify-between`}>
        <Text style={[{color:theme.color},tw`text-lg`]}>Dark Mode</Text>
            <Switch
            value={darkMode}
            onValueChange={(value)=>{ 
            setDarkMode(value);
            EventRegister.emit('ChangeTheme',value)
            
        }}
            />
          </View>

          <View style={tw`flex-row ml-2 mt-5`}>
          <Ionicons name="exit" size={25} color="darkorange" style={{ marginLeft: 10, color: theme.color }} />

          <TouchableOpacity onPress={() => navigation.navigate('Login')} sty>
          <Text style={[{color:theme.color},tw`text-lg ml-1`]}>Logout</Text>
          </TouchableOpacity>
          </View>
        
        </View>
    )
}
























// import { View, StyleSheet, Text, Switch } from "react-native";
// import React from "react";
// import Animated from "react-native-reanimated";
// import tw from "twrnc";
// import { useTheme } from "styled-components";
// import { useThemeContext } from "./themes";

// export default function SettingScreen({ animatedStyle }){
//   const theme = useTheme();
//   const themeContext = useThemeContext();
//   return (
//     <Animated.View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: theme.colors.background,
//         ...animatedStyle,
//       }}
//     >
//     <View style={tw`flex-row dark:text-white items-center`}>
//       <Text style={tw`text-sm p-2`}>Dark Mode</Text>
//       <Switch 
//         value={themeContext.mode === "dark"}
//         onValueChange={(value) => {
//           themeContext.setMode(value ? 'dark' : 'light')
//         }}
//       >

//       </Switch>
//       </View>
//     </Animated.View>
//   );
// };




// // export default function SettingScreen() {
// //   const { colorScheme, toggleColorScheme } = useColorScheme();
// //   return (
// //     <View style={tw`flex-1 dark:bg-neutral-900`}>
// //       <View style={tw`flex-row dark:text-white items-center`}>
// //         <Text style={tw`text-sm p-2`}>Dark Mode</Text>
// //         <Switch
// //           style={tw`p-2`}
// //           value={colorScheme == "dark"}
// //           onChange={toggleColorScheme}
// //         />
// //       </View>
// //     </View>
// //   );
// // }
