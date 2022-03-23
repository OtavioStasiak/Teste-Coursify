import React from "react";
import { View, TouchableOpacity, Image} from "react-native";

import { Feather, AntDesign } from '@expo/vector-icons';
import Logo from '../../Assets/logo.png';

import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

type Props = {
    Return: boolean;
}


export function Header({Return}: Props){

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.navigate('Home');
    };

    return(
        <View style={styles.container}>

            <StatusBar style="dark" />

            <View style={styles.content}>
                {Return === true 
                ?
                <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                    <AntDesign name="arrowleft" size={25} color="black" />
                </TouchableOpacity>
                :
                <></>}
                <Image source={Logo} resizeMode="contain" style={styles.logo}/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Feather name="menu" size={22} color="white" />
            </TouchableOpacity>

        </View>
    )
}