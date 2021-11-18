import React from 'react';
import { View,Text} from 'react-native';

export default function Time (props){
    return(
        <View>
            <Text> Time : {props.time}</Text>
            <Text> Gols Marcados : {props.golmarcado}</Text>
            <Text> Gols Sofridos : {props.golsofrido}</Text>
            <Text> ----------------------------------- </Text>
        </View>
    )
}