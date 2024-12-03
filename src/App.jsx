import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./component/Home";
import OrderPizza from "./component/OrderPizza";
import Success from "./component/Success";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/orderPizza" component={OrderPizza}></Route>
      <Route path="/success" component={Success}></Route>
    </Switch>
  );
}

export default App;
