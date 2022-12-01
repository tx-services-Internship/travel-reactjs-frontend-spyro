import { useState } from "react";
import { TextField, InputLabel, Typography } from "@mui/material";
import style from "../components/style//TravelInfo.module.css";

function TravelInfo(props: any) {
  const [form, setForm] = useState({});

  function onHandlerChange(e: any) {
    setForm((previsuState) => {
      return {
        ...[previsuState],
        [e.target.name]: e.target.value,
      };
    });
    props.onSaveTravelInfoData({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={style.travelInfoContainer}>
      <Typography className={style.h1}>Travel Info</Typography>
      <div className={style.dataWraper}>
        <div className={style.flexColumn}>
          <InputLabel className={style.labelRight}>
            Business trip end time
          </InputLabel>
          <TextField
            onChange={onHandlerChange}
            name="Businesstripendtime"
            className={style.inputContainer}
            type="time"
            id="outlined-basic"
            variant="outlined"
            color="success"
          />
          <InputLabel className={style.labelRight}>Departured Time</InputLabel>
          <TextField
            onChange={onHandlerChange}
            name="departuredTime"
            className={style.inputContainer}
            type="time"
            id="outlined-basic"
            variant="outlined"
            color="success"
          />
          <TextField
            onChange={onHandlerChange}
            name="country"
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
              onChange={onHandlerChange}
              name="businessTripDate"
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
              onChange={onHandlerChange}
              name="arrival"
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
              onChange={onHandlerChange}
              name="departureDate"
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
