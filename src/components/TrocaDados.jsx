import React, { Component } from 'react';
import { render } from 'react-dom';
import { View, Text } from 'react-native';

export default class TrocaDados extends Component {
    state = {
        nome: "Leide",
        hobbie: "Passar atividades bem Legais",
        info: "Rica com fazenda"
    }

    render() {
        return (
            <View>
                <Text onPress={
                    () => {
                        this.setState({
                            nome: "Filipe"
                        })
                    }}>
                    {`Nome: ${this.state.nome}\n`}

                </Text>
                <Text onPress={
                    () => {
                        this.setState({

                            hobbie: "Fazer passeios na praia em frente sua casa",
                        })
                    }}>

                    {`Hobiie: ${this.state.hobbie}\n`}

                </Text>
                <Text onPress={
                    () => {
                        this.setState({

                            info: "Tem uma amiga Rica chama Leide kkkk"
                        })
                    }}>

                    {`InfoAdicionais: ${this.state.info}\n`}
                </Text>


            </View>

        )
    }
}

