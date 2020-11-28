import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

// Components
import * as Images from '../../images'

const AboutContainer = () => {
    return (
        <div className="box-container about">
            <div className="box-img-background" style={{
                backgroundImage: `url(${Images.Background3})`
            }}>
                <div className="box-description-container">
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                        <p className="header">About Us</p>
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
            <p className="title">Join to us today!</p>
            <ScrollAnimation animateIn="fadeIn">
                <div className="box-flex-container">
                        <div className="box-flex-element">
                            <button>Read More</button>
                        </div>
                        <div className="box-flex-element">
                            <button>Contact</button>
                        </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default AboutContainer;