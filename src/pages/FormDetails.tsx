import React, { Fragment } from "react";
import style from "./FormDetails.module.css";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import DetailsInput from "../components/DetailsInput";

const StackForm = styled(Stack)(({ theme }) => ({
    margin: "0 6rem 0 2rem",
    color: "#00da91",
}));

function FormDetails() {

    return (
        <Fragment>
            <StackForm direction="row" justifyContent="space-between">
                <div>
                    <h1 className={style.heading}>Form Overview</h1>
                    <hr className={style.separator} style={{width: "35%", minWidth: "42rem"}}/>
        
                    {/* Employee section */}
                    <h2 className={style.subheading}>Employee</h2>
                    <Stack direction="column">
                        <DetailsInput labelText="Name and surname" value="Name and surname..."/>
                        <DetailsInput labelText="Department" value="Department name..."/>
                        <DetailsInput labelText="Passport No." value="Passport number..."/>
                        <DetailsInput labelText="ID No." value="ID number..."/>
                    </Stack>
                    <hr className={style.separator} style={{width: "50%", minWidth: "60rem"}}/>

                    {/* Destination section */}
                    <h2 className={style.subheading}>Destination</h2>
                    <Stack direction="row" gap="2rem">
                        <Stack direction="column">
                            <DetailsInput labelText="Country and place" value="Country and place..."/>
                            <DetailsInput labelText="Departure date" value="Department name..."/>
                            <DetailsInput isSplit={true} labelText="Departure time" value="10:38"/>
                            <DetailsInput labelText="Bussiness trip end date" value="Passport number..."/>
                            <DetailsInput isSplit={true} labelText="Bussiness trip end time" value="16:49"/>
                            <DetailsInput labelText="Arrival date" value="Arrival date..."/>
                            <DetailsInput labelText="Number of days" value="Number of days..."/>
                            <DetailsInput labelText="Type of accomodation" value="Type of accomodation..."/>
                            <DetailsInput labelText="Type of transport" value="Type of transport..."/>
                            <DetailsInput labelText="Vehicle registration number" value="Vehicle registration number..."/>
                        </Stack>

                        <DetailsInput isTextArea={true} labelText="Purpose of travel" value="Purpose of travel..."/>
                        
                    </Stack>
                    
                </div>
                <Stack direction="column" justifyContent="flex-start">
                    <DetailsInput isVertical={true} labelText="Submission date" value="Submission date..."/>
                    <DetailsInput isVertical={true} isEditable={true} labelText="FX Rate CHF/RSD" value=""/>
                </Stack>
            </StackForm>
            <div className={style.angledBackground}></div>
        </Fragment>
    );
}
  
export default FormDetails;
  