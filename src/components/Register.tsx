import { Dispatch, FormEvent, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Pet } from "../types/Pet";
import PetForm from "./PerForm";

interface PetProps {
  setPet: Dispatch<Pet[]>;
  pets: Pet[];
}

const Register = ({ setPet, pets }: PetProps) => {
  const { register, handleSubmit } = useForm<Pet>();

  const onSubmit: SubmitHandler<Pet> = useCallback(
    (data: Pet) => {
      setPet([...pets, data]);
    },
    [pets, setPet]
  );
  
  const registerSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      await handleSubmit(onSubmit)(event);
    },
    [handleSubmit, onSubmit]
  );

  return (
    <PetForm register={register} registerSubmit={registerSubmit}></PetForm>
  );
};

export default Register;
