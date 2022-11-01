import Cliente from "./Cliente";

export default interface ClienteRepository {
  save(cliente: Cliente): Promise<Cliente | void>;
  delete(cliente: Cliente): Promise<void>;
  findAll(): Promise<Cliente[]>;
}
