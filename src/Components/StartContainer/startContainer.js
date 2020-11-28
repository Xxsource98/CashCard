import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

// Components
import * as Images from '../../images'

// Style
import './startContainer.scss'

const SideElement = ({
    leftSide = true,
    img = "",
    text = ""
}) => {
    return (
        <div className={`widget ${!leftSide ? "right" : ""}`}>
            <img src={img} alt="icon" />
            <p className="description">{text}</p>
            <button>Read More</button>
        </div>
    )
}

const StartContainer = () => {
    return (
        <article className="start-container">
            <div className="split-screen"></div>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <SideElement 
                    leftSide={true} 
                    img={Images.CreditCard} 
                    text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus felis mi, laoreet sed laoreet quis, sagittis ac ex. 
                            Phasellus mi lectus, eleifend ut lorem sit amet, pharetra pharetra mauris." 
                />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <SideElement 
                    leftSide={false} 
                    img={Images.Bank} 
                    text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus felis mi, laoreet sed laoreet quis, sagittis ac ex. 
                            Phasellus mi lectus, eleifend ut lorem sit amet, pharetra pharetra mauris." 
                />
            </ScrollAnimation>
        </article>
    )
}

export default StartContainer;