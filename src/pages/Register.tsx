import React, { Fragment, useState } from "react";
import ButtonComponent from "../components/Button";
import Stack from "@mui/material/Stack";
import style from "./Register.module.css";
import { MenuItem, Select, styled, TextField } from "@mui/material";


const StyledMUITextField = styled(TextField)(({ theme }) => ({
    width:"100%",
    marginTop: "1rem",
    "& .MuiInputBase-input": {
        color: "#f0f0f0",
        fontSize: "1.5rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "5rem",
        borderColor: "#00da91",
        background: "none"
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00da91",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00da91",
    },
}));

const StyledMUISelect = styled(Select)(({ theme }) => ({
    color: "white",
    fontSize: "1.5rem",
    margin: "1rem 0 0 1.5rem",
    padding: "1rem 0",
    "& .MuiSvgIcon-root": {
        color: "white",
    },
    "&::before": {
        borderColor: "#00da91",
    },
    "&::after": {
        borderColor: "#00da91",
    },
}));


function Register(){
    const [step, setStep] = useState(1);

    const [costCenter, setCostCenter] = useState(0);

    const [form, setForm] = useState({
        username: "",
        password: "",
        name: "",
        surname: "",
        email: "",
        costCenter: 0
    });

    function handleForm(event:React.ChangeEvent<HTMLInputElement>, key:string){
        // const updatedForm = {...form};

        // updatedForm[key as keyof typeof updatedForm] = event.target.value;
        // setForm(updatedForm);
        setForm({
            ...form,
            [key]: event.target.value
        });
    }

    function submitHandler(){
        console.log(form);
    }

    function increaseStep(){
        setStep(step + 1);
    }
    function decreaseStep(){
        setStep(step - 1);
    }

    return(
        <Fragment>
            <div className={style.registerModal}>
                <Stack direction="row" justifyContent="space-between" sx={{height: "100%"}}>
                    <div className={style.sideMenu}>
                        <img className={style.logo} src="tx-logo-transformed.webp" alt="TX Services logo" />
                        <div className={style.step} style={{
                            borderLeft: step === 1 ? "3px solid #00da91" : "",
                        }}>
                            <p>Login credentials</p>
                        </div>
                        <div className={style.step} style={{
                            borderLeft: step === 2 ? "3px solid #00da91" : "",
                        }}>
                            <p>Personal info</p>
                        </div>
                    </div>
                    <div className={style.formContainer}>
                        
                        {step === 1 ? <p className={style.description}>Please put your <span className={style.coloredText}>login credentials</span> in the fields below</p> : null}
                        {step === 2 ? <p className={style.description}>Now in this step you are required to put <span className={style.coloredText}>information about yourself</span> in the fields below</p> : null}
                        <form className={style.form}>
                            <div style={{display: step === 1 ? "block" : "none"}}>
                                <StyledMUITextField onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleForm(e, "username")} placeholder="Username"/>
                                <StyledMUITextField onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleForm(e, "password")} placeholder="Password"/>
                            </div>
                            <div style={{display: step === 2 ? "block" : "none"}}>
                                <StyledMUITextField onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleForm(e, "name")} placeholder="Name"/>
                                <StyledMUITextField onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleForm(e, "surname")} placeholder="Surname"/>
                                <StyledMUITextField onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleForm(e, "email")} placeholder="Email" inputProps={{type: "email"}}/>
                                <StyledMUISelect
                                    variant="standard"
                                    value={form.costCenter}
                                    //Not a good solution but works for now
                                    onChange={(event:any) => handleForm(event, "costCenter")}
                                >
                                    <MenuItem value={0}>Select a cost center...</MenuItem>
                                    <MenuItem value={1}>Cost center 1</MenuItem>
                                    <MenuItem value={2}>Cost center 2</MenuItem>
                                    <MenuItem value={3}>Cost center 3</MenuItem>
                                </StyledMUISelect>
                            </div>



                            {step === 1 ?
                                <ButtonComponent label="Next step" click={increaseStep}/>
                            : null}
                            {step === 2 ?
                                <Stack direction="row" gap="1rem">
                                    <ButtonComponent label="Previous step" click={decreaseStep}/>
                                    <ButtonComponent label="Submit" click={submitHandler}/>
                                </Stack>   
                            : null}
                        </form>
                    </div>
                </Stack>
            </div>
            <div className={style.overlapingAccent}>
                <h1 className={style.heading}>Welcome to the Registration Page.</h1>
            </div>
        </Fragment>
    );
}

export default Register;