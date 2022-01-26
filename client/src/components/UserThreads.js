import { StyledUserThread } from "./styles/Thread.styled";

export default function UserThreads({
    item:
    {
        subject,
        image,
        link
    }
}){
    return(
        <StyledUserThread>
            <div>
                <h1>{subject}</h1>
                {image}
                {link}
            </div>
        </StyledUserThread>
    )
}