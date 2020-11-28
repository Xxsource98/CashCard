import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

// Components
import * as Images from '../../images'
import Counter from '../../counter'

const OfferContainer = () => {
    return (
        <div className="box-container offer">
            <div className="box-img-background" style={{
                backgroundImage: `url(${Images.Background2})`
            }}>
                <div className="box-description-container">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <p className="header">Our Offer</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus felis mi, laoreet sed laoreet quis, sagittis ac ex. 
                            Phasellus mi lectus, eleifend ut lorem sit amet, pharetra pharetra mauris.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={1000}>
                        <div className="box-imgs">
                            <img src={Images.CreditCard1} alt="credit-card" />
                            <img src={Images.Plus} alt="plus" className="plus" />
                            <img src={Images.Bank} alt="bank" />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="box-flex-container">
                <div className="box-flex-element">
                    <p className="header">Total Users</p>
                    <Counter max={4582120} />        
                </div>
                <div className="box-flex-element">
                    <p className="header">Active Users</p>
                    <Counter max={214728} />
                </div>
            </div>
        </div>
    )
}

export default OfferContainer;