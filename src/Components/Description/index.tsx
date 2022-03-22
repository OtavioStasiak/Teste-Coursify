import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";


type Props = {
    description: string;
}

export function Description({description}: Props){
    return(
        <View style={styles.container}>
             <View style={styles.contentTitle}>
            <Text style={styles.title}>
            {description}
            </Text>
            </View>
            <TouchableOpacity style={styles.button}>
               
                    <Text style={styles.titleButton}>
                        VER MAIS
                    </Text>
                <AntDesign name="caretright" size={12} color="black" />
            </TouchableOpacity>
        </View>
    )
}