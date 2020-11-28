import React, { useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = ({
    max = 0
}) => {
    const [ scrolledIn, setScrolledIn ] = useState(false);

    return (
        <CountUp start={scrolledIn ? null : 0} end={max} duration={1.1} separator=",">
            {({countUpRef}) => {
                return (
                    <VisibilitySensor delayedCall active={!scrolledIn} onChange={isVisible => {
                        if (isVisible) {
                            setScrolledIn(true);
                        }
                    }}>
                        <p className="amount" ref={countUpRef}></p>
                    </VisibilitySensor>
                )
            }}
        </CountUp>
    )
}

export default Counter;