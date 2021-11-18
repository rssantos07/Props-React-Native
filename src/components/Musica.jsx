import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Musica extends Component {
    state = {
        nome: this.props.nome,
        duracao: this.props.duracao,
        album: this.props.album
    };

    render() {
        return (
            <View>

                <Text>Nome:             {this.state.nome}</Text>
                <Text>Duração:          {this.state.duracao}</Text>
                <Text>Album:            {this.state.album}</Text>
                <Text
                    onPress={
                        () => this.setState({
                            nome: "BumBum TamTam",
                            duracao: "3:36",
                            album: "BumBum TamTam"
                        })
                    }
                >Funk</Text>
                <Text
                    onPress={
                        () => this.setState({
                            nome: "Bala de Prata -  Fernando e Sorocaba",
                            duracao: "5 min",
                            album: "Bola de Cristal"
                        })
                    }
                >Sertanejo</Text>
                <Text
                    onPress={
                        () => this.setState({
                            nome: "NOTHING ELSE MATTERS - METALLICA",
                            duracao: "6min",
                            album: "METALLICA"
                        })
                    }
                >Rock</Text>
            </View>
        )
    }
}