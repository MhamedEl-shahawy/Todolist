import React from "react";
import ReactDOM from "react-dom";
import TodoList from './components/TodoList';

import Header from "nav/Header";

import { StoreProvider, useStore } from "store/store";

import "./index.scss";

const App = () => {
  const { count, increment } = useStore();
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className='todo-app'>
      <TodoList />
    </div>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
