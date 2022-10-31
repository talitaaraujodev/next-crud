import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [new Cliente("1adf", "Ana", 20)];
  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500`}
    >
      <Layout title="Clientes">
        <Table clientes={clientes} />
      </Layout>
    </div>
  );
}
