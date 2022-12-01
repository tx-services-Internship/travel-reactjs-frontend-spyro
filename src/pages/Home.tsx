import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/Button";
import HomeLayout from "../components/HomeLayout";
import style from "./Home.module.css";

function Home() {

  const [isLoggedIn, setIsLoggenIn] = useState(false);

  return (
    <HomeLayout>
      <img
        className={style.image}
        src="tx-logo-transformed.webp"
        alt="TX Services Logo"
      />

      {isLoggedIn ? 
        <div className={style.userAvatar}>
          <FontAwesomeIcon className="fa-2x" icon="user" />
        </div>
      : 
        null
      }
      
      <h1 className={style.heading}>Travel Authorization Form</h1>
      <Link to="/form" style={{ textDecoration: "none" }}>
        {isLoggedIn ? 
          <ButtonComponent label="Go to form"/>
        : 
          <div>
            <ButtonComponent label="Log In"/>
            <ButtonComponent label="Register"/>
          </div>
        }
        
      </Link>
        
    </HomeLayout>
  );
}

export default Home;
