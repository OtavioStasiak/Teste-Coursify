import React from "react";
import { View } from "react-native";

import LottieView from 'lottie-react-native';

export function ErrorAnimated(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <LottieView source={require('./Error.json')} style={{width: 360, height: 360}} autoPlay={true} />

        </View>
    )
}