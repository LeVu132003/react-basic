import React from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom'
class Header extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/send" activeClassName='active'>Send files</NavLink>
                <NavLink to="/request" activeClassName='active'>Request files</NavLink>
                <NavLink to="/repository" activeClassName='active'>Repository</NavLink>
            </div>
        )
    }
}
export default Header;