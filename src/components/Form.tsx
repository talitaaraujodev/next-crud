import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import FormGroup from "./FormGroup";

interface FormProps {
  cliente: Cliente;
  clientChange?: (cliente: Cliente) => void;
  cancel?: () => void;
}
export default function Form(props: FormProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState<string>(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState<number>(props.cliente?.idade ?? 0);

  console.log(nome);
  console.log(idade);
  return (
    <div>
      {id ? (
        <FormGroup value={id} text="Código" onlyReading className="mb-4" />
      ) : (
        false
      )}

      <FormGroup value={nome} text="Nome" className="mb-4" onChange={setNome} />
      <FormGroup
        value={idade}
        text="Idade"
        type="number"
        className="mb-4"
        onChange={setIdade}
      />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.clientChange?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button color="blue" onClick={props.cancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
