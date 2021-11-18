import React from 'react';
import { View,Text} from 'react-native';


export default function Agenda(props) {
    return (
        <View>
           <Text> * Agenda</Text>
           <Text> * Nome: {props.nome} </Text>
           <Text> * Telefone: {props.tel} </Text>
           <Text> * Email: {props.email} </Text>
           <Text> ---------------------</Text>


        </View>

    )
}