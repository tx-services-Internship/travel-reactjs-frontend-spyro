import { Fragment, useState } from "react";
import Stack from "@mui/material/Stack";
import style from "./Register.module.css";
import { styled, TextField } from "@mui/material";


const StyledMUITextField = styled(TextField)(({ theme }) => ({
    width:"100%",
    marginTop: "1rem",
    "& .MuiInputBase-input": {
        color: "#f0f0f0",
        fontSize: "1.5rem",
    },
    // "& .MuiInputBase-input::placeholder": {
    //     color: "#f0f0f0",
    // },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "5rem",
        borderColor: "#00da91",
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00da91",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00da91",
    },
}));

function RegisterPage(){
    const [step, setStep] = useState(2);

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
                            {step === 1 ?
                                <div>
                                    <StyledMUITextField placeholder="Username"/>
                                    <StyledMUITextField placeholder="Password"/>
                                </div>
                            : null}
                            {step === 2 ?
                                <div>
                                    <StyledMUITextField placeholder="Name"/>
                                    <StyledMUITextField placeholder="Surname"/>
                                    <StyledMUITextField placeholder="Email" inputProps={{type: "email"}}/>
                                </div>
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

export default RegisterPage;