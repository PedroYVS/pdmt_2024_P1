import React, { Component } from 'react'

export default class TarefaLista extends Component {

    state = {
        listaTarefas: []
    }

    listaTarefasAux = []

    keys = 0

    arrumarLista = () => {
        this.listaTarefasAux.push(
            <div
            key={this.keys + 1}
            className='col col-12 m-3 w-50 rounded-pill overflow-auto'
            style={{backgroundColor: 'white'}}>
                {this.props.tarefas[this.keys]}
            </div>
        )
        this.keys++
        this.setState({listaTarefas: this.listaTarefasAux})
    }

    componentDidMount(){
        this.arrumarLista()
    }

    componentDidUpdate(){
        if(this.keys !== this.props.tarefas.length){
            this.arrumarLista()
        }
    }

    render() {
        return (
            <div
            className='row mt-4 justify-content-center m-1 p-3'
            style={{backgroundColor: 'beige'}}>
                {this.state.listaTarefas}
            </div>
        )
    }
}
