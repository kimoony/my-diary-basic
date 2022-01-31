import React, { useState, useEffect } from 'react'

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`counterA Update - count: ${count}`)
  })
  return <div>{count}</div>
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`counterB Update - count: ${obj.count}`)
  })
  return <div>{obj.count}</div>
};

const areEqual = (prevProns, nextProns) => {
  return prevProns.obj.count === nextProns.obj.count;
}

const MemoizedCounterB = React.memo(CounterB, areEqual);

function OptimizeTest() {
  const [count, setCount] = useState(1)
  const [obj, setObj] = useState({
    count: 1,
  })

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>count B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({
          count: obj.count,
        })}>B Button</button>
      </div>
    </div >
  );
}

export default OptimizeTest;
