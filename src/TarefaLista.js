import React, { Component } from 'react'

export default class TarefaLista extends Component {

    constructor(props){
        super(props)
        this.state = {
            listaTarefas: []
        }
    }

    arrumarLista(){
        let list = []
        this.props.tarefas.forEach(element => {
            list.push(<div className='col col-12 m-3 w-50 rounded-pill' style={{backgroundColor: 'white'}}>{element}</div>)
        })
        this.setState({listaTarefas: list})
    }

    componentDidMount(){
        this.arrumarLista()
    }

    render() {
        return (
            <div className='row mt-4 justify-content-center m-1 p-3' style={{backgroundColor: 'beige'}}>
                {this.state.listaTarefas}
            </div>
        )
    }
}
