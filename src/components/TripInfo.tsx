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

  let tripInfoData = {};

  function handlerForm(e: any, key: string) {
    setForm({
      ...form,
      [key]: e.target.value,
    });
  }

  tripInfoData = {
    ...form,
  };
  props.onSaveTripInfoData(tripInfoData);

  return (
    <div className={style.tripInfoContainer}>
      <Typography className={style.h1}> Trip Info</Typography>
      <div className={style.acomodation}>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlerForm(e, "accomodation")
          }
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
          onChange={(e: any) => handlerForm(e, "breakfast")}
          className={style.select}
          id="demo-simple-select"
          color="success"
          value={form}
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
          onChange={(e: any) => handlerForm(e, "lunch")}
          color="success"
          value={form}
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
          onChange={(e: any) => handlerForm(e, "diner")}
          color="success"
          value={form}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>

      <div className={style.transportContainer}>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlerForm(e, "transport")
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlerForm(e, "registration")
          }
          className={style.VehicleInput}
          type="number"
          id="standard-basic"
          label="Vehicle registration number"
          variant="outlined"
          color="success"
        />
      </div>
      <TextareaAutosize
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handlerForm(e, "purposeof")
        }
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
