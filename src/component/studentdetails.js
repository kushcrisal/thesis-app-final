import React, { Component } from 'react'
import axios from 'axios'
import UpdateMarks from './update/updatemarks';
import Updateview from './update/updateview';
export class studentdetails extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            students:[],
            checkState:'',
            checknull:false
            
        }
    }
    componentDidMount () {
        const { handle } = this.props.match.params
        const { roll } = this.props.location.state
        
        const {name}= this.props.location.state
        

        this.setState({link_roll:roll})
        console.log(this.state.link_roll)
        
        
        


        axios.post('http://localhost:80/thesis/upload_roll.php/',{
        
        link_roll:roll})

        
    .then(res=>{

      this.setState({students:res.data});
      console.log(res.data);
      
      
      
    
      
    })
    
    .catch(function(error)
    {
      console.log(error);
    })

    }
   
setviewupdate=()=>
{
    this.setState({checkState:'viewupdate'})
}
setmarksupdate=()=>
{
    this.setState({checkState:'marksupdate'})
}

    student=()=>
  {
    
    return this.state.students.map((object)=>
    <div>


    <li>Name:{object.name}</li>
    <li>Roll:{object.roll}</li>
    <button onClick={this.setviewupdate}>update info</button>
    <li>Final term marks</li>
  <li>Supervisor:{object.final_supervisor}</li>
    <li>External:100</li>
    <li>Committee100</li>
    <button onClick={this.setmarksupdate}>update marks</button>
    <div>
                {this.state.checkState==="viewupdate" && <Updateview obj={object.roll}/>}
                {this.state.checkState==="marksupdate" && <UpdateMarks obj={object.roll}/>}
                
            </div>
    

  </div>
    );
      
  }
  checkstatus=()=>
  {
      if(this.state.students===null)
      {
          this.setState({checknull:true})
      }
  }
  
    render() {
        return (
            <div>
            <div>
                {this.checkstatus()}
            {this.state.checknull===false && this.student() }
            
            </div>
            
            </div>
        )
    }
}

export default studentdetails
