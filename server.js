const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
require('console.table');
const {startPrompt,addDepartmentPrompt,addRolePrompt,addEmployeePrompt,changeEmployeeRolePrompt} = require('./prompts');


const PORT = process.env.PORT || 3001;
const app = express();
//connecting database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'PlmPlm23!',
        database: 'employee_db'
    },
    console.log('Database server is running')
);

db.connect(err => {
    if (err) throw err;
    console.log('Database of Employees is live');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    promptStart();
});

const promptStart = () => {
    inquirer.prompt(startPrompt).then(response => {
        switch(response.action){
            case 'View departments':
                viewDepartments();
                break;
            case 'View roles':
                viewRoles();
                break;
            case 'View employees':
                viewEmployees();
                break;
            case 'Add departments':
                addDepartment();
                break;
            case 'Add role':
                addRole();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'Change employee role':
                changeEmployeeRole();
                break;
            case 'Exit':
                exit();
                break;
            default:
                exit();
        }
    });
}


const viewDepartments = () => {
    db.query('SELECT department_name FROM department', function(err, res) {
        if (err) throw err;
        console.table(res);
        promptStart();
    });
};

const viewRoles = () => {
    db.query('SELECT * FROM role', function(err, res) {
        if (err) throw err;
        console.table(res);
        promptStart();
    });
};

const viewEmployees = () => {
    db.query('SELECT * FROM employee', function(err, res) {
        if (err) throw err;
        console.table(res);
        promptStart();
    });
};

const addDepartment = () => {
    inquirer.prompt([...addDepartmentPrompt]);
}