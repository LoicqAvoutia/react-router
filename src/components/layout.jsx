import { NavLink } from 'react-router-dom';
import Home from '../pages/home.jsx';
import Contacs from '../pages/contacs.jsx';
import Products from '../pages/products.jsx';
import './layout.css';

const layout = ()=>{
    return(
        <ul>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/contatti'>contacs</NavLink>
            <NavLink to='/prodotti'>products</NavLink>
        </ul>
    )
}
export default layout;