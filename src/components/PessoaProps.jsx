import React, {Component} from 'react';
import { View, Text } from 'react-native';



export default class PessoaProps extends Component {
    render() {
        return (
            <View>
                <Text> * Nome : {this.props.nome} </Text>
                <Text> * Habilidade : {this.props.habilidade} </Text>
                <Text> * Gosta de : {this.props.gosta} </Text>
                <Text> ---------------------</Text>
            </View>

        )
    }
}
