
import './App.css';

function App()
{
  function onClick(e)
  {
    console.log(e.target);
  }

  function onKeyboarEnter()
  {
    console.log("The enter key was pressed")
  }

  return (
    <div className="App">
      <h1>Hello there react</h1>
      <input onKeyPressCapture={onKeyboarEnter} type="text" />
      <button onClick={e => onClick(e)}>Click me</button>
    </div>
  );
}

export default App;
