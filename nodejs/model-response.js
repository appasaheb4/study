const https = required('https');

const OPEN_API_ENDPOINT = '';
const OPEN_API_PATH = '';
const OPEN_API_KEY = '';

const fetchCompletion = (prompt, callback) => {
  const postData = JSON.stringify({
    model: 'gpt-4o-mini',
    messages: prompt,
    max_tokens: 150,
    temperature: 0.1,
  });

  const options = {
    hostname: OPEN_API_ENDPOINT,
    path: OPEN_API_PATH,
    method: 'POST',
    headers: {
      'Context-Type': 'application/json',
      Authorization: `Bearer ${OPEN_API_KEY}`,
      'Content-Length': Buffer.byteLength(postData),
    },
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const parseData = JSON.parse(data);
        callback(null, parseData);
      } catch (err) {
        callback(err, null);
      }
    });
  });

  req.on('error', (error) => {
    callback(error, null);
  });
  req.write(postData);
  req.end();
};

const main = () => {
  const messages = [
    {
      role: 'system',
      content: 'You are a helpful assistant.',
    },
    {role: 'user', content: 'Define photosynthesis'},
  ];

  fetchCompletion(messages, (error, response) => {
    if (error) {
      console.log({error});
      return;
    }
    console.log({response});
  });
};

main();
