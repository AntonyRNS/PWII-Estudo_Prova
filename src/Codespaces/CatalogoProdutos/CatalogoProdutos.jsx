import { useState } from "react";



function CatalogoProduto(){
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Notebook", preco: 3500, disponivel: true },
        { id: 2, nome: "Smartphone", preco: 2500, disponivel: false },
        { id: 3, nome: "Fone de Ouvido", preco: 300, disponivel: true },
        { id: 4, nome: "Monitor", preco: 1200, disponivel: false }
    ])
    
    const [visivel, setVisivel] = useState(true)
    
    return(
        <div>
            <h3>Bem vindo(a)! Esses são todos nossos produtos: </h3>
            {visivel
            ? <ul>{produtos.map((produto) => <li key='produto.id'>{produto.nome}</li>)}</ul>
            : <ul>{produtos.map((produto) => <li key='produto.id'>{produto.nome}</li>)}</ul>}
            

            
            

        </div>


    );
}





export default CatalogoProduto;

