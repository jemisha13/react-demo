import { Route, Router, Switch } from 'react-router';
import './App.css';
import HomeLayout from './components/common/HomeLayout';
import history from './components/history';
import Login from './components/Login/Login';

function App() {
  return (
      <Router  history={history}>
        
        <Switch>
          <Route exact path="/login" name="Login" component={Login} />
          <Route
            path="/"
            name="Home"
            component={HomeLayout}
          />
      </Switch>
    </Router>
  );
}

export default App;
