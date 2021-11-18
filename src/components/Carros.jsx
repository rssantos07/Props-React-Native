import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Carro extends Component {
    state = {
        marca: "Volskwagen",
        modelo: "Voyage",
        ano: "1983",
        cor: "Verde Alamo",
        preco: "R$25000"
    };
    render() {
        return (
            <View>
                <Text onPress={
                    () => {
                        this.setState({
                            marca:"Fiat"
                        })
                    }
                }>
                  {`Marca: ${this.state.marca}`}  
                </Text>
                <Text onPress = {
                    () => {
                        this.setState({
                            modelo: "147"
                        })
                    }
                }>
                     {`Modelo: ${this.state.modelo}`}  
                </Text>
                <Text onPress={
                    ()=> {
                        this.setState({
                            ano: "1981"
                        })
                    }
                }>
                    {`Ano: ${this.state.ano}`} 
                </Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            cor: "amarelo"
                        })
                    }
                }>
                    {`Cor: ${this.state.cor}`}
                </Text>
                <Text onPress = {
                    () => {
                        this.setState({
                            preco: "R$15000"
                        })
                    }
                }>
                    {`Preço: ${this.state.preco}`}
                </Text>
                <Text>------------------------------------</Text>
            </View >
        )
    }
}