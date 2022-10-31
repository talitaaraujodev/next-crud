import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("1adf", "Ana", 20),
    new Cliente("10d8", "Creuza", 25),
    new Cliente("25df", "Jubileu", 42),
  ];
  function clienteSelected(cliente: Cliente) {
    console.log("Editando...", cliente);
  }
  function clienteExcluded(cliente: Cliente) {
    console.log("Excluindo...", cliente);
  }
  function clienteVizualize(cliente: Cliente) {
    console.log("Visualizando...", cliente);
  }
  function saveCliente(cliente: Cliente) {
    console.log(cliente);
  }

  const [visible, setVisible] = useState<"tabela" | "form">("tabela");
  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500`}
    >
      <Layout title="Clientes">
        {visible === "tabela" ? (
          <>
            <div className="flex justify-end align-center">
              <Button
                color="gray"
                className="mb-4"
                onClick={() => setVisible("form")}
              >
                Novo Cliente
              </Button>
            </div>
            <Table
              clientes={clientes}
              clienteSelected={clienteSelected}
              clienteExcluded={clienteExcluded}
              clienteVizualize={clienteVizualize}
            />
          </>
        ) : (
          <>
            <div className="flex justify-end align-center">
              <Button color="gray" className="mb-4">
                Novo Cliente
              </Button>
            </div>
            <Form
              cliente={clientes[2]}
              cancel={() => setVisible("tabela")}
              onChange={saveCliente}
            />
          </>
        )}
      </Layout>
    </div>
  );
}
