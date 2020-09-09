import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breed/hound/images")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {data.map((img) => (
            <span className="thumbnail">
              <img src={img} alt="images" className="col-md-4 col-sm-6 item" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
