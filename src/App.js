import './App.css';
import Register from './components/signInandRegister/register';
import SignIn from './components/signInandRegister/signIn';
import { Route, Switch } from 'react-router-dom';
import VotePage from './components/votePage/votePage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/vote" exact>
          <VotePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
