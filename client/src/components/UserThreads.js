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
                <div>
                {image}
                </div>
                <div>
                {link}
                </div>
            </div>
        </StyledUserThread>
    )
}