import React from 'react';
import { GeneratorButton } from './Generator.styles';

export const Generator = ({ setTeamOne, setTeamTwo, selectedTeam, setChangePlayer }) =>{
    const handleTeam = () =>{
        setChangePlayer([]);
        const hashTable = [];
        const filteredPlayers = [];
        const randomizedTeam = [];
        selectedTeam.forEach((player) => {
            if(player.selected){
                filteredPlayers.push(player);
            }
        })
        for(let i = 0; i < filteredPlayers.length; i++){
            let randomNum = Math.floor(Math.random() * (filteredPlayers.length));
            while(hashTable.includes(randomNum)){
                randomNum = Math.floor(Math.random() * (filteredPlayers.length));
            }
            randomizedTeam.push(filteredPlayers[randomNum]);
            hashTable.push(randomNum);
        }
        const preTeam1 = {overall:{ATK: 0, DEF: 0, ARQ: 0}, ATK: 0, DEF: 0, ARQ: 0, players:[]};
        const preTeam2 = {overall:{ATK: 0, DEF: 0, ARQ: 0}, ATK: 0, DEF: 0, ARQ: 0, players:[]};
        randomizedTeam.forEach((player) => {
            if(player.selected){
                if(preTeam1.players.length <= preTeam2.players.length){
                    if(preTeam1.overall[player.position] + player.overall[player.position] <= preTeam2.overall[player.position] + 50 || preTeam1[player.position] < preTeam2[player.position] + 1){
                        preTeam1.overall.ATK += player.overall.ATK;
                        preTeam1.overall.DEF += player.overall.DEF;
                        preTeam1.overall.ARQ += player.overall.ARQ;
                        preTeam1[player.position] += 1;
                        preTeam1.players.push(player);
                    } else{
                        preTeam2.overall.ATK += player.overall.ATK;
                        preTeam2.overall.DEF += player.overall.DEF;
                        preTeam2.overall.ARQ += player.overall.ARQ;
                        preTeam2[player.position] += 1;
                        preTeam2.players.push(player);
                    }
                }
                else{
                    preTeam2.overall.ATK += player.overall.ATK;
                    preTeam2.overall.DEF += player.overall.DEF;
                    preTeam2.overall.ARQ += player.overall.ARQ;
                    preTeam2[player.position] += 1;
                    preTeam2.players.push(player);
                }
            }
        });
        setTeamOne(preTeam1);
        setTeamTwo(preTeam2);
    }

    return(
        <GeneratorButton onClick={handleTeam}>
            Match
        </GeneratorButton>
    )
};