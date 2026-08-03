import './products.css'

const products = props =>{
    console.log(props.prodotti);
    return (
        <>
        {props.prodotti.map(prodotto=>{
            return (
            <div key={prodotto.id} className="card">
                <img src={prodotto.image} alt={prodotto.title} />
                <h3>{prodotto.title}</h3>
            </div>
        )})}
        </>
    )
}
export default products;