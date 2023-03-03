import React, { Component } from 'react';
import Header from "./Header.js";
import Footer from "./Footer.js";
import "./Header.css";
import "./Footer.css";
import JSON from "./list.json";
import MoviesDisplay from "./MoviesDisplay.js"


class App extends Component {

  constructor()
  {
    super()
    this.state={
      moviesData:JSON,
      filteredData :JSON


      }
    }
    filteredData =(keyword) =>
    {
      let output =this.state.moviesData.filter((data) =>{
return (
  data.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1      
        );
      });
      console.log("Filtered Data ",output);
      this.setState ({filteredData:output});
    };

  render(){
    return (
     <>
     <Header userInput = {(data) => {this.filteredData(data)}}/>
     <MoviesDisplay  movData={this.state.filteredData}/>
     <Footer year="2023" month ="Mar"/>

     </>
    );
  
}
}
export default App;