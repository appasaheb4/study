import axios from 'axios';

const CURSOR_API_KEY =
  'key_391ebb76c1721adec34bdd059cfcc665f87b6c55a157cb081b46b2c800b7727a';
const CURSOR_BASE_URL = 'https://api.cursor.sh/v1'; // Cursor’s cloud endpoint

async function runCursor() {
  try {
    const response = await axios.post(
      `${CURSOR_BASE_URL}/chat/completions`,
      {
        model: 'composer-2.5', // 👈 use Cursor’s model name here
        messages: [{role: 'user', content: 'Hello from Node.js using Cursor!'}],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CURSOR_API_KEY}`,
        },
      },
    );

    console.log(response.data.choices[0].message.content);
  } catch (error) {
    console.error('Error calling Cursor API:', error.message);
  }
}

runCursor();
