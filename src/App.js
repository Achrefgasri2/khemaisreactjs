import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import RegisterAR from "./Pages/Auth/Register/RegisterAR/RegisterAR";
import RegisterFR from "./Pages/Auth/Register/RegisterFR/RegisterFR";
import RegisterEN from "./Pages/Auth/Register/RegisterEN/RegisterEN";
import LoginEN from "./Pages/Auth/Login/LoginEN/LoginEN";
import LoginFR from "./Pages/Auth/Login/LoginFR/LoginFR";
import LoginAR from "./Pages/Auth/Login/LoginAR/LoginAR";
import HomeAR from "./Pages/Home/HomeAR/HomeAR";
import HomeEN from "./Pages/Home/HomeEN/HomeEN";
import HomeFR from "./Pages/Home/HomeFR/HomeFR";
import Error from "./Pages/Error/Error";
function App() {
  return (
    <div className="App">
      <Switch>
    <Route path="/CreateAccountEN" component={RegisterEN} />
    <Route path="/CreateAccountAR" component={RegisterAR} />
    <Route path="/CreateAccountFR" component={RegisterFR} />
    <Route path="/LoginEN" component={LoginEN} />
    <Route path="/LoginFR" component={LoginFR} />
    <Route path="/LoginAR" component={LoginAR} />
    <Route path="/HomeAR" component={HomeAR} />
    <Route path="/HomeFR" component={HomeFR} />
    <Route path="/HomeEN" component={HomeEN} />
    <Route path="/*" component={Error} />
    </Switch>
    </div>
  );
}

export default App;
