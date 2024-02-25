import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { canOpenURL, openURL } from "expo-linking";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HelpCenterScreen() {
  const navigation = useNavigation();

  const [canOpenTelephone, setcanOpenTelephone] = useState(false);
  canOpenURL("tel:+959952631311").then((canOpen) =>
    setcanOpenTelephone(canOpen)
  );

  const [canOpenMail, setcanOpenMail] = useState(false);
  canOpenURL("mailto:pyaepyae@gmail.com").then((canOpen) =>
    setcanOpenMail(canOpen)
  );
  return (
    <SafeAreaView>
      <Text style={tw`p-3 ml-2 text-red-500`}>
        တစ်စုံတရာအဆင်မပြေကြောင်း သတင်းပို့လိုပါက
        အောက်ပါဆက်သွယ်ရန်အသေးစိတ်အချက်အလက်များကို
        အသုံးပြု၍ကျွန်ုပ်တို့ထံဆက်သွယ်ပါ။
      </Text>

      <View style={tw`flex-row p-5 items-center`}>
        <Feather name="phone-call" size={22} color="black" />
        <TouchableOpacity
          style={tw`font-semibold  ml-5`}
          onPress={() => openURL("tel:+959952631311")}
        >
          <Text
            style={tw`text-blue-700 underline `}
            disabled={canOpenTelephone}
          >
            +959952631311
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row p-5 items-center`}>
        <FontAwesome5 name="telegram-plane" size={24} color="black" />
        <TouchableOpacity
          style={tw`font-semibold  ml-5`}
          onPress={() => openURL("https://t.me/bibiHsu_28")}
        >
          <Text style={tw`text-blue-700 underline `}>
            Tuk-Tuk Transportation Service Pyay Channel
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row p-5 items-center`}>
        <FontAwesome name="facebook-f" size={24} color="black" />
        <TouchableOpacity
          style={tw`font-semibold  ml-5`}
          onPress={() =>
            openURL("https://www.facebook.com/profile.php?id=100026578210949")
          }
        >
          <Text style={tw`text-blue-700 underline `}>
            Tuk-Tuk Transportation Service Pyay
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row p-5 items-center`}>
        <Feather name="mail" size={24} color="black" />
        <TouchableOpacity
          style={tw`font-semibold ml-5`}
          onPress={() => openURL("mailto:pyaepyae@gmail.com")}
        >
          <Text style={tw`text-blue-700 underline `} disabled={canOpenMail}>
            TukTukPyat@gmail.com
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row p-5 items-center`}>
        <MaterialCommunityIcons
          name="office-building-marker"
          size={24}
          color="black"
        />
        <Text style={tw`ml-5`}>ကွန်ပျူတာတက္ကသိုလ် (ပြည်မြို့)</Text>
      </View>
    </SafeAreaView>
  );
}
