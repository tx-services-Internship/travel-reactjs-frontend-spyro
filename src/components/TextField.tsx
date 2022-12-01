import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyledMUITextField = styled(TextField)(({ theme }) => ({
    width:"100%",
    minWidth: "15rem",
    "& .MuiInputBase-input": {
        color: "#f0f0f0",
        fontSize: "1.5rem",
        borderRadius: "5rem",
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
    [theme.breakpoints.down('md')]: {
        "& .MuiInputBase-input": {
            fontSize: "1.4rem",
            padding: "1rem 1.5rem",
        },
    },
    [theme.breakpoints.down('sm')]: {
        "& .MuiInputBase-input": {
            fontSize: "1.3rem",
            padding: "1rem 1.5rem",
        },
    },
}));

type TextFieldProps = {
  style?: {
    margin?: string,
  },
  inputProps?: {
    type?: string,
  },
  placeholder?: string,
  name: string,
  value: any,
  change?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

function TextFieldComponent(props:TextFieldProps){
    return <StyledMUITextField sx={{margin: props.style?.margin}} name={props.name} onChange={props.change} placeholder={props.placeholder} value={props.value} inputProps={props.inputProps}/>
}

export default TextFieldComponent;