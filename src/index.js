import React from "react";
import ReactDOM from "react-dom";
import {
  action,
  createStore,
  StoreProvider,
  useStore,
  useActions
} from "easy-peasy";

import "./styles.css";
import { Likes } from "./Likes";
import { LikesAndComments } from "./LikesAndComments";

const store = createStore({
  data: {
    likes: 0,
    numComments: 0,
    incrementLikes: action(state => {
      state.likes++;
    }),
    incrementNumComments: action(state => {
      state.numComments++;
    })
  }
});

function App() {
  const data = useStore(state => state.data);
  const { incrementLikes, incrementNumComments } = useActions(
    actions => actions.data
  );

  return (
    <div>
      <button onClick={incrementLikes}>increment likes</button>
      <button onClick={incrementNumComments}>increment numComments</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <LikesAndComments />
      <br />
      <Likes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  rootElement
);

// https://www.youtube.com/watch?v=5gUHfe-ETuo