import React, { useState, useEffect } from 'react';
import { database } from '../playerdata';
import { MainList } from './MainList';
import { TeamList } from './TeamList';
import { Generator } from './Generator';

console.log(database);

export const Home = () => {
    const teamInitialState = {overall:{ATK: 0, DEF: 0, ARQ: 0}, ATK: 0, DEF: 0, ARQ: 0, players:[]}
    const [teamOne, setTeamOne] = useState(teamInitialState);
    const [teamTwo, setTeamTwo] = useState(teamInitialState);
    const [selectedTeam, setSelectedTeam] = useState(database);
    const [changePlayer, setChangePlayer] = useState([]);

    useEffect(() => {
        if(changePlayer.length === 2){

            const teamOneAux = teamOne;
            const teamTwoAux = teamTwo;
            teamOneAux.overall = {ATK: 0, DEF: 0, ARQ: 0};
            teamOneAux.ATK = 0;
            teamOneAux.DEF = 0;
            teamOneAux.ARQ = 0;
            teamTwoAux.overall = {ATK: 0, DEF: 0, ARQ: 0};
            teamTwoAux.ATK = 0;
            teamTwoAux.DEF = 0;
            teamTwoAux.ARQ = 0;

            teamOne.players.forEach((item, index) => {
                if(item.id === changePlayer[0].id){
                    teamOneAux.players[index] = changePlayer[1];
                }
                if(item.id === changePlayer[1].id){
                    teamOneAux.players[index] = changePlayer[0];
                }
                teamOneAux.overall = {
                    ATK: teamOneAux.overall.ATK + teamOneAux.players[index].overall.ATK, 
                    DEF: teamOneAux.overall.DEF + teamOneAux.players[index].overall.DEF,
                    ARQ: teamOneAux.overall.ARQ + teamOneAux.players[index].overall.ARQ,
                }
                teamOneAux[teamOneAux.players[index].position] += 1;
            });

            teamTwo.players.forEach((item, index) => {
                if(item.id === changePlayer[0].id){
                    teamTwoAux.players[index] = changePlayer[1];
                }
                if(item.id === changePlayer[1].id){
                    teamTwoAux.players[index] = changePlayer[0];
                }
                teamTwoAux.overall = {
                    ATK: teamTwoAux.overall.ATK + teamTwoAux.players[index].overall.ATK, 
                    DEF: teamTwoAux.overall.DEF + teamTwoAux.players[index].overall.DEF,
                    ARQ: teamTwoAux.overall.ARQ + teamTwoAux.players[index].overall.ARQ,
                }
                teamTwoAux[teamTwoAux.players[index].position] += 1;
            });
            setTeamOne(teamOneAux);
            setTeamTwo(teamTwoAux);
            setChangePlayer([]);
        }
    }, [changePlayer, teamOne, teamTwo]);

    return(
        <div className="main">
            <div className="header">
                Match Maker SG V2
            </div>
            <MainList
                header="Jugadores"
                database={selectedTeam}
                setSelectedTeam={setSelectedTeam} 
            />
            <Generator 
                setTeamOne={setTeamOne}
                setTeamTwo={setTeamTwo}
                selectedTeam={selectedTeam}
                setChangePlayer={setChangePlayer}
            />
            <div className="teamGrid">
                <TeamList
                    header="Equipo 1"
                    color="redTeam"
                    team={teamOne}
                    setChangePlayer={setChangePlayer}
                    changePlayer={changePlayer}
                    setTeamOne={setTeamOne}
                    setTeamTwo={setTeamTwo}
                />
                <TeamList
                    header="Equipo 2"
                    color="blackTeam"
                    team={teamTwo}
                    setChangePlayer={setChangePlayer}
                    changePlayer={changePlayer}
                    setTeamOne={setTeamOne}
                    setTeamTwo={setTeamTwo}
                />
            </div>
        </div>
    );
};