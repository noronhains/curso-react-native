import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Oficial, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Primeiro'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import PaiDir from './components/direta/Pai'
import PaiInd from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'
import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import UsuarioLogado from './components/UsuarioLogado'
import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import DigiteSeuNome from './components/DigiteSeuNome'
import Quadrado from './components/layout/Quadrado'
import FlexboxV1 from './components/layout/FlexboxV1'
import FlexboxV2 from './components/layout/FlexboxV2'
import FlexboxV3 from './components/layout/FlexboxV3'
import FlexboxV4js from './components/layout/FlexboxV4.js'
import Mega from './components/mega/Mega'

function App(){
    return(
        <SafeAreaView style={style.App}>
            {/* <Text style={style.Texto}>Hello</Text> */}
            {/* <Primeiro /> */}
            {/* <Oficial /> */}
            {/* <Comp1 /> */}
            {/* <Comp2 /> */}
            {/* <MinMax min='1' max='20'/> */}
            {/* <MinMax min={10} max={98}/> */}
            {/* <Aleatorio min={0} max={5}/> */}
            {/* <Aleatorio min={0} max={100}/> */}
            {/* <Titulo principal='Cadastro Produto' secundario='Tela de Cadastro do Produto'/> */}
            {/* <Botao /> */}
            {/* <Contador inicial={0} passo={10} /> */}
            {/* <Contador /> */}
            {/* <Pai/> */}
            {/* <PaiInd /> */}
            {/* <ContadorV2 /> */}
            {/* <Diferenciar /> */}
            {/* <ParImpar num = {19} /> */}
            {/* <Familia nome='Noronha'>
                <Membro nome = 'Igor' sobrenome='Noronha' />
                <Membro nome = 'Sito' sobrenome='Noronha' />
            </Familia>
            <Familia nome='Silvestre'>
                <Membro nome = 'Piko' sobrenome='Silvestre' />
                <Membro nome = 'Nito' sobrenome='Silvestre' />
            </Familia> */}
            {/* <UsuarioLogado usuario={{nome:'Igor Noronha', email:'igu@email.com'}}/>
            <UsuarioLogado usuario={{email:'igu@email.com'}}/>
            <UsuarioLogado usuario={{nome:'Igor Noronha'}}/>
            <UsuarioLogado usuario={null}/> */}
            {/* <ListaProdutos /> */}
            {/* <ListaProdutosV2 /> */}
            {/* <DigiteSeuNome /> */}
            {/* <FlexboxV1 /> */}
            {/* <FlexboxV2 /> */}
            {/* <FlexboxV3 /> */}
            {/* <FlexboxV4js /> */}
            <Mega qtdeNumeros={6}/>
        </SafeAreaView>
    )
}

export default App 

const style = StyleSheet.create({
    App: {
        fontSize: 30,
        backgroundColor: '#DDD',
        flexGrow: 1, //flex: 1
        justifyContent: "center",
        alignItems: 'center', 
        padding: 20
    },
    Texto: {
        fontSize: 30,
        color: '#333'
    }
})