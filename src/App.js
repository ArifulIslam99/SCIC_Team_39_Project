
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
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
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
