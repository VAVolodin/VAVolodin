import React from 'react';
import hc from './Header.module.css';

const Header = () => {
    return (
        <header className={hc['App-header']}>
            <img src='https://img.freepik.com/free-vector/cartoon-funny-dracula-character-mascot-logo_10308-114.jpg' className={hc["App-logo"]} alt="logo" />
            <h2>Header</h2>
        </header>
    )
}

export default Header