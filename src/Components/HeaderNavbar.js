import {NavLink} from 'react-router-dom';
import {UserOutlined, UserAddOutlined} from '@ant-design/icons';

export const HeaderNavbar = () =>{

    const navbarStyle = ({isActive}) =>{
        return {
            fontWeight: isActive ? 'bold': 'normal',
            fontSize: isActive ? '17px':''
            
            //textDecoration: isActive ? 'underline': 'none'
        }
    }
    
    return(
        <>
            <div style={{display:'inline-block', float: 'right'}}>
                <nav className = "nav0">
                    <NavLink to ='login' style={navbarStyle}>
                        <UserOutlined />
                        Login   
                    </NavLink>
                    <NavLink to ='register' style={navbarStyle}>
                        <UserAddOutlined />
                        Register
                    </NavLink>
                </nav>
            </div>
        </>
    )
} 