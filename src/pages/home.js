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
    { id: 9, strand: 'Data Analytics Quiz', task: 'Online Quiz', deadline: '01-05/02/2021', percent: '45%'},
];

const vrRows = [
    {id: 10, strand: 'Virtual Reality', task: 'VR Project', deadline: 'Sometime in April', percent: '100%'}
]

const bigDataRows = [
    {id: 11, strand: 'Big Data', task: 'Big Data Project', deadline: 'Unknown as of 02/02/2021', percent: '50%'},
    {id: 12, strand: 'Big Data', task: 'Class Test', deadline: 'Unknown as of 02/02/2021', percent: '50%'}
]

const iotRows = [
    {id: 13, strand: 'IoT', task: 'IoT Project', deadline: 'Unknown as of 02/02/2021', percent: '75%'},
    {id: 14, strand: 'IoT', task: 'Class Test', deadline: 'Unknown as of 02/02/2021', percent: '25%'}
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
                    {data.map((row) => 
                        <tr>
                            <td>{row.strand}</td>
                            <td>{row.task}</td>
                            <td>{row.deadline}</td>
                            <td>{row.percent}</td>
                        </tr>
                    )}
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
                    {generateTable("Internet of Things", columns, iotRows)}
                    {generateTable("Big Data", columns, bigDataRows)}
                    {generateTable("Virtual Reality", columns, vrRows)}
                    {generateTable("Artificial Intelligence", columns, aiRows)}
                    {generateTable("Data Analytics", columns, dataAnalyticsRows)}
                    {generateTable("Applied Computer Science", columns, appliedCSRows)}
            </div>
        </div>
    );

};

export default HomePage;