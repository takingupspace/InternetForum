import { StyledHeader } from "./styles/Header.styled";
import { StyledContainer } from "./styles/Container.styled";
import { StyledNav } from "./styles/Nav.styled";
import { StyledButton } from "./styles/Button.styled";
import { StyledFlex } from "./styles/Flex.styled";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <StyledHeader>
            <StyledContainer>
                <StyledNav>
                <Link to="/"><StyledButton>Home</StyledButton></Link>
                <Link to="/About"><StyledButton>About</StyledButton></Link>
                <StyledButton>Login</StyledButton>
                </StyledNav>
                <StyledFlex>
                    <div>
                        <h1>
                            Bird's Up Daily Forum
                        </h1>
                        <p>
                            See the sub-forums below and subscribe to receive notifications
                        </p>
                    </div>
                </StyledFlex>
            </StyledContainer>
        </StyledHeader>
        </header>
    )
}