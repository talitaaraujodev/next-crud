import { useState } from "react";

export default function useTableOuForm() {
    const [visivel, setVisivel] = useState<'table' | 'form'>('table')

    const exibirTable = () => setVisivel('table')
    const exibirForm = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'table',
        exibirTable,
        exibirForm,
    }
}