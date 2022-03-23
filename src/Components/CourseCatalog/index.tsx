import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Loading } from '../../Animations/Loading';
import { Description } from '../../Components/Description';

import { Header } from '../../Components/Header';
import { api } from '../../Services/api';
import { CourseCatalogItem } from '../CourseCatalogItem';

import { styles } from './styles';

type Props = {
        id: string | number;
        name: string;
        slug: string;
        onValueChange: (value: string ) => void;
}

type PostProps = {
    id: string | number;
    title: {
        rendered: string;
    },
    excerpt: {
        rendered: string;
    },
    featured_media: string | number;
    content:{ 
        rendered: string;
    },
    page_views: number;
}

export function CourseCatalog({ id, name, slug, onValueChange}: Props){
    //Api REST;
   const [loading, setLoading] = useState(false);
   const [post, setPost] = useState<PostProps[]>([]);

   async function handleFetchPosts() {
       setLoading(true);

       const response = await api.get(`posts?categories=${id}`)
       .then(response =>setPost(response.data))
       .catch(error => console.log(error))
       .finally(() => setLoading(false));
       
    };

    useEffect(() => {handleFetchPosts();}, [name, id, slug]);

    //Salva em um Array todos os valores;
    const pageViewCourses = post.map(item => item.page_views);
    //Faz a soma de todos os valores do Array;
    const pageViewCategory = pageViewCourses[0] !== undefined ? pageViewCourses.reduce((a, b) => {return Number(a) + Number(b)}) : '';
    //Organiza o valor a ser enviado; 
    const ItemToOrganize = id + ':' + pageViewCategory;

    //Envia para a Tela que estiver utilizando o Componente;
     function handleSetNumbers(){
        if(pageViewCategory !== ''){
       
        onValueChange(ItemToOrganize);
    };
    };

    useLayoutEffect(() => {handleSetNumbers();}, [post])

 
    return(
        <View style={styles.container}>

            {
                loading === true
                ?
                <Loading />
                :
                <>
                <Description description={name}/>

                <ScrollView style={{width: '100%',height: 260}} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems: 'center'}}>
                    {post.map((item, index) => <CourseCatalogItem isLoading={loading} content={item.content.rendered} idPost={id} key={index} title={item.title.rendered} description={item.excerpt.rendered} imageID={item.featured_media}/>)}
                </ScrollView>
                </>
            }
        </View>
    )
}