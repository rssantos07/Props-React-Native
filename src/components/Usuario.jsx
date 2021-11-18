import React from 'react';
import { View,Text} from 'react-native';


export default function Usuario(props) {
    return (
        <View>
           <Text> * Meu usuário</Text>
           <Text> * Nome: {props.nome} </Text>
           <Text> * Login: {props.login} </Text>
           <Text> * Data Criação: {props.criacao} </Text>
           <Text> ---------------------</Text>


        </View>

    )
}