import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card cardscontainer">
      <img className="card-img-top" src={item.urlToImage} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Aurthor :- {item.author}</li>
        <li className="list-group-item">Published At :- {item.publishedAt}</li>
        <li className="list-group-item">Source :- {item.source.name}</li>
      </ul>
      <div className="card-body">
        <Link to={item.url} className="card-link">
          Reference link
        </Link>
      </div>
    </div>
  );
};

export default Card;
