import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import { Header } from '../../Components/Header';
import { OrdenateItems } from '../../Components/OrenateItems';
import { CourseCatalog } from '../../Components/CourseCatalog';
import { Footer } from '../../Components/Footer';

import { Loading } from '../../Animations/Loading';

import { api } from '../../Services/api';

import { styles } from './styles';

type CategoriesProps = {
        link: string;
        id: string | number;
        name: string;
        slug: string;

}

export function Home(){

  //API REST;
    const [categories, setCategories] = useState<CategoriesProps[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchDescription() {
        setLoading(true);

        setTeste('');

        const response = await api.get('categories/')
        .then(response => setCategories(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
    
    useEffect(() => {fetchDescription();}, []);


    //Armazena os IDS e suas respectivas Visualizações para organizar;
    const [teste, setTeste] = useState('');

    function createArrayOrganize(value: string){

      const valueLabel = value.split(":")[0];

      const Verify01 = teste.split('|').join().split(':').join().split(',');
      const Verify02 = Verify01.includes(valueLabel);

      if(Verify02 === false && teste.length === 0){

           setTeste(value); 

      }else{

          if(Verify02 === false){
              setTeste(value + '|' + teste);

          }else{

              var index = Verify01.indexOf(valueLabel);
              var ItemToDelete = Verify01.slice(index, index+2);
              var ArrayDeleted = Verify01.filter(item => item !== ItemToDelete[0]).filter(item => item !== ItemToDelete[1]);
              setTeste(ArrayDeleted.reduce((a,b) => ArrayDeleted.indexOf(a)/2 === 0 ? a+':'+ b : ArrayDeleted.indexOf(b)%2 !== 0 ? a + ':' + b  :   a + '|' + b) + '|' + value)
            
              };
           };
    };

    //Variáveis que possibilitam a organização em A-Z, Z-A;
    const [sortValue, setSortValue] = useState(1);
    const [secondSortValue, setSecondSortValue] = useState(-1);

    //Função que organiza as categorias;
    function handleOrdenateToAZ(filter: string){
        setLoading(true);

        if(filter === 'A-Z'){
          setTeste('');
          setSortValue(1);
          setSecondSortValue(-1);
          setLoading(false);
        }else if(filter === 'Z-A'){
          setTeste('');
          setSortValue(-1);
          setSecondSortValue(1);
          setLoading(false);
        }else if(filter === '+ Vistos'){
          setTeste('');
          setLoading(false);
        }else if(filter === '- Vistos'){
          setTeste('');
          setLoading(false);
        };
    };

    //Array que possibilita organização A-Z e Z-A;
    var arrayEditable = categories.sort((a,b) => {return (a.name > b.name) ? sortValue : ((b.name > a.name) ? secondSortValue : 0);});
    //Array que possibilita organização +Vistos e -Vistos;
    var testeArray = teste.split("|");
    var testeArrayII = testeArray.length === 10 ? testeArray.sort((a, b) => {return (a.split(':')[1] > b.split(':')[1]) ? 1 : ((b.split(':')[1] > a.split(':')[1]) ? -1 : 0);}).reduce((a, b) => a.split(':')[0] + ',' + b.split(':')[0]) : '';
    var firstItemToDelete = testeArrayII.split(',');
    console.log(testeArrayII)
    return(
        <View style={styles.container}>

            <Header Return={false} />

            <OrdenateItems onChangeFilter={(filter) => handleOrdenateToAZ(filter)} />

          { loading === true ?
            <Loading />
            : 
            <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
              {arrayEditable.map((item, index) => <CourseCatalog onValueChange={(value) => createArrayOrganize(value)} key={index} id={item.id} slug={item.slug} name={item.name} />)} 
            </ScrollView>}

            <Footer />
            
        </View>
    )
}
