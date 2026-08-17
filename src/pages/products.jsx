import { useEffect, useState } from 'react';
import './products.css';
import { Link, useNavigate, useParams } from "react-router";

const products = props =>{
    const [search, setSearch] = useState("");
    console.log(props.prodotti);
    const navigate = useNavigate();
    const { id } = useParams();
    const filteredProducts = props.prodotti.filter((product) =>
        product.title.toLowerCase().startsWith(search.toLowerCase())
    );
    const productsToShow =
    filteredProducts.length === 0
    ? props.prodotti
    : filteredProducts;
    
    /*
    
    */
    
    return (
        <>
        <h1>cerca prodotto</h1>
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
        {console.log(filteredProducts)}
        </>
    )
}
export default products;