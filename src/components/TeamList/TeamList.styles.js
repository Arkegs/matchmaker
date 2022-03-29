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
        background: linear-gradient(0deg, rgba(61,0,0,1) 0%, rgba(108,5,5,1) 35%, rgba(213,0,0,1) 100%);
    }

    .blackTeam{
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(6,6,6,1) 35%, rgba(54,54,54,1) 100%);
        color: white;
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
        transition: background-color 0.3s linear;
    }


`;