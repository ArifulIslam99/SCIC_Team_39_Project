import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute';
import SignUp from './Components/Authentication/SignUp/SignUp';
import About from './Components/Home/About/About';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Navigation from './Components/Shared/Navigation/Navigation';
import Shop from './Components/Shop/Shop';
import AuthProvider from './Context/AuthProvider';
import Purchase from './Components/Purchase/Purchase';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter>
      <Navigation></Navigation>
          <Switch>
              <Route path='/login'> 
                  <Login></Login>
              </Route>
              <Route path='/register'> 
                  <SignUp></SignUp>
              </Route>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
          <Route path="/about">
              <About></About>
            </Route>          
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>          
                 
          <Route path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </Route>          
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
