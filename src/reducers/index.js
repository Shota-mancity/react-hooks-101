// reducer

// createの場合
// action={
//     type: "CREATE_EVENT",
//     title: "2020東京オリンピックのお知らせ",
//     body: "2020"
// }
// steteの状態で場合分け
// #before
// state=[]
// #after
// state[
//     {id:1,
//     title: "2020東京オリンピックのお知らせ",
//     body: "2020"}
// ]

// #before
// state=[
//     {id:1, title:"a1", body:"b1"},
//     {id:2, title:"a2", body:"b2"},
//     {id:3, title:"a3", body:"b3"}
// ]
// #after
// state=[
//     {id:1, title:"a1", body:"b1"},
//     {id:2, title:"a2", body:"b2"},
//     {id:3, title:"a3", body:"b3"},
//     {id:4,
//     title: "2020東京オリンピックのお知らせ",
//     body: "2020"}
// ]

import {CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS} from "../actions"

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
