const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
require('console.table');
const {startPrompt,addDepartmentPrompt,addRolePrompt,addEmployeePrompt,changeEmployeeRolePrompt} = require('./prompts');
const res = require('express/lib/response');


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
            case 'Add department':
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
    db.query('SELECT * FROM department', function(err, res) {
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
    inquirer.prompt(addDepartmentPrompt)
    .then(response => {
        db.query('INSERT INTO department (department_name) VALUES (?)', [response.departmentName], function(err, res) {
            if (err) throw err;
            console.table(res);
            console.table(`Department ${response.departmentName} has been created`);
            promptStart();
        });

    })
};

const addRole = () => {
    inquirer.prompt(addRolePrompt)
    .then(response => {
        db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [response.title, response.salary, response.department_id], function(err, res) {
            if (err) throw err;
            console.table(res);
            console.table(`New ${response.title} role has been created`);
            promptStart();
        })
    })
};

const addEmployee = () => {
    inquirer.prompt(addEmployeePrompt)
    .then(response => {
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [response.firstName, response.lastName, response.role, response.manager], function(err, res) {
            if (err) throw err;
            console.table(res);
            console.table(`Employee ${response.firstName} has been entered into the database`);
            promptStart();
        })
    })
};

const changeEmployeeRole = () => {
    db.query();
}

const exit = () => {
    console.log('Thanks for using employee tracker.');
    db.end();
}