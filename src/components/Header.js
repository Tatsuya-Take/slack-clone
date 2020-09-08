import React from 'react';
import '../styles/Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutLineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <dev className="header__left">
        <Avatar
            className="header__avatar"
            alt={user?.displayName}
            src={user?.photoURL}
        />
        <AccessTimeIcon />
      </dev>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="search clever programmer" />
      </div>
      <div className="header__right">
        <HelpOutLineIcon />
      </div>
    </div>
  )
}

export default Header;
