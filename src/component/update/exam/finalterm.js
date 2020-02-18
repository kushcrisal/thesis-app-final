import React, { Component } from 'react'
import Finalsupervisor from './section/finalsupervisor'
import Finalcommittee from './section/finalcommittee'


export class finalterm extends Component {

    constructor(props)
    {
        super(props)
        this.state={section:''}

    }
    changetosupervisor=()=>
    {
        this.setState({section:'supervisor'})
    }
    changetocommittee=()=>
    {
        this.setState({section:'committee'})
    }
    changetoexternal=()=>
    {
        this.setState({section:'external'})
    }

    render() {

        
        return (
            <div>
                <button onClick={this.changetosupervisor}>supervisor</button>
                <button onClick={this.changetocommittee}>committee</button>
                <button onClick={this.changetoexternal}>external</button>
                {this.state.section==='supervisor' && <Finalsupervisor roll={this.props.roll}/>}
                {this.state.section==='external' && <Finalsupervisor roll={this.props.roll}/>}
                {this.state.section==='committee'&& <Finalcommittee roll={this.props.roll}/>}
            </div>
        )
    }
}

export default finalterm
