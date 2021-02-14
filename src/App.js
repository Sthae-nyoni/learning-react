
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';

function App()
{

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}



export default App;
