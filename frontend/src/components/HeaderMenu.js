
import React from 'react';
import { Link } from 'react-router';
import './HeaderMenu.css';
import PropTypes from 'prop-types';

const LogoItem = ({active, children, to}) => (
    <Link to={to} className="logo-item">
            {children}
    </Link>
)

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const HeaderMenu = () => {
    return (
        <div>
            <div className="logo">
                <LogoItem to={'/'}>TRACKLINE</LogoItem>
            </div>
            <div className="menu">
                <MenuItem to={'/shop'} >Shop</MenuItem>
                <MenuItem to={'/lookbook'} >Lookbook</MenuItem>
                <MenuItem to={'/board'} >Post</MenuItem>
                {/* //active={router.isActive('/board')} */}
            </div>
        </div>
    );
};

export default HeaderMenu;