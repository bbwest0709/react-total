import React from 'react'
import { Link } from 'react-router-dom';
import "./scss/header.scss"

type MenuItem = {
    key: string;
    label: string;
}
const menus:MenuItem[] = [
    {key: 'man', label: "남자"},
    {key: 'woman', label: "여자"},
    {key: 'jewelery', label: "주얼리"},
    {key: 'electric', label: "전자제품"}
]
const Header = () => {
  return (
    <header>
        <div className="content-inner">
            <div className="header-left">
                <h1 className="header-left">
                    <Link to="/"><img className='logo' src='./images/logo.svg' alt='logo'/></Link>
                </h1>
                <nav>
                    <ul>
                        {menus.map((menu)=> <li key={menu.key}><Link to={`${menu.key}`}>{menu.label}</Link></li>)}
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <ul>
                    <li>
                        <Link to="/login">
                        <img src='./images/loginPassword.png' alt=''/>
                        <p>LOGIN</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                        <img src="./images/loginMember.png" alt=''/>
                        <p>MEMBER</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                        <img src="./images/cart.png" alt=''/>
                        <p>장바구니<span>0</span></p>
                        </Link>
                    </li>
                </ul>
                <div className="search-btn">
                    <input type="text" placeholder='search' />
                    <p className='search-icon'><img src="./images/search.png" alt=''/></p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
