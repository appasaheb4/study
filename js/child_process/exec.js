const {exec} = require('child_process');
exec('pwd', (error, stdout, stderr) => {
  // ls -lh
  if (error) return console.log({error});
  if (stderr) return console.log({stderr});
  console.log({stdout});
});
