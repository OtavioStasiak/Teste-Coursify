import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import { Colors } from "../../Colors/Colors";


type Props = {
    description: string;
}

export function Description({description}: Props){
    
   const fontSizeVariant = description.length > 20 ? {fontSize: 17} : {};

    return(
        <View style={styles.container}>
             <View style={styles.contentTitle}>
            <Text style={[styles.title, fontSizeVariant]}>
            {description}
            </Text>
            </View>
            <TouchableOpacity style={styles.button}>
               
                    <Text style={styles.titleButton}>
                        VER MAIS
                    </Text>
                <AntDesign name="caretright" size={12} color={Colors.Primary_Gray} />
            </TouchableOpacity>
        </View>
    )
}