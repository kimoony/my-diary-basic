import React, { useState, useRef } from 'react';

function DiaryEditor() {
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  })

  const handleChageState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.author.length === 0) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    alert("저장 완료");
  }

  return (
    <div className="container">
      <h2>오늘의 일기</h2>
      <input
        ref={authorInput}
        name="author"
        type="text"
        placeholder="작성자명 입력해주세요 (1글자 이상)"
        value={state.author}
        onChange={handleChageState}
      />
      <div>
        <textarea
          ref={contentInput}
          name="content"
          placeholder="내용을 입력해주세요 (최소 5글자 이상)"
          value={state.content}
          onChange={handleChageState}
        />
      </div>
      <p>
        오늘의 감정점수: <span>
          <select
            name="emotion"
            value={state.emotion}
            onChange={handleChageState}
            id="emotion-select"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </span>
      </p>
      <button className="submit-btn" onClick={handleSubmit}>일기 저정하기</button>
    </div>
  )
}

export default DiaryEditor;
