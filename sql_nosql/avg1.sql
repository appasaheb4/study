select department, avg(salary) as avg_salary from employee where joining_date >='2024-01-01' group by department order by avg_salary desc;

-- Index creation
create index idx_salary on employee(salary)
create unique index idx_email on employee(email)


-- get secound highest salary

select max(salary) from employee where salary <(select max(salary) from employee);
db.employee.aggregate([{
    $sort:{salary:-1},
    {$skip:1},
    {$limit:1}
}])

--clustered index physically orders the table data
--Non-clustered index creates a separate reference structure for the data.


