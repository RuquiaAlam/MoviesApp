
import "./MoviesDisplay.css"

const MoviesDisplay = (props) => {
    console.log(props);

    const renderData = props.movData.map((item) =>
    {
    return(
    
       
        <div className="card">
       <img src ={item.posterUrl} alt ={item.title}/>
       <h4>{item.title}</h4>
       <p>Year:{item.year}</p>
        <p>RunTime:{item.runtime}minutes</p> 
         {/* <p>{item.genres[0].genres[1]}  </p> */}
        <p>Director:{item.director}</p>
        <p>Actors:{item.actors} </p>
        <p>{item.plot}</p>


</div>
  
    );
});
return(

    
    <div className="main">
        {renderData}
    </div>
    
);
}

export default MoviesDisplay;