
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/Home/About/About';
import Navigation from './Components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
          <Switch>
          <Route path="/about">
              <About></About>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
