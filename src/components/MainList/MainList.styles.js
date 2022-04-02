import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Content = styled.div`
    background-color: transparent;
    width: 50%;
    margin: 0 auto;
    @media screen and (max-width: 768px){
            width: 90%;
    }
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    h2{
        width: 100%;
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(1,127,152,1) 100%);
        color: white;
        margin: 0;
        padding: 10px;
        border-bottom-left-radius: 50px 20px;
        border-bottom-right-radius: 50px 20px;
    }
`

export const Player = styled.div`
    width:45%;
    p{
        box-shadow: 0px 7px 20px 0px rgba(0,0,0,0.5);
        text-align: left;
        padding: 7px;
        margin: 0 auto;
        background-color: var(--lightGrey);
        cursor: pointer;
        transition: background-color 0.3s linear;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow:hidden;

        :hover{
            background-color: var(--lightMainColor);
        }
    }
    .selectedPlayer{
        background-color: var(--mainColor);
    }
`;