import { Fragment, useState } from "react";
import style from "../components/style//Personal.module.css";
import { TextField, Typography } from "@mui/material";

function Personal(props: any) {
  const [form, setForm] = useState({});

  function onHandlerChange(e: any) {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    props.onSavePersonalData({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Fragment>
      <div className={style.form}>
        <div className={style.personalContainer}>
          <Typography className={style.h1}>Personal Data</Typography>
          <TextField
            className={style.inputContainer}
            onChange={onHandlerChange}
            name="nameandsurname"
            type="text"
            id="outlined-basic"
            label="Name and surname"
            variant="outlined"
            color="success"
          />
          <TextField
            className={style.inputContainer}
            onChange={onHandlerChange}
            type="text"
            id="outlined-basic"
            label="Department"
            variant="outlined"
            color="success"
            name="department"
          />
          <TextField
            className={style.inputContainer}
            onChange={onHandlerChange}
            name="passport"
            type="number"
            id="outlined-basic"
            label="Passport No"
            variant="outlined"
            color="success"
          />
          <TextField
            className={style.inputContainer}
            onChange={onHandlerChange}
            name="IDNo"
            type="number"
            id="outlined-basic"
            label="ID No"
            variant="outlined"
            color="success"
          />
        </div>
      </div>
    </Fragment>
  );
}
export default Personal;
