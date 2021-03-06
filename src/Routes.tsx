import Navbar from "components/Navbar";
import Home from "pages/Home";
import SearchProfile from "pages/SearchProfile";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profiles">
          <SearchProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
