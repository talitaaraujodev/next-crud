import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTable,
  } = useClientes();

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500`}
    >
      <Layout title={`${tabelaVisivel ? "Clientes" : "Novo Cliente"} `}>
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end align-center">
              <Button color="gray" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clientes={clientes}
              clienteSelected={selecionarCliente}
              clienteExcluded={excluirCliente}
            />
          </>
        ) : (
          <>
            <div className="flex justify-end align-center"></div>
            <Form
              cliente={cliente}
              clientChange={salvarCliente}
              cancel={exibirTable}
            />
          </>
        )}
      </Layout>
    </div>
  );
}
