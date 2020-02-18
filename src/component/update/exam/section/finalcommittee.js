import React, { Component } from 'react'
import axios from 'axios'


export class finalsupervisor extends Component {
    constructor(props)
    {
        super(props)
        this.state={regularity:0,
        understanding:0,
        effort:0,
        organization:0,
        timely:0,
        
        com_name:[],
        name:'',
        membershow:false,

        nametot:{nam:'',tot:0},
        temp:{nam:'',tot:0},
        
        sec:'final_supervisor'
        
        
    
    }
    
    }
    
    
       
    
    handleInput=(evt,type)=>
    {
        let input =evt.target.value;
        
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
        
        
     };
     calculate=(object,index)=>
     {
         
         let temp=this.state.temp1;
         let f;
        let a=parseInt(this.state.regularity)
        let b=parseInt(this.state.timely)
        let c=parseInt(this.state.understanding)
        let d=parseInt(this.state.effort)
        let e=parseInt(this.state.organization)
        f=a+b+c+d+e;
       object=f
        
       console.log(object)
       return f;

        
       
        
        
        
        
        

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
     takename=()=>
     {
         this.setState({membershow:false})
        let previous = this.state.com_name;
        let temp1 = this.state.temp;
        previous.push(temp1);
        this.setState({
          com_name: previous,
          temp:{nam:'',tot:0}
        });
        console.log(this.state.com_name)

     }
     

     handleInputcom=(evt)=>
     {
         let temp1 = this.state.temp;

         temp1.nam=evt.target.value
         this.setState({temp:temp1})
         
        
        
        
     }
     member=()=>
     {
         return this.state.com_name.map((object,index)=>
         <div >
                <div >
                 <h2>
                            {object.name}
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
                                    
                                    {this.calculate(object.tot,index)}
                               </td>
                            </tr>
                            </tbody>
                        </table>
                        <button onClick={this.calculate(object.tot,index)} class="btn btn-dark">Submit</button>
                        
                        </div>
            </div>



         );
     }
     
     
     
     
membershowchange=()=>
    {
        this.setState({membershow:true})
    }

    render() {
        return (
            <div>Committee member:<input type="text" onChange={evt=>this.handleInputcom(evt)} value={this.state.temp.nam}/>
            <input type="submit" onClick={this.takename} value="Add"/>
            <button onClick={this.membershowchange}>Done</button>
            {this.state.membershow && this.state.com_name !==null && this.member()}
           
                </div>
           
        )
    }
}

export default finalsupervisor
