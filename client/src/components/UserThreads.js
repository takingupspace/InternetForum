import { StyledBoard } from "./styles/Board.styled";
import { StyledButton } from "./styles/Button.styled";
import { StyledUserThread } from "./styles/Thread.styled";
import TextArea from "./TextArea";

export default function UserThreads({
    item:
    {
        subject,
        image,
        link
    }
}){
    return(
        <>
        <StyledUserThread>
            <div>
                <h1>{subject}</h1>
                <div>
                {image}
                </div>
                <div>
                {link}
                </div>
            </div>
        </StyledUserThread>
        <div>
        <TextArea>
        </TextArea>
        <StyledButton>Submit Post</StyledButton>
        </div>
        </>
    )
}