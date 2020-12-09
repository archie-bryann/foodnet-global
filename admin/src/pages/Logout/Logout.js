import React, { Fragment, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

function Logout({requireAuth}) {

    const [redr,setRedr] = useState(false);

    useEffect(() => {
        localStorage.removeItem("wpt");
        window.location="/login";
    }, [])

    return (
        <Fragment>
            {requireAuth()}
        </Fragment>
    )
}

export default Logout
