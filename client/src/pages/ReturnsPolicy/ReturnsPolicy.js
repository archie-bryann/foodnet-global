import React, {Fragment} from 'react'
import Header from '../../components/Header/Header'
import Subhead from '../../components/Subhead/Subhead';

function ReturnsPolicy({title,clientRootUrl,loggedInStatus,cartNum,token, imagesRootUrl, email}) {

    document.title = `Returns Policy - ${title}`;
    
    return (
        <Fragment>
            <Header title = {title} clientRootUrl = {clientRootUrl}  loggedInStatus = {loggedInStatus} cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl} />
            
            <h1 className = "law-title">Returns and Exchange Policy</h1>
            <div className = "container">
                <div className = "law-body">
                    
                    <Subhead>1. DEFECTIVE GOODS AND DISSATISFACTION</Subhead>
                    
                    <p><b>1.1</b> We guarantee the quality of our goods. You must inspect the goods and notify us immediately sending an email to {email}. For fresh foods, return will be valid for 24 hours.</p>

                    <p><b>1.2</b> In the event that the Goods collected by you are damaged, defective, faulty or do not match their description at the point of collection, you would be sent a replacement or a full refund will be made to you. You are advised to check your goods for any defect, fault or damage before signing the delivery note. If you discover a genuine fault, defect or damage after delivery, you will be required to return the Goods to us (together with all relevant packaging)</p>

                    <Subhead>2. RETURNS AND RETURNS APPROVAL</Subhead>

                    <p><b>2.1</b> You can return your product as long as:</p>

                    

                    <p><b>2.1.1</b> You contact Customer Support within 48 hours of delivery. For fresh items, as stated in 1.1 an emaiil must be sent immediately stating the complaint and not hours later. This is because we cannot vouch for the customer's storage methods after delivery has been made.</p>             

                    <p><b>2.1.2</b> You have proof of purchase (receipt).</p>             

                    <p><b>2.1.3</b> The goods must be in an ‘as new’ condition and returned in the original, undamaged packaging along with the accessories.</p>

                    <p><b>2.1.4</b> The product must not have been used or opened.</p>

                    <p><b>2.1.5</b> All sealed items must not be opened otherwise it would not be accepted on return. Foodnet will only accept unsealed items in cases where maggots, insects or moulds are found in the item.</p>

                    <p><b>2.2</b> Return Approval of All returned items is subject to inspection and approval by the authorized representative of Foodnet. For a returned item to be approved for return, it must be in an ‘as new’ condition and returned in the original, undamaged packaging along with the accessories received with it. Items that are not returned in the above condition will be sent back to you and payment will not be refunded.</p>

                    <p><b>2.3</b> Items returned without all accompanying accessories and packaging such as:</p>                     

                    <br />

                    Fashion accessories

                    <br />

                    Personal hygiene items (combs, toothbrushes, hair brushes, toothpaste and other similar products)

                    <br />

                    Cosmetic products

                    <br />

                    Any form of underwear
                    
                    <br />

                    Fragrances

                    <br />
                    
                    Beauty products

                    <br />

                    Books

                    <br />
                    
                    Toys

                    <br />

                    <p>Would be replaced with another of the same product, refunded to the account. </p>
                    <br />
                    <p><b>2.4</b> You will be asked to choose one of the following options:</p> 


                    <p>1. The shipping will be free if return is due to Incorrect Delivery.</p>

                    <p>2. Otherwise, you’ll need to pay for the cost of shipping goods back to Foodnet. The period of refund will not exceed 10 working days from receipt of returned goods to us and the accompanying documents, if approval of your application for the return of the goods is granted.</p>

                    <Subhead>3. CUSTOMER COMPLAINTS</Subhead>
                    
                    <p>3.1 Any Customer complaints should be addressed to the Foodnet Official Customer Email: <a href = {`mailto:${email}`} className = "___link">{email}</a></p>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default ReturnsPolicy;
