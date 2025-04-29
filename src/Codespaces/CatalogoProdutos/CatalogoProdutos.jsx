import { useState } from "react";



function CatalogoProduto() {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Notebook", preco: 3500, disponivel: true },
        { id: 2, nome: "Smartphone", preco: 2500, disponivel: false },
        { id: 3, nome: "Fone de Ouvido", preco: 300, disponivel: true },
        { id: 4, nome: "Monitor", preco: 1200, disponivel: false }
    ])
    const produtos_disponiveis = [produtos.filter(produto => produto.disponivel === true)]

    const [visivel, setVisivel] = useState(true)

    return (
        <div>
            <h3>Bem vindo(a)! Esses são todos nossos produtos: </h3>
            {visivel
                ? <ul style={{ color: 'red' }}>{produtos.map((produto) =>
                    <li key='produto.id'>

                        {produto.nome}

                    </li>)}
                </ul>

                : <ul>{produtos.filter(produto => produto.disponivel === true).map((produto) =>
                    <li key='produto.id'>

                        {produto.nome}

                    </li>)}
                </ul>}
            <ul>
                {produtos.map(produto => {
                    if (produto.disponivel === true) {
                        return <li key={produto.id} style={{color:'green'}}>{produto.nome}</li>

                    }else{
                        return <li key={produto.id} style={{color:'red'}}>{produto.nome}</li>
                    }


                })}
            </ul>




            {visivel
                ? <button onClick={() => setVisivel(!visivel)}>Mostrar apenas disponiveis</button>
                : <button onClick={() => setVisivel(!visivel)}>Mostrar todos os produtos</button>}


        </div>


    );
}





export default CatalogoProduto;

