import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import hero from '../assets/imgs/hero.svg'

import CircularProgress from '@material-ui/core/CircularProgress';


export default  function Home() {



    return (

        <div className="home main-container">

            <img className="hero" src={hero} alt="" />
            <h2>שאל מתרגל</h2>

            <p>

                במשך מחזורים רבים אספנו את חוכמתם,
                תבונתם ונסיון התרגול של עשרות מתרגלים כדי לבנות את הכלי הזה,
                שמאפשר לבחור מתרגל, לשאול אותו שאלה ולקבל מענה תוך שניות בודדות.
            </p>
            <Link className="start-btn" to="/ask">התחילו</Link>

            {
                // (isLoading) ? <CircularProgress className="loader" color="secondary" /> : <ItemList items={items}></ItemList>
            }

        </div>
    )
}

