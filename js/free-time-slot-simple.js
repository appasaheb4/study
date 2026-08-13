function getCommonFreeTime(...schedules) {
  // Flatten all schedules
  // console.log({schedules});
  let intervals = schedules.flat();
  // console.log({intervals});

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  // console.log({intervals});

  // Merge overlapping intervals
  let merged = [];
  for (let [start, end] of intervals) {
    if (!merged.length || merged[merged.length - 1][1] < start) {
      merged.push([start, end]);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        end,
      );
    }
  }

  console.log({merged});

  // Find gaps (free times)
  let freeTimes = [];
  for (let i = 1; i < merged.length; i++) {
    freeTimes.push([merged[i - 1][1], merged[i][0]]);
  }

  return freeTimes;
}

// Example input
const employee1 = [
  [1, 3],
  [6, 7],
];
const employee2 = [[2, 4]];
const employee3 = [
  [2, 5],
  [9, 12],
];

console.log(getCommonFreeTime(employee1, employee2, employee3));
// 👉 Output: [ [5,6], [7,9] ]
