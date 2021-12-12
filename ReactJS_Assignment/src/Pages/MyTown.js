import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Weather from "./Weather";

function MyTown() {
  const ghy = window.location.origin + "/assets/ghy.jpg";
  let navigate = useNavigate();
  return (
    <div align="center">
      <img width="547" height="364" src={ghy} />
      <h2>
        My Town is Guwahati, India</h2>
        <h3>
        <p>Guwahati is the biggest city of the Indian state of Assam</p>
        <p>and also the largest metropolis in northeastern India.</p>
        </h3>
        <Weather />
    </div>
  );
}

export default MyTown;
