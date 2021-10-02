import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes del Layout
import Header from "../src/components/layout/Header";
import Nav from "../src/components/layout/Nav";
import Footer from "../src/components/layout/Footer";

//Componentes del Body
import HomePage from "./pages/HomePage";
import AcercadePage from "./pages/AcercadePage";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <div className="p-5">
          <Route path="/" exact component={HomePage} />
          <Route path="/acerca" exact component={AcercadePage} />
          <Route path="/contacto" exact component={Contacto} />
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
