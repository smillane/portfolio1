import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={ Home } path='/' />
        <Route component={ About } path='/About' />
        <Route component={ Projects } path='/Projects' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
