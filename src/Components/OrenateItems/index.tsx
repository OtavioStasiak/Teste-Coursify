import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';

import { OrdenateLabel } from '../OrdenateLabel';

import { Filters } from '../../Configs/configs';

import { styles } from './styles';
import { Colors } from '../../Colors/Colors';


type Props = {
    onChangeFilter: (filter: string) => void;
}

export function OrdenateItems({onChangeFilter}: Props){

    //Função que faz o Dropdown Descer;
    const [collapsed, setCollapsed] = useState(true);

    function toggleExpanded(){
        setCollapsed(!collapsed);
    };

    //Armazena e envia o Filtro Selecionado
    const [selectedItems, setSelectedItems] = useState('A-Z');

   const spacementVariant = selectedItems.length >3 ? {marginRight: '4%', marginLeft: '25%'} : {};

   function handleSelectFilter(filter: string){
       setSelectedItems(filter);
       onChangeFilter(filter);
   }

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.title}>
                Ordernar Por:
            </Text>
            <TouchableOpacity onPress={toggleExpanded} style={styles.content}>
                <Text style={[styles.contentText, spacementVariant]}>
                    {selectedItems}
                </Text>
                <AntDesign name="caretdown" size={14} color={Colors.Primary_Gray} />
            </TouchableOpacity>
           
        </View>
         <Collapsible style={styles.collapsible} collapsed={collapsed} >
         {Filters.map((item, index) => <OrdenateLabel closeCollapsible={() => setCollapsed(!collapsed)} onChangeFilter={(filter) => handleSelectFilter(filter)} key={index} title={item.filter}/>)}
     </Collapsible>
     </>
    )
}