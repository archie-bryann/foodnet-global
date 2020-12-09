import React, { Fragment, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header'
import axios from 'axios';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from '../../components/Loader/Loader';
import {sentenceCase} from 'sentence-case'
import OrderProduct from '../../components/OrderProduct/OrderProduct';
import moment from 'moment'

toast.configure();

function OrderDetails({title, apiRootUrl, clientRootUrl, loggedInStatus, match, cartNum, requireAuth, token, errorMessage, imagesRootUrl}) {
    

    const {orderId} = match.params;

    document.title = `Order ${orderId} - ${title}`;
 
    const [status, setStatus] = useState('');
    const [subtotal, setSubtotal] = useState(0);
    const [delivery, setDelivery] = useState(0);
    const [total, setTotal] = useState(0);
    const [orderProducts, setOrderProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [redr,setRedr] = useState(false);
    const [timestamp,setTimestamp] = useState(null);
    const [note,setNote] = useState(null);


    /** check timestamp */
    const today = "Your order will be delivered before 8pm today.";
    const tomorrow = "Your order will be delivered before 8pm tomorrow.";
    /** ./end of FormStates */


    useEffect(()=>{
        const format = 'hh:mm:ss';
        const time = moment(timestamp);
        const checkerTime = moment('17:00:00',format);

        if(time.isAfter(checkerTime)) {
            setNote(tomorrow);
        } else {
            setNote(today);
        }
    }, [timestamp])

    useEffect(()=>{
        axios.get(`${apiRootUrl}order/d/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({data})=>{
            setLoading(false);
            console.log(data)
            setStatus(data.status);
            setSubtotal(data.subtotal);
            setDelivery(data.delivery);
            setTotal(data.total);
            setOrderProducts(data.orderedProducts)
        }).catch(err=>{
            setLoading(false);
            // redirect to /404
            setRedr(true);
        })
    }, [apiRootUrl])

    return (
        <Fragment>
            {requireAuth()}
            {loading&&<Loader />}
            {redr&&<Redirect to = "/404" />}
            <Header title = {title} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus} cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl}/>
            <br />
            <br />
            <div className = "small-container cart-page">
                <div className = "row row-2" style = {{marginTop:'-5px'}}>
                    <h3>Order {orderId}</h3>
                    <span><i>{sentenceCase(status)}</i></span>
                </div>

                <div style = {{height:'15px'}}></div>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    {
                        orderProducts && (
                            orderProducts.map(({id,productId,price,quantity,orderId})=><OrderProduct key = {id} productId = {productId} price = {price} quantity = {quantity} orderId = {orderId} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} errorMessage = {errorMessage} />)
                        )
                    }
                </table>
                <div className = "total-price">
                    <table>
                        <tr>
                            <td><b>Subtotal</b></td> 
                            <td>₦{Number(subtotal).toLocaleString(undefined, {maximumFractionDigits:2})}</td> 
                        </tr>
                        <tr>
                            <td><b>Delivery</b></td> 
                            <td>₦{Number(delivery).toLocaleString(undefined, {maximumFractionDigits:2})}</td> 
                        </tr>
                        <tr>
                            <td><b>Total</b></td> 
                            <td>₦{Number(total).toLocaleString(undefined, {maximumFractionDigits:2})}</td> 
                        </tr>
                    </table>
                </div>
                <br />
                <ul>
                    <li style = {{textDecoration:'underline'}}><b>*</b>{(status==='pending')&&(<u>{note}</u>)}</li>
                </ul>
                {/* show only if the order is cancelled */}
                {/* <div className = "order-div">
                <button className = "btn">Re-order</button>
                </div> */}
                {/* for pending orders only */}
                {/* <div className = "order-div">
                <button className = "btn">Cancel</button>
                </div> */}
                <br />
                <br />
                <br />
            </div>
        </Fragment>
    )
}

export default OrderDetails
