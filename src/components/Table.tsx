import Cliente from "../core/Cliente";
import { IconDelete } from "./IconDelete";
import { IconEdit } from "./IconEdit";
import { IconEye } from "./IconEye";

interface TableProps {
  clientes: Cliente[];
  clienteSelected?: (cliente: Cliente) => void;
  clienteExcluded?: (clinte: Cliente) => void;
  clienteVizualize?: (cliente: Cliente) => void;
}
export default function Table(props: TableProps) {
  const showActions =
    props.clienteExcluded || props.clienteSelected || props.clienteExcluded;

  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? <th className=" text-left p-4">Ações</th> : false}
      </tr>
    );
  };
  const renderData = () => {
    return props.clientes?.map((cliente, index) => {
      console.log(props.clientes);
      return (
        <tr
          key={cliente.id}
          className={`${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {showActions ? renderActions(cliente) : false}
        </tr>
      );
    });
  };
  const renderActions = (cliente: Cliente) => {
    return (
      <td className="flex justify-center">
        {props.clienteSelected ? (
          <button
            onClick={() => props.clienteSelected?.(cliente)}
            className={`flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1`}
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {props.clienteExcluded ? (
          <button
            onClick={() => props.clienteExcluded?.(cliente)}
            className={`flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1`}
          >
            {IconDelete}
          </button>
        ) : (
          false
        )}
        {props.clienteVizualize ? (
          <button
            onClick={() => props.clienteVizualize?.(cliente)}
            className={`flex justify-center items-center text-blue-600 rounded-full hover:bg-purple-50 p-2 m-1`}
          >
            {IconEye}
          </button>
        ) : (
          false
        )}
      </td>
    );
  };
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100`}
      >
        {renderHeader()}
      </thead>

      <tbody>{renderData()}</tbody>
    </table>
  );
}
