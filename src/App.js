import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const[todoText, setTodoText] = useState('');//入力した場合を変数に入れる
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa","iiii"]);
  const [completeTodos, setcompleteTodos] = useState(["uuuuu"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickedAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  //onChangeで変わるたびにvalueが変わるようにしている
  return (
    <>
     <div className="input-area">
       <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
       <button onClick={onClickedAdd}>追加</button>
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
