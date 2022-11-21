import { Fragment, useState } from "react";
import style from "./Personal.module.css";
import { TextField } from "@mui/material";

function Personal(props: any) {
  const [name, setName] = useState("");
  const [department, setDepartmant] = useState("");
  const [passport, setPasport] = useState("");
  const [id, setId] = useState("");

  const onNameHandler = (event: any) => {
    setName(event.target.value);
  };
  const onDepartmentHandler = (event: any) => {
    setDepartmant(event.target.value);
  };
  const onPassportHandler = (event: any) => {
    setPasport(event.target.value);
  };
  const onIdHandler = (event: any) => {
    setId(event.target.value);
  };

  const personalData = {
    nameSurname: name,
    department: department,
    passportNo: passport,
    idNo: id,
  };
  props.onSavePersonalData(personalData);

  // setName("");
  // setDepartmant("");
  // setId("");
  // setPasportInput("");

  return (
    <Fragment>
      <div className={style.form}>
        <div className={style.personalContainer}>
          <h1 className={style.h1}>Personal Data</h1>
          <TextField
            className={style.inputContainer}
            value={name}
            onChange={onNameHandler}
            type="text"
            id="outlined-basic"
            label="Name and surname"
            variant="outlined"
            color="success"
          />

          <TextField
            className={style.inputContainer}
            value={department}
            onChange={onDepartmentHandler}
            type="text"
            id="outlined-basic"
            label="Department"
            variant="outlined"
            color="success"
          />

          <TextField
            className={style.inputContainer}
            value={passport}
            onChange={onPassportHandler}
            type="number"
            id="outlined-basic"
            label="Passport No"
            variant="outlined"
            color="success"
          />

          <TextField
            className={style.inputContainer}
            value={id}
            onChange={onIdHandler}
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
