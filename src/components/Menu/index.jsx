import React from "react";
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav id="menu">
            <h1>Menu Principal</h1>
            <ul className="ul">
                <li><Link to="/" className="buttons">Recém-nascido</Link></li>
                <li><Link to="/ummes" className="buttons">Primeiro Mês</Link></li>
                <li><Link to="/doismeses" className="buttons">2 - 3 Meses</Link></li>
                <li><Link to="/quatromeses" className="buttons">4 - 5 Meses</Link></li>
                <li><Link to="/seismeses" className="buttons">6 Meses</Link></li>
                <li><Link to="/novemeses" className="buttons">9 Meses</Link></li>
                <li><Link to="/dozemeses" className="buttons">12 Meses</Link></li>
                <li><Link to="/dezoitomeses" className="buttons">18 Meses</Link></li>
                <li><Link to="/doisanos" className="buttons">2 anos</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;
