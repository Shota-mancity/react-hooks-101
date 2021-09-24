import React, { useEffect, useReducer } from "react";
import reducer from "../reducers";
import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import AppContext from "../contexts/AppContext";

import "bootstrap/dist/css/bootstrap.min.css";

const APP_KEY = "appWithRedux";

const App = () => {
  // localStorageに保存された内容を取り出し、何も入っていなければnullが返ってくる
  const appState = localStorage.getItem(APP_KEY);

  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: []
      };
  // リロード時のstate初期化
  const [state, dispatch] = useReducer(reducer, initialState);

  // stateを監視して、stateが更新されるたびにその内容をlocalStorageに保存する
  useEffect(() => {
    // localStorageに保存できるのは文字列のため、JSON.stringifyでstateを文字列化
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <>
      {/* 既存のDOMをproviderでラップしてあげる */}
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container-fluid">
          <EventForm />
          <Events />
          <OperationLogs />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
