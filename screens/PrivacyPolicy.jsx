import { View, Text } from 'react-native'
import React from 'react'
import theme from './theme/theme'
import themeContext from './theme/themeContext'
import { useState,useContext } from 'react'

export default function PrivacyPolicyScreen() {
    const theme=useContext(themeContext)
    const [darkMode,setDarkMode]=useState(false)
    return ( 
        <View style={{flex:1 , alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:theme.color}}>We are still developing</Text>
        </View>
    )
}