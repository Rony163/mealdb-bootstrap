import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Resturent from './components/Resturent/Resturent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Resturent></Resturent>
          </Route>
          <Route path="/resturent">
            <Resturent></Resturent>
          </Route>
          <Route path="/details/:idName">
            <Details></Details>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
