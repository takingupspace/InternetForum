import { StyledBoard } from "./styles/Board.styled";

export default function Board({item:{
    id,
    title,
    description,
    image
}

}){
    return(
        <StyledBoard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <a href={`/discussion/${id}`}>
                <h1>{title}</h1>
                </a>
                <p>{description}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt='Discussion Board Img'/>
            </div>
        </StyledBoard>
    )
}