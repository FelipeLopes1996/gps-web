import { useState, useEffect } from 'react';

export default function useStore(key = '', initialState = '') {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);
    if (storage) {
      JSON.parse(storage);
    } else {
      initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
