import React, { Component } from 'react'

export default class TarefaLista extends Component {

    state = {
        listaTarefas: []
    }

    keys = 0

    arrumarLista = () => {
        let keysAux = 0
        const list = [], listAux = this.props.tarefas
        listAux.forEach(element => {
            keysAux++
            list.push(<div key={keysAux} className='col col-12 m-3 w-50 rounded-pill' style={{backgroundColor: 'white'}}>{element}</div>)
        })
        this.keys = keysAux
        this.setState({listaTarefas: list})
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
            <div className='row mt-4 justify-content-center m-1 p-3' style={{backgroundColor: 'beige'}}>
                {this.state.listaTarefas}
            </div>
        )
    }
}
