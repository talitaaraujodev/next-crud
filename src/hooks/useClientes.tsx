import { useEffect, useState } from "react";
import { CollectionCliente } from "../backend/database/CollectionCliente";
import Cliente from "../core/Cliente";
import ClienteRepository from "../core/ClienteRepository";
import useTableOuForm from "./useTableOuForm";

export default function useClientes() {
  const repo: ClienteRepository = new CollectionCliente();

  const { tabelaVisivel, exibirTable, exibirForm } = useTableOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.empty());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.findAll().then((clientes) => {
      setClientes(clientes);
      exibirTable();
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirForm();
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.delete(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.empty());
    exibirForm();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.save(cliente);
    obterTodos();
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTable,
  };
}
