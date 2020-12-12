import React, { Fragment } from 'react'

function Subhead({children}) {
    return (
        <Fragment>
            <br />
                <h2>{children}</h2>
            <br />
        </Fragment>
    )
}

export default Subhead
