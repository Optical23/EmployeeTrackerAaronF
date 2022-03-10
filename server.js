const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
require('console.table');


const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'test',
        database: 'employee_vision'
    },
    console.log('Database server is running')
);

db.connect(err =>{
    if (err) throw err;
    console.table('Database of Employees is live');
    console.table('#################################');
    console.table('####    Employee Tracker     ####');
    console.table('#################################');
    promptStart();
});

const promptStart = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select an action for the employee tracker.',
            choices: [
                'V'
            ]
        }
    ])
}