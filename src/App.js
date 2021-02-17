
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlogPage from './components/blog/CreateBlogPage';
import BlogDetailsPage from './components/blog/BlogDetailsPage';

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
              <CreateBlogPage />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetailsPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
