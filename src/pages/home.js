import React, { Label } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useKeycloak } from '@react-keycloak/web';
import FrankyNavbar from '../components/FrankyNavbar';
import { Table, thead, tr, th } from 'react-bootstrap';

const columns = [
    { field: 'strand', headerName: 'Strand', width: 200 },
    { field: 'task', headerName: 'Task', width: 600 },
    { field: 'deadline', headerName: 'Deadline', width: 200},
    { field: 'percent', headerName: 'Percentage', width: 150}
];
const appliedCSRows = [
    { id: 1, strand: 'Programming', task: '5 Exercises (Matlab, Asymptotic Complexity)', deadline: '17/02/2021', percent: '100%'},
    { id: 2, strand: 'Applied CS', task: '2 Exercises (Computational Complexity and Metaheuristics Reports)', deadline: '17/02/2021', percent: '50%'},
    { id: 3, strand: 'Applied CS', task: 'Class Test', deadline: '22/01/2021', percent: '50%'},
];

const aiRows = [
    { id: 4, strand: 'Artificial Intelligence', task: 'Small K-NN Exercise', deadline: '04/12/2020', percent: '10%'},
    { id: 5, strand: 'Artificial Intelligence', task: 'Scientific Report', deadline: '17/02/2021', percent: '40%'},
    { id: 6, strand: 'Artificial Intelligence', task: 'Class Test', deadline: '29/01/2021', percent: '50%'},
];

const dataAnalyticsRows = [
    { id: 7, strand: 'Chi Squared Assignment', task: 'Automate Calculation of ChiSqr', deadline: '09/12/2020', percent: '5%'},
    { id: 8, strand: 'Data Analytics Portfolio', task: 'Provided Portfolio or Titanic Dataset', deadline: '29/01/2021', percent: '50%'},
    { id: 9, strand: 'Data Analytics Quiz', task: 'Online Quiz', deadline: '05/02/2021', percent: '45%'},
];

const vrRows = [
    {id: 10, strand: 'Virtual Reality', task: 'VR Project', deadline: '24/05/2021', percent: '100%'}
]

const bigDataRows = [
    {id: 11, strand: 'Big Data', task: 'Big Data Project', deadline: '24/05/2021', percent: '50%'},
    {id: 12, strand: 'Big Data', task: 'Class Test', deadline: '27/05/2021', percent: '50%'}
]

const iotRows = [
    {id: 13, strand: 'IoT', task: 'IoT Project', deadline: '24/05/2021', percent: '75%'},
    {id: 14, strand: 'IoT', task: 'Class Test', deadline: '03/06/2021', percent: '25%'}
]

const numMeth = [
    {id: 13, strand: 'Numerical Methods', task: 'Class Test', deadline: '13/05/2021', percent: '100%'}
]

const theoCS = [
    {id: 13, strand: 'Theoretical CS', task: 'Class Test', deadline: '20/05/2021', percent: '100%'}
]

const fin = [
    {id: 100, strand: 'Home', task: 'Do Nothing', deadline: 'Never', percent: 'Who Cares?'}
]


const generateTable = (name, columns, data) => {
    return(
        <div class="important-dates">
            <div class="table-title">{name}</div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {columns.map((row) =>
                            <th>{row.headerName}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                        const dateParts = row.deadline.split("/");
                        const parsedDeadline = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
                        const enableRow = !row.deadline.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/) || parsedDeadline > Date.now();
                        const daysUntil = Math.abs(parsedDeadline - Date.now()) / (1000 * 60 * 60 * 24);
                        const isSoon = (!isNaN(daysUntil) && daysUntil < 8);
                        const isImminent = (!isNaN(daysUntil) && daysUntil < 5);
                        console.log(row.deadline, daysUntil, isSoon, isImminent, enableRow);
                        const styling = {
                        };
                        if(enableRow) {
                            if(isImminent) {
                                row.deadline += " Within 4 days!";
                                styling.backgroundColor = 'rgba(255, 50, 50, 0.9)';
                            } else if(isSoon) {
                                row.deadline += " Within 1 Week!";
                                styling.backgroundColor = 'rgba(200, 150, 0, 0.5)';
                            }    
                        } else {
                            styling.textDecoration = 'line-through';
                            styling.backgroundColor = 'rgba(150, 50, 50)';
                        }
                        return (
                            <tr style={styling}>
                                <td>{row.strand}</td>
                                <td>{row.task}</td>
                                <td>{row.deadline}</td>
                                <td>{row.percent}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

const HomePage = () => {
    
    const { keycloak } = useKeycloak();

    return (
        <div className="background">
            <div className="blurred-layer">
                <FrankyNavbar/>
                    {generateTable("Wooo", columns, fin)}
            </div>
        </div>
    );

};

export default HomePage;
