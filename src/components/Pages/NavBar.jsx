import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav>
            <Link to="/" id="title">Elite <a id="p">P</a>owe<a id="r">r</a></Link>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/program">Program</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar