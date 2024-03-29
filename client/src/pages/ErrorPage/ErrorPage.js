import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import './ErrorPage.css'
import {Link} from 'react-router-dom'

function ErrorPage({title,clientRootUrl, loggedInStatus, cartNum, token, imagesRootUrl }) {
    document.title = `Page Not Found - ${title}`;

    return (
        <React.Fragment>
            <Header title = {title} clientRootUrl = {clientRootUrl}  loggedInStatus = {loggedInStatus} cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl} />
            <div style = {{height:'50px'}}></div>
            <div className = "container center-div">
                    <h1>404</h1>
                    <h4>Opps! Page not found</h4>
                    <p>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
                    <Link to = "/" className = "btn">Back to Home</Link>
            </div>
            <div style = {{height:'250px'}}></div>
        </React.Fragment>
    )
}

export default ErrorPage;
