import React, { useEffect, useState } from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import HTMLView from 'react-native-htmlview';

import { api } from "../../Services/api";

import { styles } from "./styles";

type Props = {
    title: string;
    description: string;
    imageID: string | number;
};


export function CourseCatalogItem({title, description, imageID}: Props){

    const [imageProps, setImageProps] = useState({media_details: {sizes: {medium:{source_url: ''}}}});
    async function fetchImagePost() {
        const response = await api.get(`media/${imageID}`);

        setImageProps(response.data);
    };

    useEffect(() => {fetchImagePost()}, []);


    return(
        <View style={styles.container}>

            <Image source={{uri: imageProps.media_details.sizes.medium.source_url}} resizeMode="contain" style={styles.image} />

            <Text style={styles.title} numberOfLines={2}>
            {title.replace('&#8211;', '')}
            </Text>

            <View style={styles.html}>
                <HTMLView value={description}/>
            </View>

            <View style={styles.footer}>
             <TouchableOpacity style={styles.button}>
                 <Text style={styles.readMore}>
                     LEIA MAIS
                 </Text>
             </TouchableOpacity>
            </View>
        </View>
    )
};

