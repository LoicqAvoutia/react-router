import { useEffect } from 'react';
import './products.css';
import { Link, useNavigate, useParams } from "react-router";

const products = props =>{
    console.log(props.prodotti);
    const navigate = useNavigate();
    const { id } = useParams();

    
    return (
        <>
        {props.prodotti.map(prodotto=>{
            return (
            <div key={prodotto.id} className="card">
                <img src={prodotto.image} alt={prodotto.title} />
                <h3>{prodotto.title}</h3>
                <Link to={String(prodotto.id)}>pagina prodotto</Link>
            </div>
        )})}
        </>
    )
}
export default products;