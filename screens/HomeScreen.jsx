//import 'react-native-gesture-handler';
// import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Image,Switch } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigatonContainer } from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./Setting";
import AboutScreen from "./About";
import RateusScreen from "./RateUs";
import HelpCenterScreen from "./HelpCenter";
import PrivacypolicyScreen from "./PrivacyPolicy";
import Compass from "./Compass";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
//import { Image } from "react-native-svg";
import tw from "twrnc";

// const { colorScheme, toggleColorScheme } = useColorScheme();
const Drawer = createDrawerNavigator();
function HomeScreen({ route }) {
  // const { message } = route.params;
  // console.log(message);
  return (
    <Drawer.Navigator
      initialRouteName="First"
      screenOptions={{
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
      }}

      // drawerContent={
      // (props)=>{
  
    //        <SafeAreaView>
    //         <View style={[{
    //           height:200,
    //           width:"100%",
    //           justifyContent:"center",
    //           alignItems:"center",
    //           borderBottomColor:"#f4f4f4",
    //           borderBottomWidth:1,
    //           paddingBottom:12
    //         }]}>

    //         </View>
    //         <DrawerItemList {...props} />
    //         {/* <View>
    //             <View style={tw`flex-1 dark:bg-neutral-900`}>
    //             <View style={tw`flex-row dark:text-white items-center`}>
    //             <Text style={tw`text-sm p-2`}>Dark Mode</Text>
    //             <Switch
    //             style={tw`p-2`}
    //             value={colorScheme == "dark"}
    //             onChange={toggleColorScheme}
    //             />
    //   </View>
    // </View>
    //         </View> */}
    //        </SafeAreaView>
        
    //   }
    // }
    >
      <Drawer.Screen
        name="First"
        component={Compass}
        options={{
          drawerLabel: "ပင်မစာမျက်နှာ",
          title: "ပင်မစာမျက်နှာ",
          drawerIcon: () => <Ionicons name="home" size={20} color="black" />,
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: "သင့်ပရိုဖိုင်",
          title: "သင့်ပရိုဖိုင်",
          drawerIcon: () => (
            <FontAwesome name="user-circle-o" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerLabel: "ပြင်ဆင်မှူ",
          title: "ပြင်ဆင်မှူ",
          drawerIcon: () => (
            <Ionicons name="settings" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerLabel: "သုံးစွဲမှူလမ်းညွှန်",
          title: "သုံးစွဲမှူလမ်းညွှန်",
          drawerIcon: () => (
            <Ionicons
              name="ios-information-circle-outline"
              size={20}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Rateus"
        component={RateusScreen}
        options={{
          drawerLabel: "အကြုံပြုချက်",
          title: "အကြုံပြုချက်",
          drawerIcon: () => (
            <Ionicons name="star-outline" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Helpcenter"
        component={HelpCenterScreen}
        options={{
          drawerLabel: "အကူအညီတောင်းခံမှူ",
          title: "အကူအညီတောင်းခံမှူ",
          drawerIcon: () => (
            <AntDesign name="customerservice" size={20} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacypolicy"
        component={PrivacypolicyScreen}
        options={{
          drawerLabel: "အသိအမှတ်ပြုထောက်ခံချက်",
          title: "အသိအမှတ်ပြုထောက်ခံချက်",
          drawerIcon: () => (
            <MaterialIcons name="local-police" size={20} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
  //    {/* <MapView style={styles.map} /> */}
  //   </View>
  // );
  // const interpolate: typeof interpolateNode = interpolateNode ?? interpolateDeprecated;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
