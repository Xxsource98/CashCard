import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

// Components
import * as Images from '../../images'
import Counter from '../../counter'

const PaymentsContainer = () => {
    return (
        <div className="box-container payments">
            <div className="box-img-background" title="https://clockwise.software/blog/relational-vs-non-relational-databases-advantages-and-disadvantages/" style={{
                backgroundImage: `url(${Images.Background1})`
            }}>               
                <div className="box-description-container">
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                        <p className="header">Payments</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={500}>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus felis mi, laoreet sed laoreet quis, sagittis ac ex. 
                            Phasellus mi lectus, eleifend ut lorem sit amet, pharetra pharetra mauris.
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="box-flex-container">
                <div className="box-flex-element">
                    <p className="header">Total Payments</p>
                    <Counter max={134201802} />
                </div>
                <div className="box-flex-element">
                    <p className="header">Today Payments</p>
                    <Counter max={834002} />
                </div>
            </div>
        </div>
    )
}

export default PaymentsContainer;