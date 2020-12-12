import React, {Fragment} from 'react'
import Header from '../../components/Header/Header'
import Subhead from '../../components/Subhead/Subhead';

function PrivacyPolicy({title,clientRootUrl,loggedInStatus,cartNum,token, imagesRootUrl, email}) {
    return (
        <Fragment>
            <Header title = {title} clientRootUrl = {clientRootUrl}  loggedInStatus = {loggedInStatus} cartNum = {cartNum} token = {token} imagesRootUrl = {imagesRootUrl}  />
            
            <h1 className = "law-title">Privacy Policy</h1>
            <div className = "container">
                <div className = "law-body">
                   <p>We understand that by choosing <b>Foodnet</b> to deliver your groceries, you’ve placed a great deal of trust in us. We also understand that you want the personal information you give us to be kept private as well as secure. To reassure you that we feel the same way, here’s how we will and will not use the personal information you give us.</p>

                   <p>Note: Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically. </p>

                   <Subhead>1. Collection of Personally Identifiable Information</Subhead>

                    <p>We collect personally identifiable information (email address, name, phone number, etc.) from you when you set up an account with Foodnet.com.ng. We may use this information to send you suggestions about promotions and offers based on your interest.</p>

                    <Subhead>2. Use of Demographic and Profile Data</Subhead>   

                    <p>We use personal information to provide the services you request. You can opt out of marketing and other promotional material we send to you. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect fees owed; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection. In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our website. We identify and use your IP address to help diagnose problems with our server, and to administer our website. Your IP address is also used to help identify you and to gather broad demographic information. We will occasionally ask you to complete optional online surveys. These surveys may ask you for contact information and demographic information (like location, local government area, age, or income level). We use this data to tailor your experience at our site, providing you with content that we think you might be interested in--and to display content according to your preferences. </p>

                    <h3>Cookies</h3>
                    <p>A "cookie" is a small piece of information stored by a Web server on a Web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. Foodnet.com.ng places both permanent and temporary cookies in your computer's hard drive. Foodnet.com.ng's cookies do not contain any of your personally identifiable information. </p>

                    <Subhead>3. Sharing of personal information</Subhead>
                    <p>We may share personal information with our other corporate entities and affiliates to: help detect and prevent identity theft, fraud and other potentially illegal acts; correlate related or multiple accounts to prevent abuse of our services; and to facilitate joint or co-branded services that you request where such services are provided by more than one corporate entity. Those entities and affiliates may not market to you as a result of such sharing unless you explicitly opt-in.</p>

                    <p>We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.</p>
 
                    <p>Foodnet.com.ng and its affiliates will share some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity. Should such a transaction occur, that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.</p>
 
                    <Subhead>4. Links to Other Sites</Subhead>
                    <p>Our site links to other websites that may collect personally identifiable information about you. Foodnet.com.ng is not responsible for the privacy practices or the content of those linked websites.</p>

                    <Subhead>5. Security Precautions</Subhead>
                    <p>Our site has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.</p>

                    <Subhead>6. Choice/Opt-Out</Subhead>
                    <p>Foodnet.com.ng provides all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general, after setting up an account. If you want to remove your contact information from all Foodnet.com lists and newsletters, please click on the unsubscribe button in our mails.</p>

                    <Subhead>7. Advertisements on Foodnet.com.ng</Subhead>
                    <p>We use third-party advertising companies to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>

                    <Subhead>8. Questions?</Subhead>
                    <p>Questions regarding this statement should be directed to the following address: <a href = {`mailto:${email}`} className = "___link">{email}</a></p>


                </div>
            </div>
        </Fragment>
    )
}

export default PrivacyPolicy;
