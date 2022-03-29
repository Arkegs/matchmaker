import React from 'react';
import { GeneratorButton } from './Generator.styles';

export const Generator = ({ setTeamOne, setTeamTwo, selectedTeam, setError }) =>{
    const handleTeam = () =>{
        console.log(selectedTeam);
        if(selectedTeam.length < 8){
            setError(true);
            return;
        }
        const preTeam1 = {rank: 0, ATK: 0, DEF: 0, ARQ: 0, players:[]};
        const preTeam2 = {rank: 0, ATK: 0, DEF: 0, ARQ: 0, players:[]};
        selectedTeam.forEach((player) => {
            if(player.selected){
                if((preTeam1[player.position] < preTeam2[player.position] + 50 && preTeam1.players.length <= preTeam2.players.length) || preTeam1.players.length + 1 <= preTeam2.players.length){
                    preTeam1[player.position] += player.rank;
                    preTeam1.players.push(player);
                    
                } else{
                    preTeam2[player.position] += player.rank;
                    preTeam2.players.push(player);
                }
            }
        });
        setTeamOne(preTeam1.players);
        setTeamTwo(preTeam2.players);
        setError(false);
        console.log(`Team 1 ATK: ${preTeam1.ATK} DEF: ${preTeam1.DEF} ARQ: ${preTeam1.ARQ}` );
        console.log(`Team 2 ATK: ${preTeam2.ATK} DEF: ${preTeam2.DEF} ARQ: ${preTeam2.ARQ}`);
    }

    return(
        <GeneratorButton onClick={handleTeam}>
            Match
        </GeneratorButton>
    )
};