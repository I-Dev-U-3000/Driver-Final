import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useState, useRef,useContext } from "react";
import { AntDesign } from '@expo/vector-icons';
import themeContext from "./theme/themeContext";
import { useNavigation } from "@react-navigation/native";
import theme from "./theme/theme";
import tw from 'twrnc';
import { SafeAreaView } from "react-native-safe-area-context";
import loginslides from "./loginslides";
import OnboardingItem from "./OnboardingItem";
//import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
//import { ViewPropTypes } from "deprecated-react-native-prop-types";

export default GuideScreen = () => {

  const navigation = useNavigation();

  const theme=useContext(themeContext)

  const [darkMode,setDarkMode]=useState(false)

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <ScrollView>
    <SafeAreaView>
    <View style={tw`flex-row justify-start`}>
            <TouchableOpacity
              style={tw`p-2 ml-4 mt-2`}
              onPress={() => navigation.navigate('GetStarted')}
            >
          <AntDesign name="arrowleft" size={20} color="black" />        
    </TouchableOpacity>
          </View>
    <View style={styles.container}>

      <View style={[{flex : 3}]}>
      <Text style={[tw`text-lg mb-13 text-center`,{color:theme.color}]}>ဘယ်လို Log in လုပ်မလဲ</Text>
      <FlatList
        data={loginslides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
      </View>

        </View>
        </SafeAreaView>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
