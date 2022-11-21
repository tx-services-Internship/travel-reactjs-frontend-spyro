import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import style from "./TripInfo.module.css";

function TripInfo(props: any) {
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDiner] = useState("");
  const [accomodation, setAccomodation] = useState("");
  const [transport, setTransport] = useState("");
  const [vehicles, setVehicles] = useState("");
  const [textArea, setTextArea] = useState("");

  function onBreakfastHandler(event: any) {
    setBreakfast(event.target.value);
  }
  function onLunchHandler(event: any) {
    setLunch(event.target.value);
  }
  function onDinnerHandler(event: any) {
    setDiner(event.target.value);
  }
  function onAccomodationHandler(event: any) {
    setAccomodation(event.target.value);
  }
  function onTransportHandler(event: any) {
    setTransport(event.target.value);
  }
  function onVehiclesHandler(event: any) {
    setVehicles(event.target.value);
  }
  function onTextAreaHandler(event: any) {
    setTextArea(event.target.value);
  }

  const tripInfoData = {
    breakfast: breakfast,
    lunch: lunch,
    dinner: dinner,
    accomodation: accomodation,
    transport: transport,
    vehiclesReg: vehicles,
    textArea: textArea,
  };
  props.onSaveTripInfoData(tripInfoData);
  return (
    <div className={style.tripInfoContainer}>
      <h1 className={style.h1}> Trip Info</h1>
      <div className={style.acomodation}>
        <TextField
          onChange={onAccomodationHandler}
          className={style.acomodationContainer}
          id="outlined-basic"
          label="Type of Accomodation"
          variant="outlined"
          color="success"
        />
      </div>
      <FormControl className={style.breakfast}>
        <InputLabel color="success">Number of Breakfast</InputLabel>
        <Select
          onChange={onBreakfastHandler}
          className={style.select}
          id="demo-simple-select"
          value={breakfast}
          color="success"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={style.lunch}>
        <InputLabel color="success">Number of Lunch</InputLabel>
        <Select
          className={style.select}
          onChange={onLunchHandler}
          value={lunch}
          color="success"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={style.dinerContainer}>
        <InputLabel color="success">Number of Diner</InputLabel>
        <Select
          className={style.select}
          onChange={onDinnerHandler}
          value={dinner}
          color="success"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>

      <div className={style.transportContainer}>
        <TextField
          onChange={onTransportHandler}
          className={style.transportInput}
          type="text"
          id="standard-basic"
          label="Type of transport"
          variant="outlined"
          color="success"
        />
      </div>
      <div className={style.VehicleContainer}>
        <TextField
          onChange={onVehiclesHandler}
          className={style.VehicleInput}
          type="number"
          id="standard-basic"
          label="Vehicle registration number"
          variant="outlined"
          color="success"
        />
      </div>
      <TextareaAutosize
        onChange={onTextAreaHandler}
        className={style.textArea}
        maxRows={4}
        aria-label="maximum height"
        placeholder="Purpose of Travel......."
        color="success"
      />
    </div>
  );
}

export default TripInfo;
