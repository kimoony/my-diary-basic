import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      }
    });
    setData(initData);
  }

  useEffect(() => {
    getData();
  }, [])

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    // 새로운 item을 만들고 id가 증가해야하기 때문에 만든 후 1 증가시킨다.
    dataId.current += 1;
    // setData에 새로 추가한 item을 넣어주고 기존에 data를 넣어준다.
    // 함수형 업데이트 setData에 함수를 전달한다.
    setData((data) => [newItem, ...data])
  }, []);  // 위에서 setData에 함수를 전달했기 때문에 디펜던시를 비워도 최신의 스테이트를 참고할 수 있다.

  const onDelete = useCallback((targetId) => {
    // const newDiaryList = data.filter((item) => item.id !== targetId);
    setData(data => data.filter((item) => item.id !== targetId))
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    )
  }, []);


  const getDiaryAnalysis = useMemo(() => {
    const good = data.filter((it) => it.emotion >= 3).length;
    const bad = data.length - good;
    const goodRatio = (good / data.length) * 100;
    return { good, bad, goodRatio };
  }, [data.length]);

  const { good, bad, goodRatio } = getDiaryAnalysis;


  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 : {good}</div>
      <div>기분 나쁜 일기 : {bad}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
