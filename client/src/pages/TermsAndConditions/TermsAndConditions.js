import React, {Fragment,useEffect,useRef} from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import Subhead from '../../components/Subhead/Subhead';
import queryString from 'query-string'

function TermsAndConditions({title,clientRootUrl,loggedInStatus,cartNum,token, imagesRootUrl,email, location}) {

    document.title = `Terms and Conditions - ${title}`;

    // const {account} = queryString.parse(location.search);
    // // const myRef = useRef(null);
    // const containerRef = useRef(null);

    // useEffect(()=>{
    //     if(account) {
    //         containerRef.current.focus();
    //     }
    // })

    return (
        <Fragment>
            <Header title = {title} clientRootUrl = {clientRootUrl}  loggedInStatus = {loggedInStatus} cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl} />
            
            <h1 className = "law-title">Terms of Service</h1>
            <div className = "container">
                <div className = "law-body">
                   <h2>GENERAL TERMS AND CONDITIONS</h2>
                   <br />
                   <p>By using the <b>Foodnet</b> (www.foodnet.com.ng) website services and tools (the "Site"), you ("you" or the "End User") agree to the terms and conditions that we ("<b>Foodnet</b>") have provided. If you do not agree with the outlined terms and conditions (the "Terms of Use" or "Agreement"), please refrain from using the Site.</p>

                   <p>For the purpose of these terms of use, wherever the context requires, ‘You’ shall mean any natural or legal person who has agreed to make use of the site. </p>

                   <p>The Site reserves the right, to change, modify, add, or remove portions of these Terms and Conditions of use at any time. </p>

                   <p>Please check these Terms and Conditions regularly for updates as changes will be made on the website with no notice provided. </p>

                   <p>These Terms & Conditions were most recently updated on 10th December 2020 and apply to sales to consumers. Subsequent changes would be stated with the clauses inclusive. </p>

                   <p>Your continued use of the Site following the posting of changes to these Terms and Conditions of use constitutes your acceptance of those changes. </p>

                   <p>If you are a business then different Terms & Conditions will apply to you, please contact our centre via <a href = {`mailto:${email}`} className = "___link">{email}</a>. </p>

                    <Subhead>1. GENERAL</Subhead>

                    <p><b>1.1</b> This Agreement sets forth the terms and conditions that apply to the use of this Site by the End User. By using this Site (other than to read this Agreement for the first time), End User agrees to comply with all of the terms and conditions hereof. The right to use this Site is personal to End-User and is not transferable to any other person or entity. </p>

                    <p><b>1.2</b> End User shall be responsible for protecting the confidentiality of End User's password(s), if any. End User acknowledges that, although the Internet is often a secure environment, sometimes there are interruptions in service or events that are beyond the control of Foodnet, and Foodnet shall not be responsible for any data lost while transmitting information on the Internet. While it is Foodnet's objective to make the Site accessible 24 hours per day, 7 days per week, the Site may be unavailable from time to time for any reason including, without limitation, routine maintenance. You understand and acknowledge that due to circumstances both within and outside of the control of Foodnet, access to the Site may be interrupted, suspended or terminated from time to time. Foodnet shall have the right at any time to change or discontinue any aspect or feature of Foodnet, including, but not limited to, content, hours of availability and equipment needed for access or use. Further, Foodnet may discontinue disseminating any portion of information or category of information, may change or eliminate any transmission method and may change transmission speeds or other signal characteristics.  </p>

                    <Subhead>2. USER SUBMISSIONS AND PRIVACY</Subhead>

                    <p><b>2.1</b> Anything that you submit to the Site and/or provide to us, including but not limited to, questions, reviews, comments, and suggestions (collectively, "Submissions") will become our sole and exclusive property and shall not be returned to you. </p>

                    <p><b>2.2</b> In addition to the rights applicable to any Submission, when you post comments or reviews to the Site, you also grant us the right to use the name that you submit, in connection with such review, comment, or other content. </p>

                    <p><b>2.3</b> You shall not use a false e-mail address, pretend to be someone other than you or otherwise mislead us or third parties as to the origin of any Submissions. We may, but shall not be obligated to, remove or edit any Submissions.</p>

                    <p><b>2.4</b> We view protection of your privacy as a very important principle. We understand clearly that you and Your Personal Information are one of our most important assets. We store and process Your Information on computers that may be protected by physical as well as reasonable technological security measures and procedures our current Privacy Policy is available at <Link to = '/privacy-policy'>https://www.foodnet.com.ng/privacy-policy</Link> .If you object to your Information being transferred or used in this way please do not use foodnet.com.ng website. </p>

                    <Subhead>3. ORDERING AND PRICING</Subhead>

                    <p><b>3.1</b> Once you have found the Goods you are looking for, you can buy them online by clicking the 'add to cart' button for the selected Goods. You can then navigate to your ‘cart'. Remember, you can remove Goods from your cart or stop the ordering process at any time. Please note that all prices are shown in Nigerian Naira (NGN) and may be inclusive of VAT, unless stated otherwise. {/* The law places certain restrictions on transactions involving alcohol and tobacco, and accordingly these products must be either ordered by you or delivered by us during normal licensing hours. If you have ordered alcohol or tobacco from us and cannot be at home at your selected delivery time, it is your responsibility to ensure that a suitable person is there to receive the order. We operate a “Challenge 18” policy, which means that if the person receiving delivery of alcohol looks under 18, we will request identification. We may also request identification in relation to other age restricted products such as knives and health products. We may retain the products if proof of age or an alternative adult is not available.  */}</p>

                    <p><b>3.2</b> Please note that there are cases when an order cannot be processed for various reasons. The Site reserves the right to refuse or cancel any order for any reason at any given time. You may be asked to provide additional verifications or information, including but not limited to phone number and address, before we accept the order.</p>

                    <p><b>3.3</b> We are determined to provide the most accurate pricing information on the Site to our users; however, errors may still occur, such as cases when the price of an item is not displayed correctly on the website. If we discover an error in the price of goods you have ordered we will inform you as soon as possible and give you the option of reconfirming your order at the correct price or cancelling it. If we are unable to contact you we will treat the order as cancelled. If you cancel and you have already paid for the goods, you will receive a full refund. As such, we reserve the right to refuse or cancel any order. </p>

                    <Subhead>4. PURCHASE CONTRACT</Subhead>

                    <p><b>4.1</b> This website is operated by Foodnet ("we", "us" or "our"). By using the foodnet.com.ng website you are bound by these Terms & Conditions. All use and purchases made on this website are governed by these Terms & Conditions at any time although the Terms & Conditions governing any given use or purchase will be those in effect at the date of your order or specific use. If you use or order goods after we have published any changes you will be bound by those changes. Accordingly, you should check prior to each use or order to ensure that you understand the precise Terms & Conditions applicable to your site visit or purchase. To assist you in determining whether the Terms & Conditions have changed since your most recent order we will display the date when these Terms & Conditions were most recently updated. </p>

                    <p><b>4.2</b> We sell goods only to end-users. </p>

                    <p><b>4.3</b> We will confirm your order whether placed directly by using the foodnet.com.ng website, the email, customer care line, Social Media platforms and the live chat. This will occur either by telephone calls or messages via these mediums. </p>

                    <p><b>4.4</b> Confirmation constitutes our acceptance of your order but order is completed when payment is received.  </p>

                    <p><b>4.5</b> To participate in our services, the customer must either complete the registration process or check out as a guest. As a guest, customer must provide relevant information such as full name, phone number and delivery address. </p>
                    
                    <p><b>4.6</b> Our drug items are sourced from a reliable pharmaceutical vendor. In an event where you order drug items and would not be available at your selected delivery time and location, it is your responsibility to ensure that a suitable person is there to receive the order. </p>

                    <Subhead>5. AMENDMENT OF ORDERS AND CANCELLATION RIGHTS</Subhead>

                    <p><b>5.1</b> Any orders placed may be amended or cancelled by the customer at ₦50 + 1.5% of total amount paid, provided that this is done 10 minutes after confirmation. </p>

                    <p><b>5.2</b> As stated above, the last time set out for amendment and cancellation is 10 minutes after the confirmation. </p>

                    <p><b>5.3</b> Please note, for cancellation to be effective, an email should be sent to <a href = {`mailto:${email}`} className = "___link">{email}</a>.</p>

                    <p><b>5.4</b> Any orders that have not been cancelled prior to the expiry of the 10 minutes, the customer would be charged the cancellation fee which is equivalent to the delivery fee, and also the fees that pertains to 5.1 above only if the products have not yet been delivered.</p>
                    {/* <p><b>5.4</b> Any orders that have not been cancelled prior to the expiry of the 10 minutes cannot be cancelled.</p> */}

                    <Subhead>6. METHODS OF PAYMENT</Subhead>

                    <p><b>6.1</b> Payment may be made on the website, by Card, Bank, Transfer, USSD or Visa QR.</p>

                    <p><b>6.2</b> We only accept Nigerian Naira as payment currency. </p>

                    <Subhead>7. DELIVERY</Subhead>

                    <p><b>7.1</b> Delivery days and times are <u>Mondays - Fridays 8am-5pm</u>. Delivery will be made to the address specified by you when you place an order on the website. You have the ability to change this address anytime you want to place an order, and you must do so if you move locations so that we can deliver to the correct address. (Say something about public holidays) On recognized public holidays, delivery times are subject to change. </p>

                    <p><b>7.2</b> We reserve the right to restrict deliveries in certain areas, and this includes the right to eliminate certain areas from our delivery schedule altogether. </p>

                    <p><b>7.3</b> We cannot deliver to any location that is not contained on our Dispatch List. </p>

                    <p><b>7.4</b> Foodnet will be responsible for the delivery of the Goods you have ordered to your address. Until the time that the Goods are delivered to you, the Goods shall remain the property of Foodnet and title (together with risk of loss and damage) will not pass to you until the goods are delivered to the address provided that we have processed and received payment in full for the Goods. </p>

                   <p><b>7.5</b> We take special care to endeavour that deliveries are made within a short delivery slot and accordingly, it is your responsibility to ensure that an appropriate person is available at the delivery address at all times during the delivery slot. We may ask that an appropriate person signs for the goods on delivery. If no one is at the address when the delivery is attempted the goods will be retained by us. We will leave notification of delivery and will telephone to attempt to rearrange the delivery with a delivery cost.
                   </p> 

                    <p><b>7.6</b> Please note adverse weather conditions or other events outside of our reasonable control may result in the occasional late or cancelled delivery. If that is the case we will endeavour to contact you as soon as we are able to in order to reschedule your delivery time and date. In any event that the order doesn't get to you in time, for food orders our liability to you will be limited to the price of food and the cost of delivery. </p>
                    
                    <p><b>7.7</b> Should you fail to be present for your delivery, if you want it delivered to another location, a new cost of delivery would be added. </p>

                    <p><b>7.8</b> Foodnet will ordinarily only make deliveries when an appropriate person is able to receive the delivery.</p>
                    
                    <Subhead>8. DEFECTIVE GOODS AND DISSATISFACTION</Subhead>

                    <p><b>8.1</b> We guarantee the quality of our goods. You must inspect the goods immediately when they are delivered and notify us by phoning our customer care centre numbers or sending a message. For all items, return will be valid for 24hours.</p>

                    <p><b>8.2</b> In the event that the Goods collected by you are damaged, defective, faulty or do not match their description at the point of collection, you would be sent a replacement or a full refund will be made to you. You are advised to check your goods for any defect, fault or damage before signing the delivery note. If you discover a genuine fault, defect or damage after delivery, you will be required to return the Goods to us (together with all relevant packaging)</p>
  
                    <Subhead>9. RETURNS AND RETURNS APPROVAL</Subhead>

                    <p><b>9.1</b> You can return your product as long as:</p>

                    <p><b>9.1.1</b> You contact Customer Support within 48 hours of delivery. For fresh items, as stated in 8.1 a call must be placed immediately stating the complaint and not hours later. This is because we cannot vouch for the customer's storage methods after delivery has been made. </p>
  
                    <p><b>9.1.2</b> You have proof of purchase (receipt). </p>

                    <p><b>9.1.3</b> The product is damaged on delivery.</p>

                    {/* <p><b>9.1.4</b> The goods must be in an ‘as new’ condition and returned in the original, undamaged packaging along with the accessories. </p> */}

                    {/* <p><b>N.B.</b> All f</p> */}
 
                    {/* <p><b>9.1.5</b> The product must not have been used or opened.</p>
  
                    <p><b>9.1.6</b> All sealed items must not be opened otherwise it would not be accepted on return. Foodnet will only accept unsealed items in cases where maggots, insects or moulds are found in the item. </p>

                    <p><b>9.2</b> Return Approval of All returned items are subject to inspection and approval by the authorized representative of Foodnet Online Mart. For a returned item to be approved for return, it must be in an ‘as new’ condition and returned in the original, undamaged packaging along with the accessories received with it. Items that are not returned in the above condition will be sent back to you and payment will not be refunded.</p> */}

{/*                   
                    <p><b>9.4</b>You will be asked to choose one of the following options: The shipping will be free if return is due to Incorrect Delivery. Otherwise, you’ll need to pay for the cost of shipping goods back to Foodnet Online Mart. The period of refund will not exceed 10 working days from receipt of returned goods to us and the accompanying documents, if approval of your application for the return of the goods is granted.</p> */}
  

                    <Subhead>10. CUSTOMER COMPLAINTS</Subhead>
 
                    <p><b>10.1</b> Any Customer complaints should be sent to <a href = {`mailto:${email}`}  className = "___link">{email}</a>.</p>

                    <Subhead>11. SPECIAL OFFERS PROMOTIONS AND COMPETITIONS</Subhead>

                    <p><b>11.1</b> From time to time, and in our complete discretion, purchases of goods may be subject to special offers. In the event that such a special offer applies to your purchase, the terms of such special offer shall be subject to these Terms & Conditions. If there is any conflict between the terms of a special offer and these Terms & Conditions, these Terms & Conditions shall prevail unless specifically excluded.</p>

                    <p><b>11.2</b>We may change the terms of special offers, or withdraw them altogether, at any time and without prior notice. We will honour at the offer price any order placed by you before an offer ends, or is amended or withdrawn. </p>
 
                    <p><b>11.3</b>We reserve the right to offer in our complete discretion different customers different special offers, promotions and the ability to enter different competitions.</p>

                    <Subhead >12. CANCELLATION OF DELIVERIES AND SUSPENSION OF YOUR ACCOUNT</Subhead>
                    {/* <div> */}
                    <p><b>12.1</b> We reserve the right to cancel your delivery at any time if we suspect fraud, have reason to believe you are in breach of these Terms and Conditions or any other terms and conditions relating to your order, or if there is an outstanding payment for any account registered at your address.</p>

                    <p><b>12.2</b> In addition to our right to cancel your order, we reserve the right to suspend your account. Your account will remain suspended until you contact our customer centre at <a href = {`mailto:${email}`}   className = "___link">{email}</a> and remedy any breaches which are capable of remedy, or provide any information reasonably requested by our centre advisers to enable them to reactivate your account. </p>
  
                    <p><b>12.3</b> In the rare event that unforeseen operational or technical issues occur, we may need to cancel or rearrange delivery. If this happens we will endeavour to contact you to arrange an alternative delivery date.</p>
                   {/* </div> */}
                    <Subhead>13. COPYRIGHT AND TRADEMARKS</Subhead>

                    <p><b>13.1</b> All intellectual property rights, whether registered or unregistered, in the Site, information content on the Site and all the website design, including, but not limited to, text, graphics, software, photos, video, music, sound, and their selection and arrangement, and all software compilations, underlying source code and software shall remain our property.</p> 

                    <p><b>13.2</b> The entire contents of the Site also are protected by copyright as a collective work under Nigeria copyright laws and international conventions. All rights are reserved. </p>

                    <Subhead>14. APPLICABLE LAW AND JURISDICTION</Subhead>
 
                    <p><b>14.1</b> These Terms and Conditions shall be interpreted and governed by the laws in force in the Federal Republic of Nigeria. The place of jurisdiction shall be Abuja, Nigeria.</p>

                    <p><b>14.2</b> Unless otherwise specified, the material on foodnet.com.ng is presented solely for the purpose of sale in Abuja, Nigeria unless otherwise stated. foodnet.com.ng makes no representation that materials on the site are appropriate or available for use in other locations/Countries other than Abuja, Nigeria unless otherwise stated. Those who choose to access this site from other locations/Countries other than Abuja, Nigeria do so on their own initiative and Foodnet is not responsible for supply of goods/refund for the goods ordered from other locations/Countries other than Abuja, Nigeria, compliance with local laws, if and to the extent local laws are applicable.</p>
    
                    <Subhead>15. TERMINATION</Subhead>

                    <p><b>15.1</b> In addition to any other legal or equitable remedies, we may, without prior notice to you, immediately terminate the Terms and Conditions or revoke any or all of your rights granted under the Terms and Conditions.</p>
 
                    <p><b>15.2</b> Upon any termination of this Agreement, you shall immediately cease all access to and use of the Site and we shall, in addition to any other legal or equitable remedies, immediately revoke all password(s) and account identification issued to you and deny your access to and use of this Site in whole or in part.</p>

                    <p><b>15.3</b> Any termination of this agreement shall not affect the respective rights and obligations (including without limitation, payment obligations) of the parties arising before the date of termination. You furthermore agree that the Site shall not be liable to you or to any other person as a result of any such suspension or termination.</p>

                    <p><b>15.4</b> If you are dissatisfied with the Site or with any terms, conditions, rules, policies, guidelines, or practices of Foodnet online Mart Limited in operating the Site, your sole and exclusive remedy is to discontinue using the Site.</p>
  
                    <Subhead>16. PRODUCT DESCRIPTION </Subhead>

                    <p><b>16.1</b> foodnet.com.ng tries to be as accurate as possible. However, foodnet.com.ng does not warrant that product description or other content of this site is accurate, complete, reliable, current, or error-free. If a product offered by foodnet.com.ng itself is not as described, your sole remedy is to return it in unused condition within 48hours of receipt of goods.</p>
  
                    <Subhead>17. LIMITATION OF LIABILITY</Subhead>

                    <p><b>17.1</b>  IN NO EVENT SHALL foodnet.com.ng BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND IN CONNECTION WITH THIS AGREEMENT, EVEN IF foodnet.com.ng HAS BEEN INFORMED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES. </p>

                    <p><b>17.2</b> Our liability for losses you suffer as a result of us breaking this agreement is strictly limited to the purchase price of the Goods you purchased.</p>
  
                    <Subhead>18. INDEMNITY</Subhead>
                    
                    <p><b>18.1</b> You shall indemnify and hold harmless Foodnet, its owner's, licensee, affiliates, subsidiaries, group companies (as applicable) and their respective officers, directors, agents, and employees, from any claim or demand, or actions including reasonable attorneys' fees, made by any third party or penalty imposed due to or arising out of your breach of this Terms of Use, privacy Policy and other Policies, or your violation of any law, rules or regulations or the rights of a third party.</p>
 

                </div>
            </div>
        </Fragment>
    )
}

export default TermsAndConditions;
