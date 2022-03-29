import React from 'react';
import { Wrapper, Content } from './TeamList.styles';

export const TeamList = ( {header, color, team} ) => {
    return(
        <Wrapper>
            <Content>
                <h2 className={color}>{header}</h2>
                {team.map(player => (
                    <p key={player.id}>{player.name}</p>
                ))}
            </Content>
        </Wrapper>
    )
};