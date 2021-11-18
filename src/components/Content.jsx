import React from 'react';
import { View,Text } from 'react-native';
import Agenda from './Agenda';
import Produto from './Produto';
import Usuario from './Usuario';
import AlteraState from './AlteraState'; 
import PropsParaState from './PropsParaState';
import PessoaProps from './PessoaProps';
import TrocaDados from './TrocaDados';
import Carro from './Carros';
import Time from './Time';
import Musica from './Musica'; 



export default function Content(){
    return(
        <View>
            {/* <Usuario nome = "Rodrigo" login="r@r.com" criacao ="19/07/1987"/>
            <Produto produto="Playstation 5" valor="4999,90" quantidade="254" validade="indeterminada"/>
            <Agenda nome="Rodrigo" tel="1199999-9999" email="rodrigo@rs.com"/>
            <Agenda nome="Javs" tel="1198888-8888" email="javs@rs.com"/>
            <Agenda nome="Clysin" tel="1197777-7777" email="clysin@rs.com"/>
            <Agenda nome="Jn" tel="1197777-7777" email="jn@rs.com"/>
            <Agenda nome="Td" tel="1196666-6666" email="td@rs.com"/>
            <Agenda nome="Kj" tel="1195555-5555" email="kj@rs.com"/> */}
            {/* <AlteraState nome="TV 80 pol 8k QLED" preco={499.90} parcelas={12}/> */}
            {/* <PropsParaState nome="TV 80 pol 8k QLED" preco={499.90} parcelas={12}/> */}
            {/* <PessoaProps nome="Rodrigo" habilidade="jogar" gosta="comer"/> */}
            {/* <PessoaProps nome="Stuart" habilidade="matematica" gosta="pular de para quedas"/> */}
            {/* <TrocaDados /> */}
            <Carro/>
            <Time time = "Fluminense" golmarcado= {0} golsofrido = {15}/>
            <Time time ="São Paulo" golmarcado= {10} golsofrido = {1}/>
            <Time time ="Palmeiras" golmarcado= {4} golsofrido = {8}/>
            <Musica nome = "NewYork, New York - Frank Sinatra" duracao = "4min" album = "New York, New York" /> 

         
         
                      
        </View>
    )
}