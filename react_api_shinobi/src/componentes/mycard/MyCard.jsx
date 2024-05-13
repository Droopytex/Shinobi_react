import React from "react";

const MyCard = ({ date, title, type, extra }) => {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img
          src="https://www.culiacan.tecnm.mx/wp-content/uploads/2022/12/IMAGEN-CALENDARIO.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{date}</h5>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{type}</p>
          <p className="card-text">{extra}</p>
        </div>
      </div>
    </>
  );
};

export default MyCard;
