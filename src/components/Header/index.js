import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

const Header = () => (
    <header id="main-header">
        <Link to='/' >Go React</Link>
    </header>
);
export default Header;