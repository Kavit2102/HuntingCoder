import React from 'react'
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <div>
        <ul className={styles.navbar}>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Blogs">Blogs</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar