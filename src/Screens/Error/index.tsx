import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ErrorAnimated } from '../../Animations/ErrorAnimated';
import { styles } from './styles';

type Props = {
    error: string | number | object | JSON;
}

export function Error({error}: Props){
    return(
        <View style={styles.container}>
            <StatusBar style='dark' />

            <ErrorAnimated />

            <Text style={styles.title}>
                OOPS, Algo deu errado!
            </Text>

            <Text style={styles.subtitle}>
             Não se preocupe, nossa equipe já está verificando e em breve o app voltará a funcionar!
            </Text>

        </View>
    )
}

