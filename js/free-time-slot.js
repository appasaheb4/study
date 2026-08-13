function getFreeTimeSlots(...schedules) {
  // Step 1 : Flatten all schedule into one array
  //console.log({schedules});
  let intervals = [];
  for (let schedule of schedules) {
    // console.log(schedule);
    for (let interval of schedule) {
      intervals.push(interval);
    }
  }
  //console.log({intervals});
  // Step 2 : Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  console.log({sort: intervals});

  // Step 3: Merge overlapping intervals
  let merged = [];
  for (let interval of intervals) {
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push([...interval]);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1],
      );
    }
  }
  //   console.log({merged});

  // Step 4: Find gaps (free times)
  let freeTimes = [];
  for (let i = 1; i < merged.length; i++) {
    freeTimes.push([merged[i - 1][1], merged[i][0]]);
  }
  return freeTimes;
}

// Example
const emp1 = [
  [1, 3],
  [6, 7],
];
const emp2 = [[2, 4]];
const emp3 = [
  [2, 5],
  [9, 12],
];

const freeTimeSlots = getFreeTimeSlots(emp1, emp2, emp3);
console.log(freeTimeSlots);
