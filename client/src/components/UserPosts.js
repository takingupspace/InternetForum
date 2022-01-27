import { StyledUserPosts } from "./styles/UserPosts.styled";

export default function UserPosts({
    item:
    {
        userThreadId,
        title,
        postAuthor,
    },
    id
}){
    return(
        <StyledUserPosts>
        <div>
            <a href={`/discussion/${id}/${userThreadId}`}>
            <h1>{title}</h1>
            </a>
            <div>
                <p><em>Original Poster:</em> <strong>{postAuthor}</strong></p>
            </div>
        </div>
        </StyledUserPosts>
    )
}