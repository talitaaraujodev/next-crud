import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepository from "../../core/ClienteRepository";
import  {  v4  as uuidv4  }  from  'uuid' ; 

export class CollectionCliente implements ClienteRepository {
  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Cliente {
      const dados = snapshot.data(options);
      return new Cliente(dados.id, dados.nome, dados.idade);
    },
  };

  async save(cliente: Cliente): Promise<Cliente | void> {
    if (cliente?.id) {
      console.log(cliente)
      await this.collection().doc(cliente.id).set(cliente);
      return cliente;
    } else {
      const docRef = await this.collection().add(cliente);
      const doc = await docRef.get();
      return doc.data();
    }
  }

  async delete(cliente: Cliente): Promise<void> {
    return this.collection().doc(cliente.id).delete();
  }

  async findAll(): Promise<Cliente[]> {
    const query = await this.collection().get();
    return query.docs.map((doc) => doc.data()) ?? [];
  }

  private collection() {
    return firebase
      .firestore()
      .collection("clientes")
      .withConverter(this.#conversor);
  }
}
