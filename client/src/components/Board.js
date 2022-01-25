import { StyledBoard } from "./styles/Board.styled";

export default function Board({item:{
    id,
    title,
    description,
    image
}

}){
    return(
        <StyledBoard layout={id == 2 && 'row-reverse'}>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt='Discussion Board Img'/>
            </div>
        </StyledBoard>
    )
}