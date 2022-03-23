import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Description } from '../../Components/Description';

import { Header } from '../../Components/Header';
import { api } from '../../Services/api';
import { CourseCatalogItem } from '../CourseCatalogItem';

import { styles } from './styles';

type Props = {
        id: string | number;
        name: string;
        slug: string;
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
    }
}

export function CourseCatalog({ id, name, slug}: Props){

   const [post, setPost] = useState<PostProps []>([]);

   async function handleFetchPosts() {

       const response = await api.get(`posts?categories=${id}`);

       setPost(response.data);

    };

    useEffect(() => {handleFetchPosts()}, [])
 
    return(
        <View style={styles.container}>

            <Description description={name}/>

            <ScrollView style={{width: '100%',height: 260}} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems: 'center'}}>
                {post.map((item, index) => <CourseCatalogItem content={item.content.rendered} idPost={id} key={index} title={item.title.rendered} description={item.excerpt.rendered} imageID={item.featured_media}/>)}
            </ScrollView>

        </View>
    )
}