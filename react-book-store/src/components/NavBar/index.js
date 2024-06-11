import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavElement";

const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>

                    <NavLink to="/">
                        BookStore
                    </NavLink>

                    <NavLink to="/cart">
                        Cart
                    </NavLink>

                    <NavLink to="/signup">
                        Sign Up
                    </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar;