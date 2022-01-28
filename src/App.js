import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';
import './App.css';

const diaryList = [
  {
    id: 1,
    author: "김훈",
    content: "안녕하세요우~",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "하로",
    content: "하로는 기분이 좋앙",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "피카츄",
    content: "삐피까츄우 ~~",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "게스트",
    content: "이런 일기장이 있군요?! 좋당",
    emotion: 4,
    created_date: new Date().getTime(),
  },
]

function App() {
  return (
    <>
      <DiaryEditor />
      <DiaryList diaryList={diaryList} />
    </>
  );
}

export default App;
