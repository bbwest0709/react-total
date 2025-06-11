import React from 'react'
import { Link } from 'react-router-dom';
import "./scss/header.scss"
import { useCartStore } from '../store/useStrore';

type MenuItem = {
    key: string;
    label: string;
}
const menus: MenuItem[] = [
    { key: 'man', label: "남자" },
    { key: 'woman', label: "여자" },
    { key: 'jewelery', label: "주얼리" },
    { key: 'electric', label: "전자제품" }
]
const Header = () => {
    const { cartCount, currentUser, logout } = useCartStore();
    const username = currentUser?.email ? currentUser.email.split("@")[0] : null;
    return (
        <header>
            <div className="content-inner">
                <div className="header-left">
                    <h1 className="header-left">
                        <Link to="/"><img className='logo' src='./images/logo.svg' alt='logo' /></Link>
                    </h1>
                    <nav>
                        <ul>
                            {menus.map((menu) => <li key={menu.key}><Link to={`${menu.key}`}>{menu.label}</Link></li>)}
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    <ul>
                        {currentUser ? (
                            <>
                                <li>
                                    <Link to="/logout">
                                        <img src='./images/loginPassword.png' alt='' />
                                        <p>{username}</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/member" onClick={logout}>
                                        <img src="./images/loginMember.png" alt='' />
                                        <p>LOGOUT</p>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">
                                        <img src='./images/loginPassword.png' alt='' />
                                        <p>LOGIN</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/signup">
                                        <img src="./images/loginMember.png" alt='' />
                                        <p>MEMBER</p>
                                    </Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link to="/cart">
                                <img src="./images/cart.png" alt='' />
                                <p>장바구니<span>{cartCount}</span></p>
                            </Link>
                        </li>
                    </ul>
                    <div className="search-btn">
                        <input type="text" placeholder='search' />
                        <p className='search-icon'><img src="./images/search.png" alt='' /></p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
