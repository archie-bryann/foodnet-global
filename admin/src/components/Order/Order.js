import React, { Fragment } from 'react'
import './Order.css'
import {sentenceCase} from 'sentence-case'
import moment from "moment"
import { Link } from 'react-router-dom'

function Order({id,subtotal,logisticFee,status,total,timestamp}) {

    console.log(subtotal)
    console.log(logisticFee)
    console.log(total)

    const today = "Before 8pm today";
    const tomorrow = "Before 8pm tomorrow";

    function deadline(timestamp) {
        const format = 'hh:mm:ss';
        const time = moment(timestamp);
        const checkerTime = moment('17:00:00',format);
        if(time.format('dddd') === 'Sunday' && time.isBefore(checkerTime)) {
            /** set order arrival to next day */
            return tomorrow;
        } else {
            if(time.isAfter(checkerTime)) {
                return tomorrow;
            } else {
                return today;
            }
        }
    }

    return (
        <Fragment>
            <Fragment>
            <tr>
                <td>
                    <div className = "cart-info-2">
                        <div>
                            <p>Order {id}</p>
                            <a href = {`/order/${id}`}>See more</a>
                        </div>
                    </div>
                </td>
                {/* {<td><i>{sentenceCase(status)}</i></td>} */}
                <td>{moment.unix(timestamp).format("MM/DD/YYYY [at] h:mm a")}</td>
                <td>{deadline()}</td>
                <td>{Number(subtotal).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td>{Number(logisticFee).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td>{(Number(total)-(Number(subtotal)+Number(logisticFee))).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td>{Number(total).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td>{(status==='pending')&&(<Link to = {`/update/order/${id}`} className = "btn">Update</Link>)}</td>
            </tr>       
        </Fragment>  
        </Fragment>
    )
}

export default Order
