import React from "react";
import { View, TouchableOpacity, Image} from "react-native";

import { Feather } from '@expo/vector-icons';
import Logo from '../../Assets/logo.png';

import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";


export function Header(){
    return(
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Image source={Logo} resizeMode="contain" style={styles.logo}/>
            
            <TouchableOpacity style={styles.button}>
                <Feather name="menu" size={22} color="white" />
            </TouchableOpacity>
        </View>
    )
}