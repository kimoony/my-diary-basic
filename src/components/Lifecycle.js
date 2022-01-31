import React, { useState, useEffect } from 'react';

function UnmountTest() {
  useEffect(() => {
    console.log("Mount");
    return () => {
      // Unmount 시점에 실행됨
      console.log("Unmount");
    }
  }, []);

  return <div>Unmount Testing Component</div>
}

function Lifecycle() {
  // // Mont, Update
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("mount")
  // }, []);

  // useEffect(() => {
  //   console.log("update")
  // });

  // useEffect(() => {
  //   console.log(`count is update : ${count}`)
  // }, [count]);

  // useEffect(() => {
  //   console.log(`text is update : ${text}`)
  // }, [text]);

  // const handleClickPlus = () => {
  //   setCount((prev) => prev + 1);
  // }

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // }

  // Unmount
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      { /* Mount, Update */}
      { /* <div>
        {count}
        <button onClick={handleClickPlus}>+</button>
      </div>
      <div>
        <input type="text" value={text} onChange={handleChange} />
      </div> */}

      {/* Unmount */}
      <button onClick={toggle}>On/Off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
}

export default Lifecycle;
