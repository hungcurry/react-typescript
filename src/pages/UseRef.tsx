import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';

// 子元件
const Child = forwardRef<ChildMethods, { label: string }>((props, ref) => {
  const { label } = props;
  const childref = useRef<HTMLDivElement | null>(null);

  // 使用 useImperativeHandle 定義向外暴露的方法
  useImperativeHandle(ref, () => ({
    // 傳出DOM
    childref,
    // 定義一個可以從父元件訪問的方法
    doSomething: () => {
      // 做一些操作
      console.log('emit');
    },
  }));

  return (
    <>
      <div>props: {label}</div>
      <div className="child" ref={childref}></div>
    </>
  );
});

// 定義子元件的方法和屬性
interface ChildMethods {
  childref: React.RefObject<HTMLDivElement | null>;
  doSomething: () => void;
}

const UseRef: React.FC = () => {
  const myRef = useRef<ChildMethods | null>(null);

  const handleClick = () => {
    // 調用子元件的 doSomething 方法
    if (myRef.current) {
      myRef.current.doSomething();
    }
  }

  useEffect(() => {
    if (myRef.current && myRef.current.childref.current) {
      console.log('myRef', myRef.current.childref.current);
    }
  }, []);

  return (
    <div>
      <Child label="Enter your name:" ref={myRef} />
      <hr />
      <button className="bg-blue-400" onClick={handleClick}>
        執行子元件方法
      </button>
    </div>
  );
}

export default UseRef;
