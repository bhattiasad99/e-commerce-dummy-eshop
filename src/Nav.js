import React, { useContext } from 'react'
import styles from './Nav.module.css'
import { FcSearch } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from './store/CartContext/cart-context'

const Nav = (props) => {
    const cartCtx = useContext(CartContext)
    return (
        <nav>
            <div className={styles.logoBox}>
                <img className={styles.logoImage} src="https://cdn3.vectorstock.com/i/1000x1000/95/32/online-shop-logo-ecommerce-logo-design-vector-32009532.jpg" alt="sample-picture" />
            </div>
            <div className={styles.searchBarContainer}>
                <input className={styles.searchBar} />
                <span className={styles.searchBarIcon}>
                    <FcSearch style={
                        {
                            opacity: '0.8',
                            background: 'transparent',
                            width: '33px',
                            cursor: 'pointer',
                        }
                    } />
                </span>
            </div>
            <div className={styles.lists}>
                {/* 
                LINKS IN CASE WE WANT TO BUILD TABS
                <ul className={styles.links}>
                    <li className={styles.link}>first </li>
                    <li className={styles.link}>second </li>
                    <li className={styles.link}> third </li>
                </ul> */}
                <ul className={styles.authen}>
                    <li className={styles.authenLogin}><button className={styles.btn}>Log in</button></li>
                    <li className={styles.authenSignup}><button className={styles.btn}>Sign up</button></li >
                </ul >
                <button className={styles.cartBox}>
                    <span className={styles.cartText}><FaShoppingCart style={{}} /></span>
                    <span className={styles.cartCount}>{cartCtx.totalQuantity}</span>
                </button>
            </div >
        </nav >
    )
}

export default Nav
