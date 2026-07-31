import {useState} from 'react';
export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userName, password}),
    });
    const data = response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
  };

  return (
    <>
      <span>Input form here</span>
    </>
  );
}
