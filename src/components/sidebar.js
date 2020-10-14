import React from 'react';

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

import { Link } from 'react-router-dom';

//FontAwesome Stuff
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt, faHome, faShoePrints } from "@fortawesome/free-solid-svg-icons";

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
    <div className="sidebar">
      <ProSidebar className="prosidebar" image="https://picsum.photos/230/135" >
        <Menu iconShape="round">
          <MenuItem > 
            <FontAwesomeIcon icon={faHome} /> Home
            <Link to="/" />
          </MenuItem>
          <MenuItem > 
            <FontAwesomeIcon icon={faTshirt} /> Tops
            <Link to="/tops" />
          </MenuItem>
          <MenuItem > 
            <FontAwesomeIcon icon={faShoePrints} /> Pants
            <Link to="/pants" />
          </MenuItem>         
        </Menu>
      </ProSidebar>
    </div>
   )
};

export default Sidebar;