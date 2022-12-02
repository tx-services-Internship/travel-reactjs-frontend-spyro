import React, { Fragment, useState } from "react";
import TextFieldComponent from "../components/TextField";
import ButtonComponent from "../components/Button";
import style from "./Register.module.css";
import { MenuItem, Select, styled, Stack } from "@mui/material";
import { Link } from "react-router-dom";

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
    [theme.breakpoints.down('md')]: {
        fontSize: "1.3rem",
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.2rem",
    },
    
}));

const StyledMUIStackRegisterModal = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        justifyContent: "flex-start",
    },
}));


function Register(){

    const [step, setStep] = useState(1);

    const [formData, setForm] = useState({});

    function handleForm(event:React.ChangeEvent<HTMLInputElement>){
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setForm((prevState) => {
            return {
                ...prevState,
                [fieldName]: fieldValue
            }
        });
    }

    function increaseStep(){
        setStep(prevStep=>prevStep + 1);
    }

    function decreaseStep(){
        setStep(prevStep=>prevStep - 1);
    }

    function submitHandler(){
        console.log(formData);
    }

    return(
        <Fragment>
            <div className={style.registerModal}>
                <StyledMUIStackRegisterModal direction="row" justifyContent="space-between" sx={{height: "100%"}}>
                    <div className={style.sideMenu}>
                        
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <img className={style.logo} src="tx-logo-transformed.webp" alt="TX Services logo" />
                        </Link>
                        
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
                                <TextFieldComponent name="username" style={{margin: "1rem 0 0 0"}} placeholder="Username" change={handleForm} value={Object.getOwnPropertyNames(formData).includes("username") ? Object.values(formData)[Object.getOwnPropertyNames(formData).indexOf("username")] : ""}/>
                                <TextFieldComponent name="password" style={{margin: "1rem 0 0 0"}} placeholder="Password" inputProps={{type: "password"}} change={handleForm} value={Object.getOwnPropertyNames(formData).includes("password") ? Object.values(formData)[Object.getOwnPropertyNames(formData).indexOf("password")] : ""}/>
                            </div>
                            <div style={{display: step === 2 ? "block" : "none"}}>
                                <TextFieldComponent name="name" style={{margin: "1rem 0 0 0"}} placeholder="Name" change={handleForm} value={Object.getOwnPropertyNames(formData).includes("name") ? Object.values(formData)[Object.getOwnPropertyNames(formData).indexOf("name")] : ""}/>
                                <TextFieldComponent name="surname" style={{margin: "1rem 0 0 0"}} placeholder="Surname" change={handleForm} value={Object.getOwnPropertyNames(formData).includes("surname") ? Object.values(formData)[Object.getOwnPropertyNames(formData).indexOf("surname")] : ""}/>
                                <TextFieldComponent name="email" style={{margin: "1rem 0 0 0"}} placeholder="Email" change={handleForm} value={Object.getOwnPropertyNames(formData).includes("email") ? Object.values(formData)[Object.getOwnPropertyNames(formData).indexOf("email")] : ""}/>
                                <StyledMUISelect
                                    variant="standard"
                                    name="costCenter"
                                    value={Object.getOwnPropertyNames(formData).includes("costCenter") ? Object.values(formData)[Object.getOwnPropertyNames(formData).indexOf("costCenter")] : 0}
                                    //Not a good solution but works for now
                                    onChange={(event:any) => handleForm(event)}
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
                </StyledMUIStackRegisterModal>
            </div>
            <div className={style.overlapingAccent}>
                <h1 className={style.heading}>Welcome to the Registration Page.</h1>
            </div>
        </Fragment>
    );
}

export default Register;