import React, { Component } from 'react'

export default class TarefaEntrada extends Component {

    state = {
        inputTarefa: ''
    }

    alterarInput = (event) => {
        this.setState({inputTarefa: event.target.value})
    }

    adicionarNovaTarefa = () => {
        let cont = 0, tudoBranco = false
        for(let i = 0; i < this.state.inputTarefa.length; i++){
            if(this.state.inputTarefa[i] === ' ') cont++
        }
        if(this.state.inputTarefa.length === cont) tudoBranco = true
        if(this.state.inputTarefa !== '' && !tudoBranco){
            this.props.atualizaTarefas(this.state.inputTarefa)
            this.setState({inputTarefa: ''})
        }
    }

    render() {
        return (
        <div className='row mt-4 justify-content-center'>
            <form onSubmit={e => e.preventDefault()}>
                <div className='col col-12'>
                    <input
                    type='text'
                    value={this.state.inputTarefa}
                    className='w-100 text-center m-1' placeholder={this.props.plholder}
                    onChange={this.alterarInput}
                    onKeyUp={e => { if(e.key === 'Enter') this.adicionarNovaTarefa() }}/>
                </div>
                <div className="col col-12">
                    <button
                    type='button'
                    className='btn btn-primary w-100 m-1'
                    onClick={this.adicionarNovaTarefa}>
                        Ok
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

TarefaEntrada.defaultProps = {
    plholder: 'Digite a descrição de uma nova tarefa'
}