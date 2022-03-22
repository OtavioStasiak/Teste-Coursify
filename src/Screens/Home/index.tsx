import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { CourseCatalog } from '../../Components/CourseCatalog';
import { Footer } from '../../Components/Footer';
import { Loading } from '../../Animations/Loading';

import { Header } from '../../Components/Header';
import { api } from '../../Services/api';

import { styles } from './styles';

type CategoriesProps = {
        link: string;
        id: string | number;
        name: string;
        slug: string;
}

export function Home(){

    const [categories, setCategories] = useState<CategoriesProps[]>([]);
    const [loading, setLoading] = useState(false);

    const categoriesFinal = [...new Set(categories)];

    async function fetchDescription() {
        setLoading(true);

        const response = await api.get('categories/')
        .then(response => setCategories(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
    
    useEffect(() => {fetchDescription();}, []);

    return(
        <View style={styles.container}>
            <Header />
          { loading === true ?
            <Loading />
            : 
            <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
              {categoriesFinal.map((item, index) => <CourseCatalog key={index} id={item.id} slug={item.slug} name={item.name} link={item.link} />)} 
            </ScrollView>}
            <Footer />
        </View>
    )
}
