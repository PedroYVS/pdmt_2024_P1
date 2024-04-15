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
            className='row justify-content-center'>
                <div
                className='col col-xl-6 col-md-7 col-sm-9 col-11 m-3 rounded-pill overflow-auto'
                style={{backgroundColor: 'white'}}>
                    {this.props.tarefas[this.keys]}
                </div>
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
            className='mt-4 m-1 p-3'
            style={{backgroundColor: 'beige'}}>
                {this.state.listaTarefas}
            </div>
        )
    }
}
