import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 50px;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 90%;
    }
`;

export const Content = styled.div`
    background-color: transparent;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    .redTeam{
        background: radial-gradient(circle,rgba(0, 0, 0, 1) 16%, rgba(217, 17, 17, 1) 79%);
        color: white;
    }

    .blackTeam{
        background: radial-gradient(circle,rgba(255, 255, 255, 1) 16%, rgba(127, 234, 250, 1) 79%);
        color: black;
    }

    h2{
        color: white;
        margin: 0;
        padding: 10px;
        border-bottom-left-radius: 50px 20px;
        border-bottom-right-radius: 50px 20px;
    }

    p{
        box-shadow: 0px 7px 20px 0px rgba(0,0,0,0.5);
        text-align: left;
        padding: 7px;
        margin: 0 auto;
        background-color: var(--lightGrey);
        transition: background-color 0.2s linear;
        cursor: pointer;
        
        :active{
            background-color: red;
        }
    }

    .overall{
        border-bottom-left-radius: 50px 20px;
        border-bottom-right-radius: 50px 20px;
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(55,55,55,1) 35%, rgba(103,103,103,1) 100%);
        color: white;
        padding: 5px;
        min-height: 20px;
    }

`;