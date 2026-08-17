import { useEffect, useState } from 'react';
import './products.css';
import { Link, useNavigate, useParams } from "react-router";
import { usebudget } from '../context/budgetcontext';

const products = props =>{
    const budget = usebudget();
    const [search, setSearch] = useState("");

    console.log(props.prodotti);

    const navigate = useNavigate();

    const { id } = useParams();

    const filteredProducts = props.prodotti.filter((product) =>
        product.title.toLowerCase().startsWith(search.toLowerCase())
        && product.price<= budget.budget
    );

    const productsToShow =
    filteredProducts.length === 0 && budget.budget === ""
    ? props.prodotti
    : filteredProducts;

    return (
        <>
        <h1>cerca prodotto</h1>
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cerca prodotto..."
        />
        <h1>filtra per prezzo</h1>
        <input
        value={budget.budget}
        onChange={(e) => budget.setbudget(e.target.value)}
        placeholder="Cerca prodotto..."
        />
        {productsToShow.map(prodotto=>{
            return (
            <div key={prodotto.id} className="card">
                <img src={prodotto.image} alt={prodotto.title} />
                <h3>{prodotto.title}</h3>
                <Link to={String(prodotto.id)}>pagina prodotto</Link>
            </div>
        )})}
        {console.log(budget.budget)}
        </>
    )
}
export default products;