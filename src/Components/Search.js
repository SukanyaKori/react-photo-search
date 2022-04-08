
import React, { useState } from "react";

import axios from "axios";




export default function Search() {

  
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);


  const changePhoto= async () =>{
    axios. get('https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=YuvWejeb4FPO3i343DaPfkJG2E5zWkHe5jaZekP1dP8')
    .then((response)=>{
      console.log(response.data.results);
      setResult(response.data.results);
    })
  
  }
const formsubmit=(e)=> {
  
  e.preventDefault();
  changePhoto()

}


  return (
    <>
      <form className="form" onSubmit={formsubmit}>
    
        <input type="search" name="searchText" placeholder="Search for images..." id='search-text-input' color="Black" value={photo} onChange={(e) => setPhoto(e.target.value)} style={{ alignItems:"center",marginLeft:200,marginTop:30, padding: "5px 25px", width: 600, height: 40, fontsize: "x large", fontSize: 20, borderRadius: "1em", border: "hidden", outline: "none" }} />

        <button type="submit" className="button">
          Search
        </button><br/>
        
        {result.map((value)=>
        {
          return(
            
            <img  key={value.id} className="image" src= {value.urls.small} /> 

          )
        })}
      </form>
      {/* <img src="https://images.unsplash.com/photo-1523898052899-241108586cf8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMTcxMTJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JwaG90byU3RHxlbnwwfHx8fDE2NDkzNDMzNzg&ixlib=rb-1.2.1&q=85"></img> */}
    </>
  );
}

  

