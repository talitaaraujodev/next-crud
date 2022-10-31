import Cliente from "../core/Cliente";

interface TableProps {
  clientes: Cliente[];
}
export default function Table(props: TableProps) {
  const renderHeader = () => {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    );
  };
  const renderData = () => {
    return props.clientes?.map((cliente, index) => {
      return (
        <tr key={cliente.id}>
          <td>{cliente.id}</td>
          <td>{cliente.nome}</td>
          <td>{cliente.idade}</td>
        </tr>
      );
    });
  };
  return (
    <table>
      <thead>{renderHeader()}</thead>

      <tbody>{renderData()}</tbody>
    </table>
  );
}
