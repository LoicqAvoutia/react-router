import './products.css';
import { useNavigate, useParams } from "react-router";

const product = props =>{
    const { id } = useParams();
    const prodotto =  props.prodotti.find(prodotto=> prodotto.id === Number(id))
    return(
        <>
        { prodotto &&
            <div key={prodotto.id} className="card">
                <img src={prodotto.image} alt={prodotto.title} />
                <h3>{prodotto.title}</h3>
            </div>
        }
        </>
    )
}

export default product;