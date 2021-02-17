
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './components/blogs/CreateBlog';

function App()
{
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;
