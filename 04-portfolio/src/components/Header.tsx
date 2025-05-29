import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const { isLoggedIn, userId, logout } = useAuth();
    const handleLogout = () => {
        logout();
    }

    return (
        <div>
            <header>
                <div className="inner">
                    <h1 className="logo"><Link to="/">logo</Link></h1>
                    <nav>
                        <ul className="main-menu">
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/skils">skils</Link></li>
                            <li>
                                {isLoggedIn ? (
                                    <div>
                                        <span>{userId}</span>
                                        <button onClick={handleLogout}>로그아웃</button>
                                    </div>
                                ) : (<Link to="/login">login</Link>)}
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div >
    )
}

export default Header;