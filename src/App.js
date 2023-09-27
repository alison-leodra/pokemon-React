
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import PokemonVersion1 from "./components/PokemonVersion1";
import Error404 from "./pages/Error404";
import Evolutions from "./pages/Evolutions";
import Types from "./pages/Types";
import Home from "./pages/home";
import Header from "./components/Header/Header";



function App() {

  return (
<div>
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={()=><Home />}/>
        <Route path='/inicio' exact component={()=><Home />}/>
        <Route path='/v1' exact component={()=><PokemonVersion1 />}/>
        <Route path='/Evoluciones' exact component={()=><Evolutions />}/>
        <Route path='/Tipos' exact component={()=><Types />}/>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
