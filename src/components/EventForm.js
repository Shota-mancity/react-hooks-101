import React, { useState} from "react";
import {CREATE_EVENT, DELETE_ALL_EVENTS} from "../actions"

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = e => {
    // onClickでイベントが渡ってくるから、それをeで拾う
    e.preventDefault();
    // ボタンクリックの際に行われるsubmitという動作を抑止して、ページ全体の再読み込みを防ぐ
    dispatch({
      type: CREATE_EVENT,
      title,
      body
      // title, body これらは情報として持っていないため、formから吸い上げて、dispatchの引数として渡す
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm("全て削除しますか");
    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };

  const unCreatable = title === "" || body === "";
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
