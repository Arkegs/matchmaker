import React from 'react';
import { Wrapper, Player, Content } from './MainList.styles';

export const MainList = ( {database, setSelectedTeam} ) => {

    const handlePlayer = (playerId) =>{
        let playerList = database.map((player) => {
            if (player.id === playerId){
                player.selected = !player.selected;
            }
            return player;
        })
        setSelectedTeam(playerList);
    };

    return(
        <Wrapper>
            <Content>
                <h2>Jugadores</h2>
                {database.map(player => (
                    <Player 
                        key={player.id} 
                        onClick={() => handlePlayer(player.id)}
                    >
                        <p className={player.selected ? "selectedPlayer" : ""} >{player.name}</p>
                    </Player>
                ))}
            </Content>
        </Wrapper>
    )
};

