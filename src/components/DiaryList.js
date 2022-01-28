import React from 'react';
import DiatyItem from './DiatyItem';

function DiaryList({ diaryList, onDelete, onEdit }) {

  return (
    <div className="diaryList">
      <h2>일기 리스트</h2>
      <h3>{diaryList.length} 개의 일기가 있습니다.</h3>
      <div>
        {
          diaryList.map((diary) => (
            <DiatyItem key={diary.id} {...diary} onDelete={onDelete} onEdit={onEdit} />
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
