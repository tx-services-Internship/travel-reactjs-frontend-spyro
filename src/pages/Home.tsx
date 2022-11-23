import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import HomeLayout from "../components/HomeLayout";
import style from "./Home.module.css";

function Home() {

  return (
    <HomeLayout>
      <img
        className={style.image}
        src="tx-logo-transformed.webp"
        alt="TX Services Logo"
      />
      
      
      <h1 className={style.heading}>Travel Authorization Form</h1>
      <Link to="/form" style={{ textDecoration: "none" }}>
        <HomeButton/>
      </Link>
        
    </HomeLayout>
  );
}

export default Home;
