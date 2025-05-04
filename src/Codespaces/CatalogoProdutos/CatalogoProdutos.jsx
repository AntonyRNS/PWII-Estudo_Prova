import { useState } from "react";

function CatalogoProduto() {
    const [produtos] = useState([
        { id: 1, nome: "Notebook", preco: 3500, disponivel: true },
        { id: 2, nome: "Smartphone", preco: 2500, disponivel: false },
        { id: 3, nome: "Fone de Ouvido", preco: 300, disponivel: true },
        { id: 4, nome: "Monitor", preco: 1200, disponivel: false }
    ]);

    const [visivel, setVisivel] = useState(true);
    // Não sabia que dava pra fazer isso, muito útil.
    const produtosFiltrados = visivel ? produtos : produtos.filter(p => p.disponivel);

    return (
        <div>
            <h3>Bem-vindo(a)! Esses são nossos produtos:</h3>
            <ul>
                {produtosFiltrados.map(produto => (
                    // Renderização e estilização condicional com operador ternário, extremamente útil.
                    <li key={produto.id} style={{ color: produto.disponivel ? 'green' : 'red' }}>
                        {produto.nome} - R$ {produto.preco} {produto.disponivel ? 'Disponível' : 'Indisponível'}
                    </li>
                ))}
            </ul>
            <button onClick={() => setVisivel(!visivel)}>
                {visivel ? 'Mostrar apenas disponíveis' : 'Mostrar todos os produtos'}
            </button>
        </div>
    );
}

export default CatalogoProduto;
