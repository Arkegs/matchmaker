import React from 'react';
import { Wrapper, Content } from './TeamList.styles';

export const TeamList = ( {header, color, team, setChangePlayer, changePlayer} ) => {
    const handleChangePlayer = (player) =>{
        setChangePlayer([...changePlayer, player]);
        console.log(this);
    }

    return(
        <Wrapper>
            <Content>
                <h2 className={color}>{header}</h2>
                {team.players.map(player => (
                    <p onClick={() => handleChangePlayer(player)} key={player.id}>{player.name}</p>
                ))}
                <div className='overall'>
                    Overall - ATK: {team.overall.ATK} DEF: {team.overall.DEF}
                    <br />
                    Posiciones - ATK: {team.ATK} DEF: {team.DEF} ARQ: {team.ARQ}
                </div>
            </Content>
        </Wrapper>
    )
};