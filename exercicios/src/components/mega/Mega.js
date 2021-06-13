import React, {Component} from 'react'
import {Button, Text, TextInput, View} from 'react-native'

import Estilo from '../estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends Component {
    
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNuemro = (qtde) => {
        this.setState({qtdeNumeros: +qtde}) // como tá vindo como string converte pra numero com o +
    }

    gerarNumerosIgor = () => {
        
        let meuArray = []
        while(meuArray.length < this.state.qtdeNumeros){
            let randomNum = parseInt(Math.random() * 60 ) + 1
            if(!meuArray.includes(randomNum)) meuArray.push(randomNum)
        }        
        
        this.setState({numeros: meuArray.sort((a, b) => a - b)})
    }


    
    gerarNumerosProf = nums => {
        const novo = parseInt(Math.random() * 60)  + 1
        return nums.includes(novo) ? this.gerarNumerosProf(nums) : novo
    }

    gerarNumerosRecursivo = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumerosProf(n)], [])
            .sort((a, b) => a - b)
        this.setState({numeros})
    }

    gerarNumerosProcedural = () => {
        const {qtdeNumeros} = this.state
        const numeros = []

        for (let i = 0; i < qtdeNumeros; i++) {
            const n = this.gerarNumerosProf(numeros)
            numeros.push(n)            
        }

        numeros.sort((a,b) => a - b)
        this.setState({numeros})
    }


    // constructor(props){
    //     super(props)

    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros + 1000
    //     }
    // }

    
    // constructor(props){
    //     super(props)

    //     this.alterarQtdeNuemro = this.alterarQtdeNuemro.bind(this)
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num}/>
        })
    }

    render(){
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Megasena
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1, textAlign:'center', margin: 20, fontSize:30}}
                    placeholder='Qtde de Números'
                    value={`${this.state.qtdeNumeros}`} // converte para string para garantir que tá indo assim
                    onChangeText={this.alterarQtdeNuemro}
                />
                <Button title='Gerar' onPress={this.gerarNumerosIgor}/>
                {/* <Text style={Estilo.txtPrimeiro}>
                    Números gerados: {this.state.numeros.join('-')}
                </Text> */}
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}