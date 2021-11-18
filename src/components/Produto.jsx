import React from 'react';
import { View, Text } from 'react-native';

export default function Produto(props) {
    return (
        <View>

           <Text> * Produto: {props.produto}</Text>
           <Text>  * Valor do Produto R$: {props.valor}</Text>
           <Text> * Quantidade em Estoque: {props.quantidade}</Text>
           <Text> * Validade: Indeterminada {props.validade}</Text>
           <Text> ---------------------------</Text>


        </View>
    )
}
