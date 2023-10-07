import { FormEvent, useCallback } from "react";
import ReactModal from "react-modal";
import { Pet } from "../types/Pet";
import { SubmitHandler, useForm } from "react-hook-form";
import PetForm from "./PerForm";

interface PetProps {
  isOpen: boolean;
  closeModal: () => void;
  pet: Pet;
  handlePetEdited: (pet: Pet, index: number) => void;
  index: number;
}

const PetEdit = ({
  isOpen,
  closeModal,
  pet,
  handlePetEdited,
  index,
}: PetProps) => {
  console.count();
  const { register, handleSubmit } = useForm<Pet>();

  const onSubmit: SubmitHandler<Pet> = useCallback(
    (data: Pet) => {
      handlePetEdited(data, index);
    },
    [handlePetEdited, index]
  );

  const registerSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      await handleSubmit(onSubmit)(event);
      closeModal();
    },
    [handleSubmit, onSubmit, closeModal]
  );

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit"
      ariaHideApp={false}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <PetForm
              register={register}
              registerSubmit={registerSubmit}
              pet={pet}
            ></PetForm>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default PetEdit;
