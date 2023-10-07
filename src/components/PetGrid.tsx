import { Dispatch, Suspense, lazy, useCallback, useState } from "react";
import { Pet } from "../types/Pet";
const EditModal = lazy(() => import("./PetEdit"));

interface PetGridProps {
  setPet: Dispatch<Pet[]>;
  pets: Pet[];
}
const PetGrid = ({ setPet, pets }: PetGridProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [indexEdit, setIndex] = useState(0);
  
  const openModal = useCallback((index: number): void => {
    setModalIsOpen(true);
    setIndex(index);
  }, []);

  const closeModal = useCallback((): void => {
    setModalIsOpen(false);
  }, []);

  const handlePetEdited = useCallback(
    (pet: Pet, index: number): void => {
      pets[index] = pet;
      closeModal();
    },
    [closeModal, pets]
  );

  const deletePet = useCallback(
    (index: number): void => {
      const filterPet = pets.filter((x) => x != pets[index]);
      setPet(filterPet);
    },
    [pets, setPet]
  );

  if (pets?.length) {
    return (
      <>
        <ul>
          {pets.map(({ petName, ownerName, email, date, symptoms }, index) => (
            <li key={index}>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <strong>NOMBRE:</strong> {petName}
                    <br />
                    <strong>PROPIETARIO:</strong> {ownerName}
                    <br />
                    <strong>EMAIL:</strong> {email}
                    <br />
                    <strong>FECHA ALTA:</strong> {date}
                    <br />
                    <strong>SÍNTOMAS:</strong> {symptoms}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary"
                      onClick={() => openModal(index)}
                    >
                      Editar
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => deletePet(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {modalIsOpen && (
          <Suspense fallback={<div>Loading...</div>}>
            <EditModal
              isOpen={modalIsOpen}
              closeModal={closeModal}
              handlePetEdited={handlePetEdited}
              pet={pets[indexEdit]}
              index={indexEdit}
            />
          </Suspense>
        )}
      </>
    );
  }
  return <p className="text-center"> No hay mascotas que mostrar</p>;
};

export default PetGrid;
