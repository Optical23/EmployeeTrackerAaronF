INSERT INTO departments (department_name)
VALUES
('Secretary'),
('Sales'),
('Management'),
('Accounting'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
('Head Manager', 90000, 1),
('Assistant Manager', 95000, 1),
('Head of Sales', 70000, 2),
('Sales rep', 50000, 2),
('Head Accountant', 120000, 3),
('Accountant', 90000, 3),
('Head of Human Resources ', 80000, 4),
('Secretary', 40000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Micheal', 'Scott', 1, null),
('Dwight', 'Kurt', 2, 1),
('Jim', 'Halpert', 4, 2),
('Kevin', 'Bigalo', 6, 8),
('Philas', 'Vance', 4, 2),
('Pam', 'Biesley', 8, 1),
('Toby', 'Divorce', 7, 1),
('Oscar', 'Rodriguez', 5, 1);