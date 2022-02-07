import React, { useRef, useState, useContext } from 'react';
import { DiaryDispatchContext } from '../App';

function DiatyItem({
  id,
  author,
  content,
  emotion,
  created_date,
}) {

  const { onDelete, onEdit } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLoclaContent] = useState(content);

  const toggleIdEdit = () => setIsEdit(!isEdit);
  const localContentInput = useRef();

  const handleDelete = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  }

  const handleEdited = (e) => {
    setLoclaContent(e.target.value);
  }

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLoclaContent(content);
  }

  const hadleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까??`)) {
      onEdit(id, localContent)
      toggleIdEdit();
    }
  }
  return (
    <div className="item-box">
      <div className="info">
        <div>작성자: {author} | 감정점수: {emotion}</div>
        <div className="date">{new Date(created_date).toLocaleString()}</div>
        <br />
      </div>
      <div className="content">

        {isEdit ? (
          <><textarea name="" id="" value={localContent} k ref={localContentInput} onChange={handleEdited}></textarea></>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button className="cansle-btn" onClick={handleQuitEdit}>취소</button>
          <button className="modify-btn" onClick={hadleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button className="edited-btn" onClick={toggleIdEdit}>수정</button>
          <button className="delete-btn" onClick={handleDelete}>삭제</button>
        </>
      )}
    </div>
  );
}

export default React.memo(DiatyItem);
