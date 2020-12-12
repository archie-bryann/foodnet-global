import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Order from '../../components/Order/Order';

toast.configure();

function Orders({apiRootUrl,token,requireAuth,errorMessage,location}) {

    const [loading,setLoading]=useState(false);
    const [orders,setOrders]=useState([]);
    
    useEffect(()=>{
        setLoading(true);
        axios.get(`${apiRootUrl}order`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({data})=>{
            setLoading(false);
            setOrders(data);
        }).catch(err=>{
            setLoading(false);
            toast.error(errorMessage, {
                position: toast.POSITION.BOTTOM_LEFT
            })
        })
    }, [])

    return (
        <Fragment>
            {requireAuth()}
            {loading&&<Loader/>}
            <main>
                <div className = "main__container">
                    <h2 style = {{marginBottom:'15px'}}>Orders</h2>
                    <table>
                        <tr>
                        <th>Order</th>
                            <th>Date</th>
                            <th>Deadline</th>
                            <th>Market Fee (₦)</th>
                            <th>Delivery Fee (₦)</th>
                            <th>Profit (₦)</th>
                            <th>Total (₦)</th>
                            <th>Action</th>
                        </tr>
                        {orders.map((order)=>{
                            console.log(order)
                        })}
                        {orders.map(({id,subtotal,logisticFee,status,total,timestamp,userId})=><Order key = {id} id = {id} userId = {userId} status = {status} subtotal = {subtotal} logisticFee = {logisticFee} total = {total} timestamp = {timestamp} />)}
                    </table>
                </div>
            </main>
        </Fragment>
    )
}

export default Orders;
