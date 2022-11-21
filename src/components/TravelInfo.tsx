import React, { useState } from "react";
import { TextField, InputLabel } from "@mui/material";
import style from "./TravelInfo.module.css";

function TravelInfo(props: any) {
  const [businessTime, setBusinessTime] = useState("");
  const [departuredTime, setDeparturedTime] = useState("");
  const [businessDate, setBusinessDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [country, setCountry] = useState("");
  const [departedDate, setDepartedDate] = useState("");

  function onDeparturedTimeHandler(event: any) {
    setDeparturedTime(event.target.value);
  }
  function onBusinesTimeHandler(event: any) {
    setBusinessTime(event.target.value);
  }
  function onBusinessDateHandler(event: any) {
    setBusinessDate(event.target.value);
  }
  function onArrivalDateHandler(event: any) {
    setArrivalDate(event.target.value);
  }
  function onCountryHandler(event: any) {
    setCountry(event.target.value);
  }
  function onDepartureDateHandler(event: any) {
    setDepartedDate(event.target.value);
  }

  const travelInfoData = {
    businessTripTime: businessTime,
    departuredTime: departuredTime,
    businessTripDate: businessDate,
    arrivalDate: arrivalDate,
    countryPlace: country,
    departedDate: departedDate,
  };

  props.onSaveTravelInfoData(travelInfoData);

  return (
    <div className={style.travelInfoContainer}>
      <h1 className={style.h1}>Travel Info</h1>
      <div className={style.dataWraper}>
        <div className={style.flexColumn}>
          <InputLabel className={style.labelRight}>
            Business trip end time
          </InputLabel>
          <TextField
            onChange={onBusinesTimeHandler}
            className={style.inputContainer}
            type="time"
            id="outlined-basic"
            variant="outlined"
            color="success"
          />
          <InputLabel className={style.labelRight}>Departured Time</InputLabel>
          <TextField
            onChange={onDeparturedTimeHandler}
            className={style.inputContainer}
            type="time"
            id="outlined-basic"
            variant="outlined"
            color="success"
          />
          <TextField
            onChange={onCountryHandler}
            className={style.inputContainer}
            type="text"
            id="outlined-basic"
            variant="outlined"
            label="Country and place"
            color="success"
          />
        </div>
        <div className={style.flexColumnRight}>
          <div className={style.businessContainer}>
            <InputLabel className={style.label}>
              Business trip end date
            </InputLabel>
            <TextField
              onChange={onBusinessDateHandler}
              className={style.inputContainer}
              type="date"
              id="outlined-basic"
              variant="outlined"
              color="success"
            />
          </div>
          <div className={style.arrivalDate}>
            <InputLabel className={style.label}> Arrival date </InputLabel>
            <TextField
              onChange={onArrivalDateHandler}
              className={style.inputContainer}
              type="date"
              id="outlined-basic"
              variant="outlined"
              color="success"
            />
          </div>
          <div>
            <InputLabel className={style.label}>Departure date</InputLabel>
            <TextField
              onChange={onDepartureDateHandler}
              className={style.inputContainer}
              type="date"
              id="outlined-basic"
              variant="outlined"
              color="success"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelInfo;
