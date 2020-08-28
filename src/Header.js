import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutLineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <dev className="header__left">
        {/* Avatar for logged in user*/}
        {/* Time icon */}
        <Avatar
            className="header__avatar"
            alt="qazi" //{user?.displayName}
            src="https://kajabi-storefronts-production.global.ssl.fastly.net/theme/s/284832/settings_images/rLlCifgXRJiT0RoNjK_Logo_roundbackbround_black.png"
            //{user?.photoURL}
        />
        <AccessTimeIcon />
      </dev>
      <div className="header__search">
        {/* Search icon */}
        <SearchIcon />
        {/* input */}
        <input placeholder="search clever programmer" />
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutLineIcon />
      </div>
    </div>
  )
}

export default Header;
