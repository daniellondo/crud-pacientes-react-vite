import { FormEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Pet } from '../types/Pet';

interface PetProps {
    registerSubmit: (event : FormEvent) => void;
    register: UseFormRegister<Pet>;
    pet?:Pet
  }

const PetForm = ({ register, registerSubmit,pet }: PetProps) => {
  return (
    <form onSubmit={registerSubmit} className="p-3">
    <div className="mb-3">
      <label className="form-label">Nombe de la mascota</label>
      <input
        className="form-control"
        {...register("petName")}
        placeholder="Nombe de la mascota"
        type="text"
        defaultValue={pet && pet.petName}
        required
      ></input>
    </div>
    <div className="mb-3">
      <label className="form-label">Nombe del propietario</label>
      <input
        className="form-control"
        {...register("ownerName")}
        placeholder="Nombe del propietario"
        type="text"
        defaultValue={pet && pet.ownerName}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        className="form-control"
        {...register("email")}
        placeholder="Email"
        type="email"
        defaultValue={pet && pet.email}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Alta</label>
      <input
        className="form-control"
        {...register("date")}
        type="date"
        defaultValue={pet && pet.date}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Sintomas</label>
      <input
        className="form-control"
        {...register("symptoms")}
        placeholder="Sintomas"
        type="text"
        defaultValue={pet && pet.symptoms}
        required
      />
    </div>
    {
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    }
  </form>
  )
}

export default PetForm