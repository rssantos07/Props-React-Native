import React from 'react';
import { View,Text} from 'react-native';

export default function Rodapeinfo(props) {
    return (
        <View>
           <Text>Empresa: {props.empresa}</Text>
            <Text>Dev: {props.nome}</Text>

        </View>

    )
}