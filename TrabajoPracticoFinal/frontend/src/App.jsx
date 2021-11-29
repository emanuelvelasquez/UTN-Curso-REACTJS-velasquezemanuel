import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes del Layout
import Header from "../src/components/layout/Header";
import Nav from "../src/components/layout/Nav";
import Footer from "../src/components/layout/Footer";

//Componentes del Body
import HomePage from "./pages/HomePage";
import AcercadePage from "./pages/AcercadePage";
import ContactoPage from "./pages/ContactoPage";
import CancionesPage from "./pages/CancionesPage";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <div className="p-2 pl-3 pr-3 pl-md-4 pr-md-4">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/canciones" exact component={CancionesPage} />
          <Route path="/acerca" exact component={AcercadePage} />
          <Route path="/contacto" exact component={ContactoPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
