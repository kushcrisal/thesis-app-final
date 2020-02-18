import React, { Component } from 'react'
import search from './search'

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './styles/student.css'
export class student extends Component {

   constructor(props)
   {
       super(props);
       this.state={
          
            roll:"", name: "", thesis: "", supervisor: "",examiner:"",time:"" 

       }
   }

   handleClick=()=>
   {
     
     if(this.state.name !== null && this.state.roll !== null && this.state.thesis !== null && this.state.time !== null && this.state.supervisor  ){
     axios.post('http://localhost:80/thesis/insert.php/',{
         name:this.state.name,
         roll:this.state.roll,
         thesis:this.state.thesis,
         supervisor:this.state.supervisor,
         examiner:this.state.examiner,
         date:this.state.date
     })
     .then(res=>console.log(res.data))
    
    this.setState({name:"",roll:"", thesis: "", supervisor: "",examiner:"",date:"" })
     }

    

   };
   handleInput=(evt,type)=>
   {
       let input =evt.target.value;
       let temp1=this.state.temp;
       switch(type)
       {
           case "name":
               this.setState({name:input})
               break;
            case "roll":
              this.setState({roll:input}) 
               break;
            case "thesis":
              this.setState({thesis:input})  
                break; 
            case "supervisor":
              this.setState({supervisor:input}) 
                break;  
            case "examiner":
              this.setState({examiner:input})
                 break;
            
            default:   
                this.setState({date:input});
                break;
           
       }
    };
   
  

   
    render() {
        return (
            <div className="fullspace bg-dark">
            <div class="container ">
            <div class="form-group">
                <form>
                <h1>
                    Student Information
                </h1>
                <h2>
                <input 
                class="form-control"
                type="text"
                placeholder="date" 
                value={this.state.date}
                onChange={evt => this.handleInput(evt, "time")}
                required
                
                />
                </h2>
                <div className="row">
                    <div className="col-25">
                <label>Name</label>
                </div>
                <div className="col-75">
                <input 
                
                className=" form-control "
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={evt => this.handleInput(evt, "name")}
                required
            
                />
                </div>
                </div>

                <div className="row">
                    <div className="col-25">

                    <label>Roll</label>
                    </div>
                    <div className="col-75">
                    <input 
                
                className=" form-control "
                type="text"
                placeholder="Enter roll"
                value={this.state.roll}
                onChange={evt => this.handleInput(evt, "roll")}
                required
            
                />
                    
                    </div>
                    </div>

                <div className="row">
                    <div className="col-25">

                    <label> Thesis-Title</label>
                    </div>
                    <div className="col-75">
                    <input placeholder="thesis-title" 
                type="text"
                class="form-control"
                value={this.state.thesis}
                onChange={evt => this.handleInput(evt, "thesis")}
                required
                
                />
                    
                    </div>
                </div>


               
               
               

                    


                   
               

                    <div className="row">
                    <div className="col-25">

                    <label>supervisor</label>
                    </div>
                    <div className="col-75">
                    <input 
                    class="form-control"
                        type="text"
                     placeholder="supervisor"
                     value={this.state.supervisor}
                     onChange={evt => this.handleInput(evt, "supervisor")}
                     required
                
                />

                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">

                    <label>Examiner</label>
                    </div>
                    <div className="col-75">
                    <input 
                class="form-control"
                type="text"
                placeholder="examiner"
                value={this.state.examiner}
                onChange={evt => this.handleInput(evt, "examiner")}
                optional


                />
                
                    
                    </div>
                </div>
                
                <input type="submit"
                class="btn btn-primary"
                onClick={this.handleClick}
                value="Add Student"
                />
                    
                
                    </form>
                
            </div>
            </div>
</div>   
         

            
        )
    }
}

export default student



