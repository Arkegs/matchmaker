import styled from 'styled-components';

export const GeneratorButton = styled.button`
    cursor: pointer;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 1.3em;
    margin: 30px auto;
    background: linear-gradient(0deg, rgba(8,48,0,1) 0%, rgba(2,111,0,1) 35%, rgba(33,192,0,1) 100%);
    transition: all 1s linear;

    :hover{
        background: linear-gradient(0deg, rgba(3,19,0,1) 0%, rgba(1,53,0,1) 35%, rgba(20,111,1,1) 100%);
    }

    :active{
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(1,32,1,1) 35%, rgba(14,76,1,1) 100%);
    }
`;