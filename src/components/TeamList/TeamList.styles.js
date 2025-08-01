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
        background: radial-gradient(circle,rgba(5, 0, 0, 1) 8%, rgba(242, 2, 2, 1) 100%);
        color: white;
    }

    .blackTeam{
        background: radial-gradient(circle,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(230, 122, 122, 1) 28%, rgba(199, 38, 38, 1) 36%, rgba(199, 150, 36, 1) 44%, rgba(202, 199, 36, 1) 52%, rgba(128, 209, 36, 1) 60%, rgba(37, 175, 44, 1) 68%, rgba(43, 142, 142, 1) 76%, rgba(104, 104, 108, 1) 84%, rgba(178, 62, 130, 1) 92%);
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