import { Link } from 'react-router-dom';
import logo from '../../public/International_Pokémon_logo.svg.png';
import './navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/pokedex'>Pokedex</Link></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
