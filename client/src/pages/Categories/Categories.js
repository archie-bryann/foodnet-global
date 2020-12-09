import React, {useState,useEffect} from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';

function Categories({title, apiRootUrl, clientRootUrl, match, loggedInStatus,cartNum, token, imagesRootUrl}) {

    const [categories, setCategories] = useState([]);

    return (
        <React.Fragment>
            <Header title = {title} clientRootUrl = {clientRootUrl} match = {match} loggedInStatus = {loggedInStatus} cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl} />

            <div className = "container">
                <div className = "row">
                   <FeaturedCategories apiRootUrl = {apiRootUrl} />
                </div>
            </div>

        </React.Fragment>
    )
}

export default Categories
