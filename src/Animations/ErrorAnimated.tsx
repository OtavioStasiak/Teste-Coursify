import React from "react";
import { View } from "react-native";

import LottieView from 'lottie-react-native';

export function ErrorAnimated(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <LottieView source={require('./Error.json')} style={{width: 160, height: 160}} autoPlay={true} />

        </View>
    )
}