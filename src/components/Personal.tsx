import { Fragment, useState } from "react";
import style from "../components/style//Personal.module.css";
import { TextField, Typography } from "@mui/material";

let personalData = {};

function Personal(props: any) {
  const [form, setForm] = useState({});

  function handleForm(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    setForm({
      ...form,
      [key]: e.target.value,
    });
  }
  personalData = {
    ...form,
  };
  props.onSavePersonalData(personalData);

  return (
    <Fragment>
      <div className={style.form}>
        <div className={style.personalContainer}>
          <Typography className={style.h1}>Personal Data</Typography>
          <TextField
            className={style.inputContainer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleForm(e, "nameSurname")
            }
            type="text"
            id="outlined-basic"
            label="Name and surname"
            variant="outlined"
            color="success"
          />
          <TextField
            className={style.inputContainer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleForm(e, "departmant")
            }
            type="text"
            id="outlined-basic"
            label="Department"
            variant="outlined"
            color="success"
          />
          <TextField
            className={style.inputContainer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleForm(e, "passport")
            }
            type="number"
            id="outlined-basic"
            label="Passport No"
            variant="outlined"
            color="success"
          />
          <TextField
            className={style.inputContainer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleForm(e, "id")
            }
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
