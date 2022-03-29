import React, { useState } from 'react';
import { database } from '../playerdata';
import { MainList } from './MainList';
import { TeamList } from './TeamList';
import { Generator } from './Generator';

console.log(database);

export const Home = () => {
    const [teamOne, setTeamOne] = useState([]);
    const [teamTwo, setTeamTwo] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(database);
    const [error, setError] = useState(false);

    return(
        <div className="main">
            <div className="header">
                Match Maker SG
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
                setError={setError} 
            />
            <div className="teamGrid">
                <TeamList
                    header="Equipo 1"
                    color="redTeam"
                    team={teamOne}
                />
                <TeamList
                    header="Equipo 2"
                    color="blackTeam"
                    team={teamTwo}
                />
            </div>
            {error && <div>Por favor, seleccionar al menos 4 jugadores por lado</div>}
        </div>
    );
};