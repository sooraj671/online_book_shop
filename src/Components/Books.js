import {useState, useEffect} from 'react';
import { Input, Space } from 'antd';
import data from './data/data.json'
import { BookList } from './BookList';
import { NavLink, Outlet } from 'react-router-dom';


export const Books = (props) =>{
    const isLoggedIn = props.isLoggedIn;
    const [books, setBooks] = useState([])
    console.log('books prop : ' + isLoggedIn)

    useEffect(()=>{
        setBooks(data)
    }, [])

    const navlinkStyle = ({isActive}) =>{
        return {
            fontWeight: isActive ? 'bold': 'normal',
            fontSize: isActive ? '17px':'',
            padding: "10px",
            margin: "10px", 
            color: "black"
            //textDecoration: isActive ? 'underline': 'none'
        }
    }

    return(
        <>
            <div className="list">
                <br/>
                    <NavLink to=''></NavLink>
                    <NavLink to='book_list' style={navlinkStyle}>Books List</NavLink>
                    <NavLink to='book_search' style={navlinkStyle}>Search Books</NavLink>
                <Outlet/>
            </div>
        </>
    )
}