import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breed/hound/images")
      .then((response) => {
        console.log(response);
        setData(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12">
          {data.map((img) => (
            <img src={img} alt="images" className="col-md-4 dogimage" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
