export const CompleteToDos = (props) => {
  const { toDos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p>完了のTODO</p>
      <ul>
        {toDos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
