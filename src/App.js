import React, { useEffect } from 'react'

// Components
import Navbar from './Components/Navbar/navbar'
import StartContainer from './Components/StartContainer/startContainer'
import PaymentsContainer from './Components/PaymentsContainer/paymentsContainer'
import OfferContainer from './Components/OfferContainer/offerContainer'
import AboutContainer from './Components/AboutContainer/aboutContainer'
import FooterContainer from './Components/FooterContainer/footerContainer'

// Style
import './globalStyle.scss'

const App = () => {
    useEffect(() => { 
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    }, []);

    return (
        <div className="container">
            <Navbar />
            <StartContainer />
            <PaymentsContainer />
            <OfferContainer />
            <AboutContainer />
            <FooterContainer />
        </div>
    );
}

export default App;