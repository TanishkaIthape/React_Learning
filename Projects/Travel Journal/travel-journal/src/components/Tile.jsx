import React from "react";


export default function Tile(props) {
  return (
    <>
    
      <div className="card mb-3" style={{ maxWidth: "840px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                {props.text}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                 <a href={props.link}> Click here </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
