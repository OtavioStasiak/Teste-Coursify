import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ErrorAnimated } from '../../Animations/ErrorAnimated';

type Props = {
    error: string | number | object | JSON;
}

export function Error({error}: Props){
    return(
        <View>

            <ErrorAnimated />

            <Text>
                OOPS, Algo deu errado!
            </Text>

            <Text>
             Não se preocupe, nossa equipe já está verificando e em breve o app voltará a funcionar!
            </Text>

        </View>
    )
}

