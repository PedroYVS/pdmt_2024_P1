import React, { Component } from 'react'

export default class TarefaEntrada extends Component {

    render() {
        return (
        <div className='row mt-4 justify-content-center'>
            <div className='col col-12'>
                <input className='w-100 text-center m-1' placeholder={this.props.plholder}></input>
            </div>
            <div className="col col-12">
                <button type='button' className='btn btn-primary w-100 m-1'>Ok</button>
            </div>
        </div>
        )
    }
}