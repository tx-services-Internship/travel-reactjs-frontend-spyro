import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import style from "./Home.module.css";


const x = Math.floor((Math.random() * 5) + 1);
const imageString = "background" + x + ".webp";

const GoToFormButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00da91",
  fontSize: "1.5rem",
  color: "black",
  width:"16vw",
  minWidth: "10rem",
  padding: "1rem 2rem",
  borderRadius: "5rem",
  whiteSpace: "nowrap",
  '&:hover': {
    backgroundColor: "#116f59",
    color: "#f0f0f0",
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "0.75rem",
  },
}));

const Flex = styled(Stack)({
  background: `url(${imageString})`,
  backgroundSize: "cover",
  height: "100vh",
  position: "relative"
});

function Home() {

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <img
        className={style.image}
        src="tx-logo-transformed.webp"
        alt="TX Services Logo"
      />
      
      
      <h1 className={style.heading}>Travel Authorization Form</h1>
      <Link to="/form" style={{ textDecoration: "none" }}>
        <GoToFormButton variant="contained">Go to form</GoToFormButton>
      </Link>
        
    </Flex>
  );
}

export default Home;
