db.employee.createIndex({salary: 1});
db.employee.createIndex({email: 1}, {unique: true});
