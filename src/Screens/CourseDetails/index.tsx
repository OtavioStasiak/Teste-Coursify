import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import HTMLView from 'react-native-htmlview';

import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';

import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PostProps } from '../../Components/CourseCatalogItem';
import { api } from '../../Services/api';
import { Loading } from '../../Animations/Loading';

type Params = {
    PostParams: PostProps;
};

type ContentPostProps = {
    id: string | number;
    content:{ 
        rendered: string;
    }
}

export function CourseDetails(){
    const [loading, setLoading] = useState(false);
    //Dados vindo da tela anterior;
    const routes = useRoute();
    const {PostParams} = routes.params as Params;
    const navigation = useNavigation();

    const [content, setContent] = useState<ContentPostProps[]>([]);

    async function handleFetchPosts() {
        setLoading(true);

        const response = await api.get(`posts?categories=${PostParams.id}`)
        .then(response => setContent(response.data))
        .catch(error => navigation.navigate('Error'))
        .finally(() => setLoading(false));
 

     };
 
     useEffect(() => {handleFetchPosts()}, [])

     const finalContent = content.map(item => item.content.rendered).toString();
   
    return(
        <View style={styles.container}>
            <Header Return={true} />
            
                <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
                    <Text style={styles.title}>
                        {PostParams.title.replace('&#8211;', '')}
                    </Text>

                    <Image source={{uri: PostParams.imageLink}} style={styles.image} />
                    {
                    loading === true 
                    ?
                    <Loading />
                    :
                    <View style={styles.content}>
                        <HTMLView value={finalContent}/>
                    </View>
                    }
                </ScrollView>
            
            <Footer />
        </View>
    )
}