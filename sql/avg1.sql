select department, avg(salary) as avg_salary from employee where joining_date >='2024-01-01' group by department order by avg_salary desc;
create index idx_salary on employee(salary)
create unique index idx_email on employee(email)