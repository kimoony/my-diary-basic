import { useState, useRef } from 'react';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';
import './App.css';


function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
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
    setData([newItem, ...data])
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((item) => item.id !== targetId);
    setData(newDiaryList)
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    )
  }

  return (
    <>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit} />
    </>
  );
}

export default App;
