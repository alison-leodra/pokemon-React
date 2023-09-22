
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokemonVersion1 from "./components/PokemonVersion1";
import Error404 from "./components/Error404";
import Evolutions from "./components/Evolutions";
import Types from "./components/Types";



function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/v1' element={<PokemonVersion1 />}></Route>
        <Route path='/*' element={<Error404 />}></Route>
        <Route path='/evolutions*' element={<Evolutions />}></Route>
        <Route path='/types*' element={<Types />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
