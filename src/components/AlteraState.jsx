import React, { Component } from 'react';
import { View, Text } from 'react-native';



// export default function AlteraState(props) {
//     return (
//         <View>
//             <Text> * Produto: {props.nome} </Text>
//             <Text> * Preço: {props.preço} </Text>
//             <Text> * Em até: {props.parcelas} </Text>
//             <Text> ---------------------</Text>


//         </View>

//     )
// }
// export default class AlteraState extends Component {
//     render() {
//         return (
//             <View>
//                 <Text> * Produto: {this.props.nome} </Text>
//                 <Text> * Preço: {this.props.preco} </Text>
//                 <Text> * Em até: {this.props.parcelas}x </Text>
//                 <Text> ---------------------</Text>
//             </View>

//         )
//     }
// }

export default class AlteraState extends Component {
state = {
    frase:"Quem é esse pokémon",
    mudar: "qual seu nome"
};
render(){
    return(
        <View>
           
            <Text
             onPress={
                 () => {
                     this.setState({
                         frase: "Eh o Pikachu"
                     })
                 }
             }
            >
                {`Testando nosso state \n\nvalor do State: ${this.state.frase}\n`}
            </Text>

            <Text
            onPress={
                () => {this.setState ({
                    mudar: "Rodrigo"

                })}
            }>
                {`O texto normal: ${this.state.mudar}`}
            </Text>
        </View>
    )
}

}