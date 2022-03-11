const startPrompt = [{
    type: 'list',
    name: 'action',
    message: 'What action would you like to make?',
    choices: [
        'View departments',
        'View roles',
        'View employees',
        'Add department',
        'Add role',
        'Add employee',
        'Change employee role',
        'Exit'
    ]
}];

const addDepartmentPrompt = [{
    type: 'input',
    message: 'What is the name of the department?',
    name: 'departmentName',
}];

const addRolePrompt = [
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'salary'
    },
    {
        type: 'input',
        message: 'Which department does the role belong to?',
        name: 'department'
    }
];

const addEmployeePrompt = [
    {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'firstName'
    },
    {
        type: 'input',
        message: "What is the employee's last name?",
        name: 'lastName'
    },
    {
        type: 'input',
        message: "What is the employee's role?",
        name: 'role'
    },
    {
        type: 'input',
        message: "Who is the employee's manager?",
        name: 'manager'
    }
];

const changeEmployeeRolePrompt = [
    {
        type: 'list',
        message: "Enter the Employee's ID to update the role",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the employee's new role?",
        name: 'newRole'
    }
];

const Prompts = {startPrompt,addDepartmentPrompt,addRolePrompt,addEmployeePrompt,changeEmployeeRolePrompt};
module.exports = Prompts;