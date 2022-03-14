import React from "react";
import ReactDOM from "react-dom";
 
export default class GetData extends React.Component {

constructor(props) { 
    super(props);
     this.state={};
    this.load();    
  }

  load()
  {                                                                             
    console.log('Start Load');
    let url="https://fakestoreapi.com/products";
    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {      
    console.log("OK");
    console.log(result);  
    this.setState({data:result});        
    },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        alert(error);

        }
    )                                                                                                                                               
  }
  render() {  
    let dataToShow=<div>Not Set Yet</div>;        
    
    
    if(this.state.data)
    {        
        dataToShow = this.state.data.map(
            (i)=>{
            return(<div>{i.title}</div>)
        });
    }
    
            /*
        dataToShow = this.state?.data?.map(
            (i)=>{
            return(<div>{i.title}</div>)
        });
    */            
    return  <div>        
       ITem {dataToShow}
        </div>;     
  }
}