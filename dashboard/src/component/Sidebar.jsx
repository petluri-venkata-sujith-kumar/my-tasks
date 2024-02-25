import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
     
}from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/myprofile",
            name:"Myprofile",
            icon:<FaUserAlt/>
        },
        {
            path:"/batchs",
            name:"Batchs",
            icon:<FaRegChartBar/>
        },
        {
            path:"/employee",
            name:"Employee",
            icon:<FaRegChartBar/>
        },
       
    ]
    return (
        <div className='dashboard'>
            <div className='navbar'>
                
             <div className='leftContainer-nav'>
                {/* <div className='searchContainer'>
                    <span className='searchicon'><ImSearch /></span>
                    <input type="text" placeholder='search'/>
                </div> */}
             </div>
                <div className='rightContainer-nav'>
                    <li>Profile</li>
                    <li>Logout</li>
                </div>
               
            </div>
            <div className="container">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="top_section">
          <div className="logo">
            <img src="logo.png" alt="" style={{ display: isOpen ? 'block' : 'none' }} />
          </div>
          <h5 className='logo-text' style={{ display: isOpen ? 'block' : 'none' }}>ALPHA TEAM</h5>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div style={{display: isOpen ? "block" : "none"}} className="logo"></div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
          </NavLink>
        ))}
      </div>
           
        </div>
        <main className={`${isOpen?"opened":"closed"}`}>{<Outlet/>}</main>

        </div>
    );
};

export default Sidebar;








