
import { Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo,Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DriverHome from './DriverHome';
import Compass from './Compass';
import Ongoing from './Ongoing';
import MapComponent from './MapComponent';



export  function Home({route}){
  const {message} = route.params;
  // console.log(`User Data is ${message}`);
    return(
      <MapComponent userData={message}/>
    );
}