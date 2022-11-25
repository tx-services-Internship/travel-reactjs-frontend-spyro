import { useState } from "react";
import { TextField, InputLabel, Typography } from "@mui/material";
import style from "../components/style//TravelInfo.module.css";

function TravelInfo(props: any) {
  let travelInfoData = {};

  const [form, setForm] = useState({});

  function handleForm(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    setForm({
      ...form,
      [key]: e.target.value,
    });
  }
  travelInfoData = {
    ...form,
  };

  props.onSaveTravelInfoData(travelInfoData);

  return (
    <div className={style.travelInfoContainer}>
      <Typography className={style.h1}>Travel Info</Typography>
      <div className={style.dataWraper}>
        <div className={style.flexColumn}>
          <InputLabel className={style.labelRight}>
            Business trip end time
          </InputLabel>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleForm(e, "BusinessTripTime")
            }
            className={style.inputContainer}
            type="time"
            id="outlined-basic"
            variant="outlined"
            color="success"
          />
          <InputLabel className={style.labelRight}>Departured Time</InputLabel>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleForm(e, "DeparturedTime")
            }
            className={style.inputContainer}
            type="time"
            id="outlined-basic"
            variant="outlined"
            color="success"
          />
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleForm(e, "Country")
            }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleForm(e, "BusinessTripDate")
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleForm(e, "Arrival")
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleForm(e, "DepartureDate")
              }
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
