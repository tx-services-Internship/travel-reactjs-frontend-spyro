import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledMUIButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00da91",
  fontSize: "1.5rem",
  color: "black",
  width:"16vw",
  minWidth: "10rem",
  padding: "1rem 2rem",
  borderRadius: "5rem",
  whiteSpace: "nowrap",
  '&:hover': {
    backgroundColor: "#116f59",
    color: "#f0f0f0",
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "0.75rem",
  },
}));

type HomeButtonProps = {
  style?: {
    margin?: string,
  },
  label: string,
}

function HomeButton(props:HomeButtonProps){
    return <StyledMUIButton variant="contained">{props.label}</StyledMUIButton>
}

export default HomeButton;