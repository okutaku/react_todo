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
  };

  //何番目の行を判定したい場合、map,indexで関数をわたし、その関数の中で何番目に処理をしていくかをおこなっていく
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  //onChangeで変わる値をvalueの中にしている
  //
  return (
    <>
     <div className="input-area">
       <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
       <button onClick={onClickedAdd}>追加</button>
     </div>
     <div className="incomplete-area">
       <p className="title">未完了のTODO</p>
       <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            //keyは仮想DOMは変更後とその差分だけ表示しているので何番目かを把握するためにかく
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button　onClick={() => onClickComplete(index)}>完了</button>
              {/*アロー関数で処理しないと、リロードの際にindex分（個数分）処理が発火する*/}
              <button　onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
       </ul>
     </div>
     <div className="complete-area">
      <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return(
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
     </div>
    </>
  );
}
