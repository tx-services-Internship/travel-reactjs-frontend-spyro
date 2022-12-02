import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/Button";
import HomeLayout from "../components/HomeLayout";
import style from "./Home.module.css";
import axios from "axios";

function Home() {

  async function getData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response.data);
  }

  async function handleAdd(){
    const newPost = {
      title: "a",
      body: "b"
    };
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
    console.log(response);
  }

  useEffect(()=>{
    getData();
  },[]);

  const [isLoggedIn, setIsLoggenIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn") as string) || false
  );

  const [isUserMenuShown, setIsUserMenuShown] = useState(false);

  function handleLogin(){
    localStorage.setItem("isLoggedIn", JSON.stringify(!isLoggedIn));
    setIsLoggenIn((prevState:boolean)=>{
      return !prevState;
    });
  }

  function handleUserMenuShow(event:React.MouseEvent<HTMLElement>){
    event.stopPropagation();
    setIsUserMenuShown((prevState)=>{
      return !prevState;
    });
  }

  function handleUserMenuHide(){
    if(isUserMenuShown) 
      setIsUserMenuShown((prevState)=>{
        return !prevState;
      });
  }

  return (
    <HomeLayout click={handleUserMenuHide}>
      <img
        className={style.image}
        src="tx-logo-transformed.webp"
        alt="TX Services Logo"
      />

      {/* <ButtonComponent click={handleAdd} label="AXIOS TEST: Create a post"/> */}

      {isLoggedIn ? 
        <div className={style.userWrapper}>
          <div onClick={handleUserMenuShow} className={style.userAvatar}>
            <FontAwesomeIcon className="fa-2x" icon="user" />
          </div>
          {isUserMenuShown ? 
            <div onClick={(event:React.MouseEvent<HTMLElement>)=>{event.stopPropagation()}} className={style.userAvatarMenu}>
              <ButtonComponent width="130%" boxShadow="none" label="View Profile"/>
              <ButtonComponent click={handleLogin} width="130%" boxShadow="none" label="Logout"/>
            </div>
          : 
            null
          }
        </div>
      : 
        null
      }
      
      
      

      <h1 className={style.heading}>Travel Authorization Form</h1>
      
        {isLoggedIn ? 
          <Link to="/form" style={{ textDecoration: "none" }}>
            <ButtonComponent label="Go to form"/>
          </Link>
        : 
          <div>
            {/* <Link to="/login" style={{ textDecoration: "none" }}> */}
              <ButtonComponent click={handleLogin} label="Log In"/>
            {/* </Link> */}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <ButtonComponent margin="0 0 0 1rem" label="Register"/>
            </Link>
          </div>
        }  
      
        
    </HomeLayout>
  );
}

export default Home;
