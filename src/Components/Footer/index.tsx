import React from "react";
import { View, Text, Image, TouchableOpacity, Linking} from "react-native";

import logoW from '../../Assets/logoW.png';
import { styles } from "./styles";

export function Footer(){
    function handleGoToCoursify(){
        Linking.openURL('https://coursify.me/')
    };

    return(
        <View style={styles.container}>
            <Image source={logoW} resizeMode='contain'/>
            <Text style={styles.text}>
            { `O Coursify.me é uma plataforma de ensino a\ndistância, onde qualquer pessoa ou empresa\n pode construir seu EAD e vender cursos pela\n internet.`}
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleGoToCoursify} activeOpacity={0.7}>
                <Text style={styles.buttonText}>
                    Quero conhecer a Plataforma!
                </Text>
            </TouchableOpacity>
        </View>
    )
}