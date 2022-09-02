import { ButtonContainer } from './styles'

const Button = ({label, onClick, styleOp}) => {
    return (
        <ButtonContainer className={styleOp} onClick={onClick}>
            {label}
        </ButtonContainer>
        
    );
}

export default Button;