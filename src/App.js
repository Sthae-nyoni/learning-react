
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './components/blogs/CreateBlog';
import BlogDetails from './components/blogs/BlogDetails';

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
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
