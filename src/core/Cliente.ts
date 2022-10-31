export default class Cliente {
    private _id: string;
    private _nome: string;
    private _idade: number;

    constructor(id: string = "", nome: string, idade: number) {
        this._id = id;
        this._nome = nome;
        this._idade = idade;
    }
    static empty() {
        return new Cliente('', '', 0)
    }
    get id(): string {
        return this._id;
    }
    get nome(): string {
        return this._nome;
    }
    get idade(): number {
        return this._idade;
    }
}
