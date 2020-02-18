import React, { Component } from 'react'
import axios from 'axios'
import './finalsupervisor.css'

export class finalsupervisor extends Component {
    constructor(props)
    {
        super(props)
        this.state={regularity:0,
        understanding:0,
        effort:0,
        organization:0,
        timely:0,
        total:0,
        sec:'final_supervisor'
        
    
    }
    }
    
    
       
    
    handleInput=(evt,type)=>
    {
        let input =evt.target.value;
        let temp1=this.state.temp;
        switch(type)
        {
            case "regularity":
                this.setState({regularity:input})
                break;
             case "understanding":
               this.setState({understanding:input}) 
                break;
             case "effort":
               this.setState({ effort:input})  
                 break; 
             case "organization":
               this.setState({organization:input}) 
                 break;  
             case "timely":
               this.setState({timely:input})
                  break;
             
             default:   
               
                 break;
            
        }
        
        this.calculate()
     };
     calculate=()=>
     {
        let a=parseInt(this.state.regularity)
        let b=parseInt(this.state.timely)
        let c=parseInt(this.state.understanding)
        let d=parseInt(this.state.effort)
        let e=parseInt(this.state.organization)
        this.setState({total:a+b+c+d+e})
        

     }
     refresh=()=>
  {
    window.location.reload(false);
  }
     upload=()=>
     {
        

         axios.post('http://localhost:80/thesis/update.php/',{
            roll:this.props.roll,quantity:this.state.total,
            marks:this.state.sec
            
        })
        .then(res=>console.log(res.data))

        console.log(this.props.roll)
       
        this.refresh()
        
     }
     


    render() {
        return (
            <div class="popup" id="myForm">
                <div className="popup-content">
                 <h2>
                            Supervisor
                    </h2>
                    
                        <table align="center" className="table table-hover table-dark">
                            <thead>
                            <tr>
                                <th>marking parameter</th>
                                <th>full marks</th>
                                <th>marks obtained</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>regularity of work</td> 
                                <td>20</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.regularity}
                                onChange={evt => this.handleInput(evt, "regularity")}
                                />
                                </td>
                            
                            
                            </tr>
                            <tr>
                                <td>understanding thesis work</td> 
                                <td>20</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.understanding}
                                onChange={evt => this.handleInput(evt, "understanding")}
                            
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>student effort and performance</td> 
                                <td>20</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.effort}
                                onChange={evt => this.handleInput(evt, "effort")}
                            
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>organization of study</td> 
                                <td>20</td>
                                <td>
                                <input
                                placeholder="marks"
                               // value={this.state.organization}
                                onChange={evt => this.handleInput(evt, "organization")}
                            
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>Timely completion of thesis work</td> 
                                <td>20</td>
                                <td>
                                <input
                                placeholder="marks"
                                //value={this.state.timely}
                                onChange={evt => this.handleInput(evt, "timely")}
                            
                                /></td>
                            </tr>
                            <tr>
                                <td>total </td> 
                                <td></td>
                                <td>
                                    
                                    {this.state.total}
                               </td>
                            </tr>
                            </tbody>
                        </table>
                        <button onClick={this.upload} class="btn btn-dark">Submit</button>
                        <div>
                        <button onClick={this.refresh} class="btn btn-dark">Marks Input completion</button>
                        </div>
                        </div>
            </div>
        )
    }
}

export default finalsupervisor
