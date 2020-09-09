import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Search.css";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [dogImage, setDogImage] = useState({ status: "true" });

  const handleChange = (event) => {
    setSearchText(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${searchText}/images/random`)
      .then((response) => {
        console.log(response);
        console.log(searchText);
        setDogImage(response.data);
      })
      .catch((err) => {
        console.log(err);
        setDogImage({ status: "false" });
      });
  }, [searchText]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 inputfield">
          <input
            type="text"
            placeholder="Search Dog By Breed"
            value={searchText}
            onChange={handleChange}
            className="col-md-12"
          />
        </div>
      </div>
      <div className="row align-item-center justify-content-center">
        <div className="col-md-10 col-sm-10 col-lg-6 col-xs-12 main">
          <div className="card card-body p-2">
            {dogImage.status != "success" ? (
              <img
                src="https://www.ctrealtor.co.in/images/no_image.png"
                alt="Image Not Available"
                className="card-img-top"
              />
            ) : (
              <img
                src={dogImage.message}
                alt="Dog Image"
                className="card-img-top"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
