import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
    title: string;
    onChangeFilter: (filter: string) => void;
    closeCollapsible: () => void;
}

export function OrdenateLabel({title, onChangeFilter, closeCollapsible}: Props){

    function handleSetFilter(){

        closeCollapsible();

        setTimeout(() => {onChangeFilter(title);}, 1000); 
        
    };

    
    return(
        <TouchableOpacity onPress={handleSetFilter} style={styles.container}>
            <Text style={styles.title}>
            {title}
            </Text>
        </TouchableOpacity>
    )
}