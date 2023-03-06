import { NavLink } from "react-router-dom";

function Header() {
    return <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                {/*<a href="/">Home</> */}
                <NavLink to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
                {/*<a href="/contact">Contact</> */}
                <NavLink to="/contact" end>Contact</NavLink>
            </li>
            <li className="nav-item">
                {/*<a href="/projects">Projects</> */}
                <NavLink to="/projects" end>Projects</NavLink>
            </li>
        </ul>
    </>
}

export default Header;