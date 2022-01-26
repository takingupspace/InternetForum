import { StyledUserPosts } from "./styles/UserPosts.styled";

export default function UserPosts({
    item:
    {
        userThreadId,
        title,
        subject,
        image,
        link
    }
}){
    return(
        <StyledUserPosts>
        <div>
            <h1>{title}</h1>
            <div>
                <p>{subject}</p>
            </div>
        </div>
        </StyledUserPosts>
    )
}