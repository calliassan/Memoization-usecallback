const TodoApp = () => {
  const val = [].length;
  return (
    <div>
      {val && <div>Hello && operator</div>}
      <div>Hello</div>
    </div>
  );
};

ReactDOM.render(<TodoApp />, document.querySelector("#app"));
