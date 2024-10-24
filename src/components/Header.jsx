import { NavLink } from "react-router-dom";

import "./Header.css";

function Header(props) {
    return (
        <div className="Header">
            <header>
                <h1>Welcome to Popcorn Time!</h1>
                <h2>We currently have {props.numberOfMovies} movies available</h2>
            </header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
}

export default Header;