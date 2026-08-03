import { NavLink } from 'react-router-dom';
import home from '../pages/home.jsx';
import contacs from '../pages/contacs.jsx';
import products from '../pages/products.jsx';
import './layout.css';

const layout = ()=>{
    return(
        <ul>
            <li><NavLink to={home}>home</NavLink></li>
            <li><NavLink to={contacs}>contacs</NavLink></li>
            <li><NavLink to={products}>products</NavLink></li>
        </ul>
    )
}
export default layout;