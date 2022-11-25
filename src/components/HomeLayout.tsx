import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const x = Math.floor((Math.random() * 5) + 1);
const imageString = "background" + x + ".webp";

const Flex = styled(Stack)({
  background: `url(${imageString})`,
  backgroundSize: "cover",
  height: "100vh",
  position: "relative"
});

type HomeLayoutProps = {
    children: React.ReactNode,
}

function HomeLayout(props:HomeLayoutProps){
    return(
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            {props.children}
        </Flex>
    );
}

export default HomeLayout;