import React from "react";<div className="card-header">
            Featured
        </div>


//create your first component
const Greetingcard = () => { 
    
    return (
    <div className="card" style={{backgroundColor:"lightGrey", fontFamily:"Timesnewroman",height:"20rem"}}>
        <div className="card-body">
            <h5 className="card-title" style={{fontSize: "45px"}}>A warm welcome</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Call to action!</a>
        </div>
  </div>
	);
};

export default Greetingcard;
