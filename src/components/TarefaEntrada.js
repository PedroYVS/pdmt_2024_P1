import React, { Component } from 'react'

export default class TarefaEntrada extends Component {

    state = {
        novaTarefa: ''
    }

    alteracaoInput = (event) => {
        this.setState({novaTarefa: event.target.value})
    }

    adicaoNovaTarefa = () => {
        this.props.atualizaTarefas(this.state.novaTarefa)
        this.setState({novaTarefa: ''})
    }

    render() {
        return (
        <div className='row mt-4 justify-content-center'>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='col col-12'>
                    <input
                    type='text'
                    value={this.state.novaTarefa}
                    className='w-100 text-center m-1' placeholder={this.props.plholder}
                    onChange={this.alteracaoInput}
                    onKeyUp={(event) => { if(event.key === 'Enter') this.adicaoNovaTarefa() }}/>
                </div>
                <div className="col col-12">
                    <button type='button' className='btn btn-primary w-100 m-1' onClick={this.adicaoNovaTarefa}>Ok</button>
                </div>
            </form>
        </div>
        )
    }
}

TarefaEntrada.defaultProps = {
    plholder: 'Digite a descrição de uma nova tarefa'
}