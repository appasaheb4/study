select e.*, a.department, a.accountId 
from employee as e
join customer as c
on e.customerId = c.customerId
join account as a
on a.customerId = c.customerId
where a.DOJ > 15 and e.earn < 25000
group by a.department, a.accountId, e.employeeId