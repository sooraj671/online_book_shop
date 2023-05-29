import { HeaderNavbar } from "./HeaderNavbar";
import { HeaderLogout } from "./HeaderLogout";
import { useEffect, useState } from "react";

export const Header = (props) =>{

    const isLoggedIn = props.isLoggedIn;
    //const isLoggedIn = {localStorage.getItem('user')=== }
    console.log('header prop: ' + props.isLoggedIn)

    return(
        <div>
            <img alt = "logo" src = "https://media.istockphoto.com/vectors/book-love-logo-template-design-vector-emblem-design-concept-creative-vector-id1329176431?k=20&m=1329176431&s=612x612&w=0&h=RV3qMpUwPBqZSe5CzkcEcdo8_rDs74rH7ftXGTgSUXw=" style={{display:'inline-block', width: '100px', height: '100px'}}/>
            <h2 style={{display:'inline-block'}}>ONLINE BOOK SHOP</h2>
            {isLoggedIn? <HeaderLogout/>: <HeaderNavbar/> }
        </div>
    )
}