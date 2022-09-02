import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #333A58;
    background-color: #3B3F5D;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        background-color: #50556E;
    }

    &.op {
        background-color: #50556E;
        color: #FF3764;
    }

    &.equanls {
        background-color: #FF3764;
    }

`