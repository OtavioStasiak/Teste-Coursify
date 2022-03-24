import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import { Header } from '../../Components/Header';
import { OrdenateItems } from '../../Components/OrenateItems';
import { CourseCatalog } from '../../Components/CourseCatalog';
import { Footer } from '../../Components/Footer';

import { Loading } from '../../Animations/Loading';

import { api } from '../../Services/api';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();

    async function fetchDescription() {
        setLoading(true);

        setTeste('');

        const response = await api.get('categories/')
        .then(response => setCategories(response.data))
        .catch(error => navigation.navigate('Error'))
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
          setWhatArray(false);
          setMostSeen([]);
          setTeste('');
          setSortValue(1);
          setSecondSortValue(-1);
          setLoading(false);
        }else if(filter === 'Z-A'){
          setWhatArray(false);
          setMostSeen([]);
          setTeste('');
          setSortValue(-1);
          setSecondSortValue(1);
          setLoading(false);
        }else if(filter === '+ Vistos'){
          setTeste('');
          handleCreateArrayMostSeen('+');
          setLoading(false);
        }else if(filter === '- Vistos'){
          setTeste('');
          handleCreateArrayMostSeen('-')
          setLoading(false);
        };
    };

    //Array que possibilita organização A-Z e Z-A;
    var arrayEditable = categories.sort((a,b) => {return (a.name > b.name) ? sortValue : ((b.name > a.name) ? secondSortValue : 0);});
    //Array que possibilita organização +Vistos e -Vistos;
    var testeArray = teste.split("|");
    var testeArrayII = testeArray.length === 10 ? testeArray.sort((a, b) => (Number(a.split(':')[1]) > Number(b.split(':')[1])) ? 1 : (Number(b.split(':')[1]) > Number(a.split(':')[1])) ? -1 : 0)  : '';
  
    //Ordena por ordem das Views;
    const [mostSeen, setMostSeen] = useState<CategoriesProps []>([]);
    const [whatArray, setWhatArray] = useState(false);

    function handleCreateArrayMostSeen(operation: string){
      setWhatArray(true);
      if(testeArrayII !== ''){
       var item0 = categories.find(item => item.id === Number(testeArrayII[0].split(":")[0]));
       var item1 = categories.find(item => item.id === Number(testeArrayII[1].split(":")[0]));
       var item2 = categories.find(item => item.id === Number(testeArrayII[2].split(":")[0]));
       var item3 = categories.find(item => item.id === Number(testeArrayII[3].split(":")[0]));
       var item4 = categories.find(item => item.id === Number(testeArrayII[4].split(":")[0]));
       var item5 = categories.find(item => item.id === Number(testeArrayII[5].split(":")[0]));
       var item6 = categories.find(item => item.id === Number(testeArrayII[6].split(":")[0]));
       var item7 = categories.find(item => item.id === Number(testeArrayII[7].split(":")[0]));
       var item8 = categories.find(item => item.id === Number(testeArrayII[8].split(":")[0]));
       var item9 = categories.find(item => item.id === Number(testeArrayII[9].split(":")[0]));
       var arrayMostSeen = [item0! ,item1! , item2! , item3!, item4!, item5!, item6!, item7!, item8!, item9!];

       if(arrayMostSeen !== undefined){

        if(operation === '-'){
          setMostSeen([item9!, item8!, item7!, item6!, item5!, item4!, item3!, item2!, item1!, item0! ]);
          setTimeout(() => {setWhatArray(true), 500})
        }else{
          setMostSeen([item0! ,item1! , item2! , item3!, item4!, item5!, item6!, item7!, item8!, item9!]);
          setTimeout(() => {setWhatArray(true)}, 500);
        };
       };
      };
    };


    return(
        <View style={styles.container}>

            <Header Return={false} />

            <OrdenateItems onChangeFilter={(filter) => handleOrdenateToAZ(filter)} />

          { loading === true ?
            <Loading />
            : 
            <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
              { whatArray === true
                ?
                mostSeen.map((item, index) => <CourseCatalog onValueChange={(value) => createArrayOrganize(value)} key={index} id={item!.id} slug={item!.slug} name={item!.name} />)
                :
                arrayEditable.map((item, index) => <CourseCatalog onValueChange={(value) => createArrayOrganize(value)} key={index} id={item!.id} slug={item!.slug} name={item!.name} />)
              } 
            </ScrollView>}

            <Footer />
            
        </View>
    )
}
