import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";

import LandingPage from "./views/LandingPage.js";
import About from "./views/About";
import FAQ from "./views/FAQ"
import LinkToPurchase from "./views/LinkToPurchase";


function App() {
  return (
      <Routes>
        <Route path={"/"} element={<LandingPage/>}/>
        <Route path= {"/purchaselinks"} element={<LinkToPurchase/>} />
        <Route path= {"/about"} element={<About/>} />
        <Route path= {"/faq"} element={<FAQ/>} />

        {/*<Route exact path= {"/forgot"} component={ResetPassword} />*/}
        {/*<PrivateRoute path= {"/maps"} loggedIn={currentUser} component={GoogleMapSDK}  />*/}
        {/*<PrivateRoute path= {"/profile"} loggedIn={currentUser} component={FAQ}  />*/}
      </Routes>
  );
}

export default App;
