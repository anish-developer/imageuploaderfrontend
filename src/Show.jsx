import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Document, Page } from 'react-pdf';
import {Link} from 'react-router-dom'


function Show() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  },[]);
  return (
    <div className="App">
      <h1>Image uploading react</h1>
      {data.map((singleData) => {
       return(
        <>
        <p>{singleData.name}</p>
        <Link to={`edit/${singleData._id}`}>edit</Link>
        </>
       )
      })}
    </div>

  );
}

export default Show;