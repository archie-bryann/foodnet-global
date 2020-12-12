import React from 'react'
import Header from '../../components/Header/Header'
import './About.css'

function About({title,apiRootUrl,clientRootUrl, match,loggedInStatus, cartNum, token, imagesRootUrl, email}) {

    document.title = `About Us - ${title}`;

    return (
        <React.Fragment>
            <Header loggedInStatus = {loggedInStatus} title = {title} clientRootUrl = {clientRootUrl} match = {match} cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl} />
            <div style = {{marginTop:'-45px'}}></div>
            <div className = "small-container single-product">
        
                    <div className = "col-2">
                        <h2>About our company</h2><br />
                        <p><b>Foodnet</b> is your one-stop online grocery shop. We have a great assortment of food items, carefully sourced both locally and internationally, to provide you with the best quality to suit your needs. Customer satisfaction is our aim, therefore we ensure that our prices are fair and inexpensive.</p>

                        <p>Great customer service is at the heart of our business, so your questions, comments and feedback is always welcome! We have multiple channels via which we make ourselves always available to answer your questions, address your complaints and meet your needs. We are available via our customer care line, e-mail and the Foodnet Instagram page. Foodnet has a well-trained, friendly and pleasant customer service team whose sole goal is to assist you.</p>

                        <p>Foodnet offers convenient shopping from the comfort of your home, business or wherever else you find yourself! Our dedicated staff force is there to make the online shopping experience stress free and efficient. </p>

                        <br />
                        <br />

                        <h2>Our Mission: </h2>

                        <p>To be the premier online supermarket in Africa, both in product selection and quality services.</p>

                        <p>To accomplish this mission, the brand will strive to provide:
                            <ol>
                                <li>The best available prices for all groceries on offer;</li>
                                <li>The best assortment of products for our customers; and</li>
                                <li>Stellar logistics (including but not limited to) speedy delivery and efficient customer services.</li>
                            </ol>
                        </p>

                        <br />
                        <br />
                        
                        <h2>Our Values:</h2>
                        <p><b>Authentic!</b> We are all about authenticity! Foodnet promises to get the best products from our suppliers and deliver only authentic products to our customers. We promise to always deliver fresh products at fair prices to our customers at all times.</p>

                        <p><b>Passionate!</b> We are passionate about our customers and our brand. Therefore we will always ensure that we are mindful of the needs of our customers. Foodnet seeks to be consistent in the good we do and strive to be better as we incorporate your desired solutions into our ever-evolving company. </p>

                        <p><b>Innovative!</b> Foodnet strives for continuous innovation in every area of our business - from product sourcing to pricing. We employ technology that increases the efficiency of our day-to-day running of the business and helps customers better understand our brand and products. The generation and implementation of new ideas and solutions, coupled with consistent integrity and a desire to serve will be one of the most important aspects of the business.</p>

                        <p><b>Committed!</b> Our commitment to our customers is uncompromising. We will ensure that we put the needs of the customer first and provide all the necessary support needed to make online grocery shopping effortless and stress-free.</p>

                        <p><b>Honest!</b> At all times and in all our business and customer relationships, Foodnet promises to be genuine and hold itself to high ethical standards.</p>

                        <p>In a nutshell, Foodnet is bringing the supermarket to you! </p>

                        <br />
                        <br />

                        <h2>Customer Service</h2>
                        
                        <p>If there is something you think we can do better or any way we can assist you, please do not hesitate to contact us. We want to make your shopping experience convenient and enjoyable.</p>
                        <br />
                        <p>Got questions or comments? </p>
                        <br />
                        <p>Send us an email: <a className = "___link" href = {`mailto:${email}`}>{email}</a></p>
                    </div>
                    </div>
                {/* </div>
            </div> */}
            <div style = {{height:'50px'}}></div>
        </React.Fragment>
    )
}

export default About
