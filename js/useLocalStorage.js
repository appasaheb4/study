import {useState, useEffect} from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const savedValue = window.localStorage.getItem(key);
    return savedValue !== null ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

function MainComponent() {
  const [name, setName] = useLocalStorage('userName', '');

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
