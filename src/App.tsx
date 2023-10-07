import { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import { Pet } from "./types/Pet";
import PetGrid from "./components/PetGrid";

function App() {
  const [pets, setPet] = useState<Pet[]>([]);

  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="fw-bolder text-center p-3">Seguimientos pacientes <span>Veterinaria</span></h1>
      <div className="d-flex row">
        <div className="col">
          <h2 className="fw-bolder text-center p-3">Seguimiento Pacientes</h2>
          <h5 className="text-center pb-4">Añade pacientes y <span>Administralos</span></h5>
          <Register setPet={setPet} pets={pets} />
        </div>
        <div className="col">
          <h2 className="fw-bolder text-center p-3">Listado Pacientes</h2>
          <h5 className="text-center pb-4">Administa tus <span>Pacientes y Citas</span></h5>
          <PetGrid setPet={setPet} pets={pets} />
        </div>
      
      </div>
    </div>
  );
}

export default App;
