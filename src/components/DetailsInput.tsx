import React from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

const DetailsFormInput = styled(TextField)(({ theme }) => ({
    marginLeft: "1rem",
    width: "25rem",
    '&:hover .MuiOutlinedInput-notchedOutline':{
        borderColor: "#00da91",
    },
    '& .MuiInputBase-input':{
        color: "#f0f0f0",
        fontSize: "1.5rem",
        padding: "0.5rem 1.3rem",
    },
    '& .MuiOutlinedInput-notchedOutline':{
        borderRadius: "5rem",
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline':{
        borderColor: "#00da91",
    },
}));

const DetailsFormInputEditable = styled(TextField)(({ theme }) => ({
    width: "25rem",
    
    '&:hover .MuiOutlinedInput-notchedOutline':{
        borderColor: "#116f59",
    },
    '& .MuiInputBase-input':{
        color: "#111",
        fontSize: "1.5rem",
        padding: "0.5rem 1.3rem",
        borderRadius: "5rem",
        backgroundColor: "#00da91",
    },
    '& .MuiOutlinedInput-notchedOutline':{
        borderRadius: "5rem",
        
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline':{
        borderColor: "#116f59",
    },
}));

const DetailsFormTextarea = styled(TextField)(({ theme }) => ({
    width: "30rem",
    '& .MuiInputBase-input':{
        color: "white",
        fontSize: "1.5rem",
        padding: "0.5rem 1.3rem",
    },
    '&:hover .MuiOutlinedInput-notchedOutline':{
        borderColor: "#00da91",
    },
}));

const DetailsFormLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: "1.7rem",
    color: "#00da91",
    width: "25ch",
}));

function DetailsInput(props:any) {

    if(props.isVertical && props.isEditable){
        return(
            <Stack direction="column" sx={{marginTop: "1rem"}}>
                <DetailsFormLabel>{props.labelText}</DetailsFormLabel>
                <DetailsFormInputEditable
                    defaultValue={props.value}
                    sx={{margin: "0.5rem 0 0 0"}}
                    />
            </Stack>
        );
    }else if(props.isVertical){
        return(
            <Stack direction="column" sx={{marginTop: "12rem"}}>
                <DetailsFormLabel>{props.labelText}</DetailsFormLabel>
                <DetailsFormInput
                    defaultValue={props.value}
                    sx={{margin: "0.5rem 0 0 0"}}
                    InputProps={{
                        readOnly: true,
                    }}
                    />
            </Stack>
        );
    }else if(props.isTextArea){
        return(
            <Stack direction="column">
                <DetailsFormLabel>{props.labelText}</DetailsFormLabel>
                <DetailsFormTextarea
                    multiline
                    rows={4}
                    defaultValue={props.value}
                    InputProps={{
                        readOnly: true,
                    }}
                    />
            </Stack>
        );
    }else if(props.isSplit){
        return (
            <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{marginBottom: "5px"}}>
            <DetailsFormLabel>{props.labelText}</DetailsFormLabel>

            <DetailsFormInput
                defaultValue={props.value.split(":")[0]}
                sx={{width: "9.6rem"}}
                InputProps={{
                    readOnly: true,
                }}
                />
            <DetailsFormLabel sx={{width: "1ch", marginLeft: "0.35rem"}}>h</DetailsFormLabel>

            <DetailsFormInput
                defaultValue={props.value.split(":")[1]}
                sx={{width: "9.6rem"}}
                InputProps={{
                    readOnly: true,
                }}
                />
            <DetailsFormLabel sx={{width: "3ch", marginLeft: "0.35rem"}}>min</DetailsFormLabel>
            </Stack>
        );
    }else{
        return (
            <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{marginBottom: "5px"}}>
                <DetailsFormLabel>{props.labelText}</DetailsFormLabel>
                <DetailsFormInput
                    defaultValue={props.value}
                    InputProps={{
                        readOnly: true,
                    }}
                    />
            </Stack>
        );
    }

    
}
  
export default DetailsInput;