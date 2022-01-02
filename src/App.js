
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/Home/About/About';
import Home from './Components/Home/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
          <Switch>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
          <Route path="/about">
              <About></About>
            </Route>

          
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
