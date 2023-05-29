import { NavLink } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, ShoppingOutlined, ContactsOutlined } from '@ant-design/icons';

export const Navbar = ()=>{
    const navbarStyle = ({isActive}) =>{
        return {
            fontWeight: isActive ? 'bold': 'normal',
            fontSize: isActive ? '17px':''
            
            //textDecoration: isActive ? 'underline': 'none'
        }
    }
    return(
        <>
            <nav className="nav1">
                <NavLink style = {navbarStyle} to ='home'>
                    <HomeOutlined />
                    Home
                </NavLink>
                <NavLink style = {navbarStyle} to ='about'>
                    <InfoCircleOutlined />
                    About
                </NavLink>
                <NavLink style = {navbarStyle} to ='books'>
                    <ShoppingOutlined />
                    Buy Books
                </NavLink>
                <NavLink style = {navbarStyle} to ='contact'>
                    <ContactsOutlined />
                    Contact Us
                </NavLink>
            </nav>  
        </>
    )
}
export default Navbar;