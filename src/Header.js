import React, { Component } from 'react';

class Header extends Component {

constructor()
{
    super();
    this.state = {
    Title :"Movies App",
    keyword:"User text here"
    
    };
}
    handleChange=(event)=>


    {
this.setState({keyword : event.target.value ? event.target.value:"User Text here,"});
   
this.props.userInput(event.target.value );
    };

    render() {
        return (
            <><header>
  <div className="logo">{this.state.Title} </div>
            <input onChange ={this.handleChange}/>   
        
            <div style ={{color:"white",fontsize:"20px"}}>
                {this.state.keyword}
            </div>
            </header>
            </>
                      
           
        );
    }
}

export default Header;