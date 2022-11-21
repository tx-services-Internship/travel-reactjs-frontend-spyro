import style from "./Form.module.css";
import Personal from "../components/Personal";
import React, { Fragment } from "react";
import { Button } from "@mui/material";
import TravelInfo from "../components/TravelInfo";
import TripInfo from "../components/TripInfo";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const FormButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  right: "-30px",
  top: "50%",
  backgroundColor: "#00da91",
  fontSize: "1.5rem",
  color: "black",
  width: "14vw",
  minWidth: "10rem",
  padding: "1rem 1rem",
  borderRadius: "5rem",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#116f59",
    color: "#f0f0f0",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));
const HomeButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  right: "-30px",
  top: "42%",
  backgroundColor: "#00da91",
  fontSize: "1rem",
  color: "black",
  width: "12vw",
  minWidth: "10rem",
  padding: "1rem 1rem",
  borderRadius: "5rem",
  whiteSpace: "nowrap",
  "&:hover": { backgroundColor: "#116f59", color: "#f0f0f0" },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));
const ResetButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  right: "-30px",
  top: "35%",
  backgroundColor: "#00da91",
  fontSize: "1rem",
  color: "black",
  width: "12vw",
  minWidth: "10rem",
  padding: "1rem 1rem",
  borderRadius: "5rem",
  whiteSpace: "nowrap",
  "&:hover": { backgroundColor: "#116f59", color: "#f0f0f0" },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));
function Form() {
  let personalData = {};
  let travelInfoData = {};
  let tripInfoData = {};

  function onSubmitHandler(event: any) {
    event.preventDefault();
    const formData = {
      ...personalData,
      ...travelInfoData,
      ...tripInfoData,
    };
    console.log(formData);
  }

  function onSavePersonal(enteredData: any) {
    personalData = {
      ...enteredData,
    };
  }
  function onSaveTravelInfo(travelInfo: any) {
    travelInfoData = {
      ...travelInfo,
    };
  }
  function onSaveTripInfo(tripInfo: any) {
    tripInfoData = {
      ...tripInfo,
      id: Math.random().toString(),
    };
  }

  return (
    <Fragment>
      <div className={style.divLogo}>
        <img className={style.logo} src="tx-logo-transformed.webp" alt="TX" />
      </div>
      <form className={style.form} onSubmit={onSubmitHandler}>
        <Personal onSavePersonalData={onSavePersonal} />
        <TravelInfo onSaveTravelInfoData={onSaveTravelInfo} />
        <TripInfo onSaveTripInfoData={onSaveTripInfo} />
        <FormButton
          className={style.button}
          type="submit"
          variant="contained"
          color="success"
        >
          Submit
        </FormButton>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HomeButton
            className={style.button}
            variant="contained"
            color="success"
          >
            Back to Home
          </HomeButton>
        </Link>

        <ResetButton
          className={style.button}
          variant="contained"
          color="success"
        >
          Reset Form
        </ResetButton>
      </form>
    </Fragment>
  );
}
export default Form;
