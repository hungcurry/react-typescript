import { useState, useEffect } from 'react'

const UseEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  // init
  useEffect(() => {
    console.log('render');
  })

  // one first
  useEffect(() => {
    console.log('once render');
  }, []);

  // 請謹慎開啟註解，要有心理準備電腦會當機
  // 地雷寫法
  // React.useEffect(() => {
  //   setCount((pre) => pre + 1);
  // }, [ count ])

  const addCount = () => {
    setCount((pre) => pre + 1);
  };
  useEffect(() => {
    console.log('count' , count);
  }, [count]);
  
  return (
    <div>
      <button type="button" onClick={addCount}>
        Count is: { count }
      </button>
    </div>
  )
}

export default UseEffect
