import { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import style from "../components/style//TripInfo.module.css";

function TripInfo(props: any) {
  const [form, setForm] = useState({});

  function onHandlerChange(e: any) {
    setForm((previusState) => {
      return {
        ...previusState,
        [e.target.name]: e.target.value,
      };
    });
    props.onSaveTripInfoData({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={style.tripInfoContainer}>
      <Typography className={style.h1}> Trip Info</Typography>
      <div className={style.acomodation}>
        <TextField
          onChange={onHandlerChange}
          name="accomodation"
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
          onChange={onHandlerChange}
          name="breakfast"
          className={style.select}
          id="demo-simple-select"
          color="success"
          value={""}
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
          onChange={onHandlerChange}
          name="lunch"
          color="success"
          value={""}
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
          onChange={onHandlerChange}
          name="dinner"
          color="success"
          value={""}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>

      <div className={style.transportContainer}>
        <TextField
          onChange={onHandlerChange}
          name="transport"
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
          onChange={onHandlerChange}
          name="registration"
          className={style.VehicleInput}
          type="number"
          id="standard-basic"
          label="Vehicle registration number"
          variant="outlined"
          color="success"
        />
      </div>
      <TextareaAutosize
        onChange={onHandlerChange}
        name="purposeof"
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
