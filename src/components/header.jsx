
import React from 'react';
import Country from '../common/country';
import SearchIcon from '@material-ui/icons/Search';
import PublicIcon from '@material-ui/icons/Public';
import IconButton from '@material-ui/core/IconButton';
import "../css/header.css"

const Header = ()=>{
    return(
        <div className="header">
            <img
                className="header__logo"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            />
            <div className="header__searchbar">
            <div className="header__container">
               <input type="text"></input>
                <SearchIcon  className="icon__search" color="primary" onClick={()=>console.log("clocked")}></SearchIcon>
            </div>
            </div>
            <div className="header__right">
            <IconButton aria-label="delete">
             <PublicIcon></PublicIcon>
            </IconButton>  
                <Country></Country>
            </div>
        </div>
    )
}

export default Header;