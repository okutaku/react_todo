import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa","iiii"]);
  const [completeTodos] = useState(['uuuuu']);
  return (
    <>
     <div className="input-area">
       <input placeholder="TODOを入力"/>
     </div>
     <div className="incomplete-area">
       <p className="title">未完了のTODO</p>
       <ul>
        {incompleteTodos.map((todo) => {
          return (
            //keyは仮想DOMは変更後とその差分だけ表示しているので何番目かを把握するためにかく
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          );
        })}
       </ul>
     </div>
     <div className="complete-area">
      <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return(
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
     </div>
    </>
  );
}
