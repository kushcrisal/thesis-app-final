import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import recordlist from './recordlist';
import {Link} from 'react-router-dom';
import studentdetails from './studentdetails';

 class studentlist extends Component {


  constructor(props)
  {
    super(props);
    this.state={
      students:[],
      date:1,
    }
  }
  componentWillMount()
  {
    axios.post('http://localhost:80/thesis/upload.php/',{date:this.state.date})
    .then(res=>{

      this.setState({students:res.data});
      console.log(res.data)
      console.log(this.state.students[1].name)
      
      
    
      
    })
    
    .catch(function(error)
    {
      console.log(error);
    })

  }
  

  student=()=>
  {
    return this.state.students.map((object)=>
    <div>


    <li>Name:{object.name}<span/>       <span/>
      Roll: {object.roll}<span/>        <span/>
      <Link to={{pathname:'/studentdetails',state:{roll:object.roll}}}>
      <button type="button" class="btn btn-primary" >View Details</button>
      </Link>
    </li>

  </div>
    );
  }
  handledate(e)
  {
    let input=e.target.value;
    this.setState({date:input})
  }

  refresh=()=>
  {
    window.location.reload(false);
  }
   

    render() {
        return (
            <div>
                <input placeholder="date"
                
                value={this.state.date}
                onChange={(e)=>this.handledate(e)}
                
                />
                <button onClick={this.refresh}>List</button>
               {this.student()}

              
              
                
            </div>
        )
    }
}


export default studentlist
