import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import HTMLView from 'react-native-htmlview';
import { Loading } from "../../Animations/Loading";

import { api } from "../../Services/api";

import { styles } from "./styles";

type Props = {
    idPost: string | number;
    title: string;
    description: string;
    imageID: string | number;
    content: string;
    isLoading: boolean;
};

export type PostProps = {
    id: string | number;
    title: string;
    imageLink: string;
}

export function CourseCatalogItem({title, content, description, imageID, isLoading, idPost}: Props){
    //Função e Constantes que determinam o Loading e executam o API REST.
    const [loading, setLoading] = useState(isLoading);
    const [imageProps, setImageProps] = useState({guid:{rendered: ''}, media_details: {sizes: {medium:{source_url: ''}, large:{}}}});

    async function fetchImagePost() {
        setLoading(true);

        const response = await api.get(`media/${imageID}`)
        .then(response => setImageProps(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

    };

    useEffect(() => {fetchImagePost()}, [idPost]);

    const image = imageProps.media_details.sizes.medium.source_url === '' ? 'https://media.istockphoto.com/photos/dotted-grid-paper-background-texture-seamless-repeat-pattern-picture-id1320330053?b=1&k=20&m=1320330053&s=170667a&w=0&h=XisfN35UnuxAVP_sjq3ujbFDyWPurSfSTYd-Ll09Ncc=' : imageProps.media_details.sizes.medium.source_url;
  
    //Navegação;

    const navigation = useNavigation();

    const PostParams = {
        id: idPost, 
        imageLink: imageProps.guid.rendered, 
        title: title};

    function handleGoToDetails(PostParams: PostProps){
        navigation.navigate('CourseDetails', {PostParams})
    }
    
    
    return(
        <View style={styles.container}>

           { loading === true
           ?
           <Loading />
           :
            <>
                <Image source={{uri: image}} resizeMode="contain" style={styles.image} />

                <Text style={styles.title} numberOfLines={2}>
                {title.replace('&#8211;', '')}
                </Text>

                <View style={styles.html}>
                    <HTMLView value={description}/>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => handleGoToDetails(PostParams)} style={styles.button}>
                        <Text style={styles.readMore}>
                            LEIA MAIS
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
            }
        </View>
    )
};

