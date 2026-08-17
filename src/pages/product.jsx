import './products.css';
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from 'react'

const product = props =>{
    const { id } = useParams();
    const prodotto =  props.prodotti.find(prodotto=> prodotto.id === Number(id))
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        setTimeout(() =>setLoading(false),600);
    },[id])

    return(
        <>
        {loading ? <h2>loading...</h2> : prodotto &&
            <div key={prodotto.id} className="card">
                <img src={prodotto.image} alt={prodotto.title} />
                <h3>{prodotto.title}</h3>
                <h3>prezzo:{prodotto.price}</h3>
            </div>
        }
        </>
    )
}

export default product;