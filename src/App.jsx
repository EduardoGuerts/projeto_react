import { HashRoute, Routes, Route } from "react-router-dom";
import Formulario from "./pages/Formulario";
import Login from "./pages/Login";
import AreaProfessor from "./pages/AreaProfessor";
import Gabarito from "./pages/Gabarito";
import DetalhesAluno from "./pages/DetalhesAluno";


function App() {
    return(
        <>
            <div>
                <HashRoute>
                <Routes>
                    <Route path="/projeto_react" element={<Formulario />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/AreaProfessor" element={<AreaProfessor />} />
                    <Route path="/Gabarito" element={<Gabarito />} />
                    <Route path="/DetalhesAluno/:id" element={<DetalhesAluno />} />
                </Routes>
            </HashRoute>
            </div>
        </>
    )
}
export default App
