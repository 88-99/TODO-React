export const IncompleteToDos = (props) => {
  const { toDos, onClickComplete, onClickDlete } = props;

  return (
    <div className="incomplete-area">
      <p>未完了のTODO</p>
      <ul>
        {toDos.map((todo, index) => {
          return (
            // Warning: Each child in a list should have a unique “key” prop.
            // 仮想DOMは変更前と変更後の差分のみを抽出して実際のDOMに反映させていく。
            // そのためmapなどを使ってループでレンダリングする場合は、何個目の要素なのかの目印が必要。
            // key={todo} ループの親タグに目印としてのkeyを設定しなくてはならない。
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 削除ボタンが押されたらonClickDlete(index)を起動させたいので、コールバック関数を設定する */}
              {/* 関数に引数を渡すときはコールバック関数を使う */}
              <button onClick={() => onClickDlete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
