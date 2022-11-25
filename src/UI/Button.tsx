import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const FormButtons = styled(Button)(({ theme, size }) => ({
  position: "fixed",
  translate: "100rem 20rem",
  backgroundColor: "#00da91",
  width: "15rem",
  fontSize: "1.5rem",
  color: "black",
  minWidth: "10rem",
  padding: "1rem 1rem",
  borderRadius: "5rem",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#116f59",
    color: "#f0f0f0",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

function ButtonForm(props: any) {
  return (
    <FormButtons
      style={props.style}
      type={props.type}
      variant="contained"
      color="success"
    >
      {props.name}
    </FormButtons>
  );
}
export default ButtonForm;
