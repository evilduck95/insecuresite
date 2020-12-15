import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useKeycloak } from '@react-keycloak/web';
import FrankyNavbar from '../components/FrankyNavbar';
import { makeStyles } from '@material-ui/core';

const columns = [
    { field: 'strand', headerName: 'Strand', width: 200 },
    { field: 'task', headerName: 'Task', width: 600 },
    { field: 'deadline', headerName: 'Deadline', width: 200},
    { field: 'percent', headerName: 'Percentage', width: 150}
];
const rows = [
    { id: 1, strand: 'Programming', task: '5 Exercises (Matlab, Asymptotic Complexity)', deadline: '17/02/2021', percent: '100%'},
    { id: 2, strand: 'Applied CS', task: '2 Exercises (Computational Complexity and Metaheuristics Reports)', deadline: '27/01/2021', percent: '50%'},
    { id: 3, strand: 'Applied CS', task: 'Class Test', deadline: '22/01/2021', percent: '50%'},
    { id: 4, strand: 'Artificial Intelligence', task: 'Small K-NN Exercise', deadline: '04/12/2021', percent: '10%'},
    { id: 5, strand: 'Artificial Intelligence', task: 'Scientific Report', deadline: '17/02/2021', percent: '40%'},
    { id: 6, strand: 'Artificial Intelligence', task: 'Class Test', deadline: '29/01/2021', percent: '50%'},
    { id: 7, strand: '', task: '', deadline: '', percent: ''},
];

const HomePage = () => {
    
    const { keycloak } = useKeycloak();

    return (
        <div className="background">
            <div className="blurred-layer">
                <FrankyNavbar/>
                <div id="important-dates">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                    />
                </div>
            </div>
            
        </div>
    )

};

export default HomePage;