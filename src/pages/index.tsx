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
  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500`}
    >
      <Layout title="Clientes">
        <Table
          clientes={clientes}
          clienteSelected={clienteSelected}
          clienteExcluded={clienteExcluded}
          clienteVizualize={clienteVizualize}
        />
      </Layout>
    </div>
  );
}
