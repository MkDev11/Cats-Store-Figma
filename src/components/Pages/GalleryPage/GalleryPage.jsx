import React from "react";
import { Link } from "react-router-dom";
import inProcessImage from "../../../assets/images/in_process.png";

const GalleryPage = () => {
  return (
    <>
      <div className="section">
        <img className="section__image" src={inProcessImage} alt="cat" />
        <h1 className="section__title">GALLERY PAGE IN PROCESS</h1>
        <p className="section__link">
          return to home{" "}
          <span>
            <Link to="/react-spa">page</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default GalleryPage;
