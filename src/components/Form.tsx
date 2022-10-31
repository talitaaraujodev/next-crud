import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import FormGroup from "./FormGroup";

interface FormProps {
  cliente: Cliente;
  onChange?: (cliente: Cliente) => void;
  cancel?: () => void;
}
export default function Form(props: FormProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState<string>(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState<number>(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? (
        <FormGroup value={id} text="Código" onlyReading className="mb-4" />
      ) : (
        false
      )}

      <FormGroup value={nome} text="Nome" className="mb-4" />
      <FormGroup value={idade} text="Nome" type="number" className="mb-4" />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.onChange?.(new Cliente(id, nome, idade))}
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
