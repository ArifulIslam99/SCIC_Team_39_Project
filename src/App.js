
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import SignUp from './Components/Authentication/SignUp/SignUp';
import Navigation from './Components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
          <Switch>
              <Route path='/login'> 
                  <Login></Login>
              </Route>
              <Route path='/register'> 
                  <SignUp></SignUp>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
