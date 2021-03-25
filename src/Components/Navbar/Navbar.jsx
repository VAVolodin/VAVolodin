import React from 'react';
import ns from './Navbar.module.css';


const NavBar = () => {
    return (
<nav className={ns["App-nav"]}>
        <ul>
          <li className={ns.item}>
            <a href="/Profile">Profile</a>
          </li>
          <li className={ns.item}>
            <a href="/Dialogs">Messages</a>
          </li>
          <li className={ns.item}>
            <a href="#s">News</a>
          </li>
          <li className={ns.item}>
            <a href="#s">Musisc</a>
          </li>
          <li className={ns.item}>&nbsp;</li>
          <li className={ns.item}>
            <a href="#s">Settings</a>
          </li>
        </ul>
      </nav>
    )
}

export default NavBar