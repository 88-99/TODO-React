import { useState } from "react";
import "./styles.css";
import { InputToDo } from "./components/inputToDo";
import { IncompleteToDos } from "./components/incompleteToDos";
import { CompleteToDos } from "./components/completeToDos";

export const App = () => {
  // useState()の引数は初期値
  const [toDoText, setToDoText] = useState("");
  const [incompleteToDos, setIncompleteToDos] = useState([]);
  const [completeToDos, setCompleteToDos] = useState([]);
  // const [name, setName] = useState("");
  // onChange={(e) => setName(e.target.value)}
  // setToDoText(event.target.value)でtoDoTextに値をセットする
  const onChangeToDoText = (event) => setToDoText(event.target.value);
  const onClickAdd = () => {
    if (toDoText === "") return;
    const newToDos = [...incompleteToDos, toDoText];
    setIncompleteToDos(newToDos);
    setToDoText("");
  };

  const onClickComplete = (index) => {
    const newIncompleteToDos = [...incompleteToDos];
    newIncompleteToDos.splice(index, 1);

    const newCompleteToDos = [...completeToDos, incompleteToDos[index]];

    setIncompleteToDos(newIncompleteToDos);
    setCompleteToDos(newCompleteToDos);
  };

  const onClickDlete = (index) => {
    const newToDos = [...incompleteToDos];
    newToDos.splice(index, 1);
    setIncompleteToDos(newToDos);
  };

  const onClickBack = (index) => {
    const newCompleteToDos = [...completeToDos];
    newCompleteToDos.splice(index, 1);

    const newIncompleteToDos = [...incompleteToDos, completeToDos[index]];
    setCompleteToDos(newCompleteToDos);
    setIncompleteToDos(newIncompleteToDos);
  };

  return (
    <>
      <InputToDo
        toDoText={toDoText}
        onChange={onChangeToDoText}
        onClick={onClickAdd}
        disabled={incompleteToDos.length >= 5}
      />

      {incompleteToDos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは5個までだよ！</p>
      )}

      <IncompleteToDos
        toDos={incompleteToDos}
        onClickComplete={onClickComplete}
        onClickDlete={onClickDlete}
      />

      <CompleteToDos toDos={completeToDos} onClickBack={onClickBack} />
    </>
  );
};
