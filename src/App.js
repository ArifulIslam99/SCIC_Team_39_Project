import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Shared/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
          <Switch>
                
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
