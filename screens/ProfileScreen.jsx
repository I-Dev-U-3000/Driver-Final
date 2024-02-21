import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Title,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Svg, Line } from "react-native-svg";
import { TextInput, underlineColorAndroid } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { FontAwesome } from "@expo/vector-icons";

const logoImg = require("../assets/images/bg.jpg");

const tukLogo = require("../assets/images/login.png");

export default function ProfileScreen({route}) {
const {message} =route.params;

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={tw`flex-1 bg-orange-400`}>
        <SafeAreaView style={tw`flex`}>
          <View style={styles.profileContainer}>
            <View style={styles.imgContainer}>
              <Image source={logoImg} style={styles.image} />
              <TouchableOpacity
                style={{ alignItems: "flex-end", top: -10, right: 20 }}
              ></TouchableOpacity>
              <View style={styles.textContainer}>
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
                >
                  {message.name}
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <View style={tw`flex-1 px-8 pt-8 mt-15 bg-white rounded-t-10`}>
          <View style={tw`flex-1 justify-start mb-80`}>
            <View style={tw`flex-row`}>
              <Text style={tw`text-gray-700 ml-5 text-lg`}>Name</Text>
              {/* <Svg height="5" width="100">
                <Line x1="0" y1="0" x2="300" y2="0" stroke="black" strokeWidth="2" />
            </Svg> */}
              <Text
                style={tw`p-1 bg-white text-gray-700 rounded-2xl ml-23 mr-3 mb-3`}
              >
                {message.name}
              </Text>
            </View>
            <Svg height="20" width="300">
              <Line
                x1="0"
                y1="0"
                x2="300"
                y2="0"
                stroke="black"
                strokeWidth="2"
              />
            </Svg>

            <View style={tw`flex-row`}>
              <Text style={tw`text-gray-700 ml-5 text-lg`}>Phone Number</Text>
              {/* <Svg height="5" width="100">
                <Line x1="0" y1="0" x2="300" y2="0" stroke="black" strokeWidth="2" />
            </Svg> */}
              <Text
                style={tw`p-1 bg-white text-gray-700 rounded-2xl ml-8 mr-3 mb-3`}
              >
                {message.phoneNumber}
              </Text>
            </View>
            <Svg height="20" width="300">
              <Line
                x1="0"
                y1="0"
                x2="300"
                y2="0"
                stroke="black"
                strokeWidth="2"
              />
            </Svg>

            <View style={tw`flex-row`}>
              <Text style={tw`text-gray-700 ml-5 text-lg`}>NRC</Text>
              {/* <Svg height="5" width="100">
                <Line x1="0" y1="0" x2="300" y2="0" stroke="black" strokeWidth="2" />
            </Svg> */}
              <Text
                style={tw`p-1 bg-white text-gray-700 rounded-2xl ml-26 mr-3 mb-3`}
              >
                7/PaMaNa(N)238979
              </Text>
            </View>
            <Svg height="20" width="300">
              <Line
                x1="0"
                y1="0"
                x2="300"
                y2="0"
                stroke="black"
                strokeWidth="2"
              />
            </Svg>

            <View style={tw`flex-row`}>
              <Text style={tw`text-gray-700 ml-5 text-lg`}>Driver license</Text>
              {/* <Svg height="5" width="100">
                <Line x1="0" y1="0" x2="300" y2="0" stroke="black" strokeWidth="2" />
            </Svg> */}
              <Text
                style={tw`p-1 bg-white text-gray-700 rounded-2xl ml-11 mr-3 mb-3`}
              >
                3/444389
              </Text>
            </View>
            <Svg height="20" width="300">
              <Line
                x1="0"
                y1="0"
                x2="300"
                y2="0"
                stroke="black"
                strokeWidth="2"
              />
            </Svg>

            <View style={tw`flex-row`}>
              <Text style={tw`text-gray-700 ml-5 text-lg`}>
                TukTuk Plate No.
              </Text>
              {/* <Svg height="5" width="100">
                <Line x1="0" y1="0" x2="300" y2="0" stroke="black" strokeWidth="2" />
            </Svg> */}
              <Text
                style={tw`p-1 bg-white text-gray-700 rounded-2xl ml-5 mr-3 mb-3`}
              >
                11
              </Text>
            </View>

            <TouchableOpacity
              style={tw`py-3 rounded-full bg-orange-400 mt-6`}
              onPress={() => navigation.navigate("helpcenter")}
            >
              <Text style={tw`text-xl text-center text-white text-base`}>
                if you want to update somethings, contact us
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={tw`flex-row justify-center mt-5`}>
                <Text style={tw`font-semibold text-grey-700`}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  style={tw`font-semibold text-orange-400`}
                  onPress={() => navigation.navigate("Login")}
                >
                  Login
                </TouchableOpacity>
              </View> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex:1,
    //  background:'../assets/images/bg.jpg'
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {},
  textContainer: {
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 55,
    borderColor: "gray",
    borderWidth: 3,
    marginTop: 40,
  },
});
