import React from "react";
import PropTypes from 'prop-types';




//create your first component
const Shopcards = (props) =>
{
    return (
        <div className="card text-center mt-3" style={{backgroundColor:`${props.background}`}}>
            <img src="https://media.istockphoto.com/id/1063375198/vector/abstract-gray-gradient-color-background.jpg?s=612x612&w=0&k=20&c=fvqiWFmN4Jw_uUAnbJcOWN4ULigrS6ZGCHs72eEY88Q=" className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            </div>
            <div className="card-footer text-body-secondary">
                <a href={props.url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
Shopcards.propTypes = {
    title: PropTypes.string,
    text:PropTypes.string,
    url: PropTypes.string,
    bgcolor: PropTypes.string,

  };

export default Shopcards;