import React, {useEffect,useState} from 'react'
import { BrowserRouter as Router, Redirect, Route,Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Account from './pages/Account/Account';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home'
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CategoryDetails from './pages/CategoryDetails/CategoryDetails';
import Categories from './pages/Categories/Categories';
import Search from './pages/Search/Search';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Orders from './pages/Orders/Orders'
import Order from './pages/OrderDetails/OrderDetails'
import axios from 'axios'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Verify from './pages/Verify/Verify';
import './App.css'
import Logout from './pages/Logout/Logout';
import { LastLocationProvider } from 'react-router-last-location';
import Checkout from './pages/Checkout/Checkout';
import Test from './pages/Test/Test';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NotAvailable from './pages/NotAvailable/NotAvailable';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import ReturnsPolicy from './pages/ReturnsPolicy/ReturnsPolicy'
// import ShippingPolicy from './pages/ShippingPolicy/ShippingPolicy'


// export const UserContext = React.createContext();
// export const PageContext = React.createContext();

toast.configure();

function App() {
    
  const title = "FoodNet"; // FoodNet
  // const clientRootUrl = "http://localhost:3000/";
  const clientRootUrl = "https://foodnet.com.ng/";
  // const apiRootUrl = "http://localhost:9000/";
  const apiRootUrl = "https://myapi.foodnet.com.ng/";
  const imagesRootUrl = "https://images.foodnet.com.ng/";

  const email = "support@foodnet.com.ng";
  const token = localStorage.getItem('wpt'); // same in NavBar.js
  const [loggedInStatus, setLoggedInStatus] = useState(null);
  const errorMessage = "An error occured. Please try again!";
  const [cartNum, setCartNum] = useState(0);

  /** Paystack keys */
  const paystackPublicTestKey = "pk_test_71fcbd166959c23469deda0eed300f1282274ab8";
  const paystackPublicLiveKey = "pk_live_0c00d37b5b15ddfac6da8942824febacee13f712";

  useEffect(()=>{
    /** get cartItems number */
    axios.get(`${apiRootUrl}cart/`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  })
  .then(({data})=>{
    setCartNum(data.cartItems.length);
    
  })
  .catch(err=>{
    // toast.error(errorMessage, {
    //     position: toast.POSITION.BOTTOM_RIGHT
    // })
})
  }, [token])

  /** when product is added/removed from cart, update cartNum */

  function increaseCartNum() {
    setCartNum(cartNum+1);
  }

  function decreaseCartNum() {
    setCartNum(cartNum-1);
  }

  function setCartNumToZero() {
    setCartNum(0);
  }

  function requireAuth() {

    const account = <Redirect to = "/account" />

    /** against visitors */
    if(!token) {
      /** setUsertoLoggedOut */
      setLoggedInStatus(false);
      return account;
    } else {
      // verify token
      axios.get(`${apiRootUrl}user/verify`, {
        headers: {
          Authorization:`Basic ${token}`
        }
      })
      .then(res=>{
        // console.log(res.data)
        if(res.data.valid === 1) {
          /** valid user -> save data */
          // localStorage.setItem('email', res.data.email);
          // localStorage.setItem('userId', res.data.userId);
          // localStorage.setItem('v_token', res.data.v_token);

          /** setUsertoLoggedIn */
          setLoggedInStatus(true);
        } else {
          /** invalid user */
          /** delete data (1) */
          localStorage.removeItem('wpt');
          localStorage.removeItem('email');
          localStorage.removeItem('userId');
          localStorage.removeItem('v_token')

          /** setUsertoLoggedOut */
          setLoggedInStatus(false);

          /** redirect user (2) */
          return account;
        }
      })
      .catch(err=>{
          /** invalid user */
          /** setUsertoLoggedOut */
          setLoggedInStatus(false);
          return account
      })
    }
  }

  function verifyAuth() {
    /** against users */
    if(token) {
      return <Redirect to = "/" /> 
    }
  }


  // adding imageRootUrls for client,admin && logistics


  return (
    <React.Fragment>
        <Router>
          <LastLocationProvider>
          <ScrollToTop />
          <Switch>
            <Route path = "/" exact = {true} component = {({match})=>(
              // <UserContext.Provider value = {loggedInStatus}>
                <Home loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl}  match = {match} cartNum = {cartNum} token = {token} errorMessage = {errorMessage} imagesRootUrl = {imagesRootUrl} />
              // </UserContext.Provider>
            )} />

            <Route path = "/categories" exact = {true} component = {({match})=><Categories loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl}  match = {match} cartNum = {cartNum} token = {token} imagesRootUrl = {imagesRootUrl}  />} />

            <Route path = "/about" exact = {true} component = {({match})=><About loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} match = {match} cartNum = {cartNum} token = {token} imagesRootUrl = {imagesRootUrl} email = {email} /> }  />

            <Route path = "/contact" exact = {true} component = {({match})=><Contact loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} email = {email} match = {match} cartNum = {cartNum} token = {token} imagesRootUrl = {imagesRootUrl} />} />

            <Route path = "/search" exact = {true} component = {({location,match})=><Search loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} location = {location} match = {match} email = {email} cartNum = {cartNum} token = {token} errorMessage = {errorMessage} imagesRootUrl = {imagesRootUrl} />} />

            <Route path = "/category/:categoryId" exact = {true} component = {({match})=>(<CategoryDetails loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} match = {match} cartNum = {cartNum} token = {token} errorMessage = {errorMessage} imagesRootUrl = {imagesRootUrl} />)} />
            {/* categories --> all categories(4 per one) -> see all */}

            <Route path = "/product/:productId/:categoryId" exact = {true} component = {({match})=>(<ProductDetails loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} match = {match} loggedInStatus = {loggedInStatus} token = {token} errorMessage = {errorMessage} cartNum = {cartNum} increaseCartNum = {increaseCartNum} imagesRootUrl = {imagesRootUrl} />)}  /> 

            <Route path = "/forgot_password" exact = {true} component = {({match})=><ForgotPassword title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus} match = {match} verifyAuth = {verifyAuth} token = {token} imagesRootUrl = {imagesRootUrl} />} />

            <Route path = "/reset_password/:email/:v_token" exact = {true} component = {({match})=><ResetPassword loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} match = {match} cartNum = {cartNum} token = {token} errorMessage = {errorMessage}  imagesRootUrl = {imagesRootUrl} />} />

            <Route path = "/cart" exact = {true} component = {({match})=><Cart loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus} match = {match} token = {token} errorMessage = {errorMessage} cartNum = {cartNum} decreaseCartNum = {decreaseCartNum} requireAuth = {requireAuth}  imagesRootUrl = {imagesRootUrl} />} />

            <Route path = "/checkout" exact = {true} component = {({match})=><Checkout loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus} match = {match} token = {token} errorMessage = {errorMessage} paystackPublicTestKey = {paystackPublicTestKey} paystackPublicLiveKey = {paystackPublicLiveKey} cartNum = {cartNum} setCartNumToZero = {setCartNumToZero} requireAuth = {requireAuth}  imagesRootUrl = {imagesRootUrl} email = {email} />} />

            <Route path = "/orders" exact = {true} component = {({match})=><Orders loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus} match = {match} cartNum = {cartNum} requireAuth = {requireAuth} token = {token} errorMessage = {errorMessage} imagesRootUrl = {imagesRootUrl} />} />

            <Route path = "/order/:orderId" exact = {true} component = {({match})=><Order loggedInStatus = {loggedInStatus} title = {title} apiRootUrl = {apiRootUrl} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus} match = {match} cartNum = {cartNum}  requireAuth = {requireAuth} token = {token} errorMessage = {errorMessage}  imagesRootUrl = {imagesRootUrl} />}  />

            <Route path = "/account" exact = {true} component = {({match})=><Account title = {title} clientRootUrl = {clientRootUrl} apiRootUrl = {apiRootUrl} match = {match} loggedInStatus = {loggedInStatus} cartNum = {cartNum} verifyAuth = {verifyAuth} token = {token} errorMessage = {errorMessage}  imagesRootUrl = {imagesRootUrl} oEmail = {email} />  } />

            <Route path = "/verify/:email/:v_token" exact = {true} component = {({match})=><Verify title = {title} clientRootUrl = {clientRootUrl} apiRootUrl = {apiRootUrl} match = {match} loggedInStatus = {loggedInStatus} verifyAuth = {verifyAuth} token = {token} errorMessage = {errorMessage}  imagesRootUrl = {imagesRootUrl} />} />

            <Route path = "/not-available" exact = {true} component = {()=><NotAvailable title = {title} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus}  cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl} />} />

            <Route path = "/terms-and-conditions" exact = {true} component = {({location})=><TermsAndConditions title = {title} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus}  cartNum = {cartNum} token = {token} imagesRootUrl = {imagesRootUrl} email = {email}  location = {location}  />} />
            <Route path = "/privacy-policy" exact = {true} component = {({location})=><PrivacyPolicy title = {title} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus}  cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl} email = {email} location = {location} />}  />
            <Route path = "/returns-policy" exact = {true} component = {()=><ReturnsPolicy title = {title} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus}  cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl} email = {email}/>}  />
            {/* <Route path = "/shipping-policy" exact = {true} component = {()=><ShippingPolicy title = {title} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus}  cartNum = {cartNum} token = {token} imagesRootUrl = {imagesRootUrl} />} email = {email} /> */}

            <Route path = "/logout" exact = {true} component = {(v)=><Logout title = {title} clientRootUrl = {clientRootUrl} apiRootUrl = {apiRootUrl} loggedInStatus = {loggedInStatus} v = {v} cartNum = {cartNum} requireAuth = {requireAuth} token = {token} imagesRootUrl = {imagesRootUrl} />} />

            {/* <Route path = "/test" exact = {true} component = {Test} /> */}

            <Route render = {()=><ErrorPage title = {title} clientRootUrl = {clientRootUrl} loggedInStatus = {loggedInStatus}  cartNum = {cartNum} token = {token}  imagesRootUrl = {imagesRootUrl} />} />
            
          </Switch>
          </LastLocationProvider>
          <Footer title = {title} clientRootUrl = {clientRootUrl}/>
        </Router>
    </React.Fragment>
  );
}

export default App;