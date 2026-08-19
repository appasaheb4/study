db.employee.aggregate([
  {
    $match: {
      location: 'Pune',
      salary: {$gte: 50000},
    },
  },
  {
    $sort: {salary: -1},
  },
]);
