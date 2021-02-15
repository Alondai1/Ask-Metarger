import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

// import brand from '../assets/imgs/brand.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';


function Navbar() {



    return (
        <nav className="main-container">

            <div>
                <Link to="/">
                    <span className="brand">AZULAY JS</span>
                    {/* <img className="brand" src={brand} alt="" srcset=""/> */}
                </Link>

            </div>


            <div>
                <NavLink to="/login">כניסה</NavLink> |
                <NavLink exact to="/ask">שאל מתרגל</NavLink> |
                {/* <NavLink to="/signup">הרשמה</NavLink> | */}
                <NavLink to="/about">עלינו</NavLink>
               

                {/* <span className="phone">
                    <span>תמיכה טכנית</span>
                   <span> 050-555-5555 </span> 
                    <PhoneIcon className="phone-icon"></PhoneIcon>
                </span> */}

            </div>



            <div className="social-icons">
                <FacebookIcon></FacebookIcon>
                <MailOutlineOutlinedIcon></MailOutlineOutlinedIcon>
                <InstagramIcon></InstagramIcon>

            </div>


        </nav>

    )
}

export default Navbar



