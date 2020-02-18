import React, { Component } from 'react'
import Midterm from './exam/midterm'
import Final from './exam/finalterm'

 class updatemarks extends Component {
    constructor(props)
    {
        super(props)
        this.state={updatemarksstate:'',
    }
    }
    setcheckstate=()=>
    {
        this.setState({updatemarksstate:'midterm'})



    }
    setcheckstatefinal=()=>
    {
        this.setState({updatemarksstate:'final'})



    }
    render() {
        return (
            <div>
               <br/>
               <br/>
               
        <button onClick={this.setcheckstate}>mid term</button>
        <button onClick={this.setcheckstatefinal}>final term</button>
        {console.log(this.props.obj)}
        {this.state.updatemarksstate==="midterm" && <Midterm roll={this.props.obj}/>}
                {this.state.updatemarksstate==="final" && <Final roll={this.props.obj}/>}
        
        
    
            </div>
        )
    }
}

export default updatemarks
