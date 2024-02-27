import { StyleSheet, View, Text, Image, Switch } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState, useEffect } from "react";
import {
  NavigatonContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { EventRegister } from "react-native-event-listeners";
import theme from "./theme/theme";
import themeContext from "./theme/themeContext";

import tw from "twrnc";
import DrawerItemList from "@react-navigation/drawer";

import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./Setting";
import AboutScreen from "./About";
import RateusScreen from "./RateUs";
import HelpCenterScreen from "./HelpCenter";
import PrivacypolicyScreen from "./PrivacyPolicy";
import Compass from "./Compass";

const DrawerNavigator  = createDrawerNavigator();
function HomeScreen({ route }) {
  const { message } = route.params;

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      // console.log(data)
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  return (
    <DrawerNavigator.Navigator
      initialRouteName="Home"
      screenOptions={[
        {
          drawerStyle: {
            backgroundColor: "#FFF",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#fff",
          },

          drawerLabelStyle: {
            color: "#111",
          },
        },
        { backgroundColor: theme.backgroundColor },
        { color: theme.color },
      ]}  
    
    
    >
      <DrawerNavigator.Screen
        name="Home"
        component={Compass}
        options={{
          drawerLabel: "ပင်မစာမျက်နှာ",
          title: "ပင်မစာမျက်နှာ",
          drawerIcon: () => (
            <Ionicons name="home" size={20} color="darkorange" />
          ),
        }}
      />

      <DrawerNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ message: message }}
        options={{
          drawerLabel: "သင့်ပရိုဖိုင်",
          title: "သင့်ပရိုဖိုင်",
          drawerIcon: () => (
            <FontAwesome name="user-circle-o" size={20} color="darkorange" />
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerLabel: "ပြင်ဆင်မှု",
          title: "ပြင်ဆင်မှု",
          drawerIcon: () => (
            <Ionicons name="settings" size={20} color="darkorange" />
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerLabel: "သုံးစွဲမှုလမ်းညွှန်",
          title: "သုံးစွဲမှုလမ်းညွှန်",
          drawerIcon: () => (
            <Ionicons
              name="ios-information-circle-outline"
              size={20}
              color="darkorange"
            />
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="Rateus"
        component={RateusScreen}
        options={{
          drawerLabel: "အကြုံပြုချက်",
          title: "အကြုံပြုချက်",
          drawerIcon: () => (
            <Ionicons name="star-outline" size={20} color="darkorange" />
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="Helpcenter"
        component={HelpCenterScreen}
        // styles={{focused ? theme.primary : 'transparent'}}
        options={{
          drawerLabel: "အကူအညီတောင်းခံမှု",
          title: "အကူအညီတောင်းခံမှု",
          drawerIcon: () => (
            <AntDesign name="customerservice" size={20} color="darkorange" />
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="Privacypolicy"
        component={PrivacypolicyScreen}
        options={{
          drawerLabel: "အသိအမှတ်ပြုထောက်ခံချက်",
          title: "အသိအမှတ်ပြုထောက်ခံချက်",
          drawerIcon: () => (
            <MaterialIcons name="local-police" size={20} color="darkorange" />
          ),
        }}
      />

    </DrawerNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
