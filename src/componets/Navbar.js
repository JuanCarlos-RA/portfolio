import {
    Nav,
    NavLink,
    NavMenu,
} from './NavbarElements';


const Navbar = () => {
    return (

        <>
            <Nav>
                <NavMenu>
                    <NavLink to='./aboutme'>About Me</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;