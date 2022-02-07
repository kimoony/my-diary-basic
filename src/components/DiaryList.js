import React, { useContext } from 'react';
import DiatyItem from './DiatyItem';
import { DiaryStateContext } from '../App';
import { DiaryDispatchContext } from '../App';

function DiaryList() {
  const diaryList = useContext(DiaryStateContext);

  const { onDelete, onEdit } = useContext(DiaryDispatchContext);

  return (
    <div className="diaryList">
      <h2>일기 리스트</h2>
      <h3>{diaryList.length} 개의 일기가 있습니다.</h3>
      <div>
        {
          diaryList.map((diary) => (
            <DiatyItem
              key={diary.id}
              {...diary}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        }
      </div>
    </div>
  );
}

// defaultProps : undefined로 전달될 것 같은 props를 기본값을 설정하는 것 
DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList;
