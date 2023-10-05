const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputToDo = (props) => {
  const { toDoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={toDoText}
        // valueの値が変わるたびに、useState("")の値も変化させるため、onChangeを使う。
        // onChangeを設定しないと初期値("")のままで、フォームに入力ができない。
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
