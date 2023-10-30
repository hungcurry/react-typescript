import { useState, useEffect } from 'react'

const useKeyDown = () => {
  const [keyDown, setKeyDown] = useState('');
  
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      setKeyDown(event.key);
    });
    return () => {
      document.removeEventListener('keydown', ()=> {
        setKeyDown('');
      });
    }
  }, []);

  return keyDown;
}
export default useKeyDown
