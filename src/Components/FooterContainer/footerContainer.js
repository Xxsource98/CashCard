import React from 'react'

// Styles
import './footerContainer.scss'

const FooterContainer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-triangle"></div>
            <div className="footer-content">
                <p className="header">Created By <a href="https://github.com/Xxsource98">Xxsource98</a></p>
                <p className="misc"><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></p>
                <p className="misc">computer PNG Designed By 588ku from <a href="https://pngtree.com/">Pngtree.com</a></p>
            </div>
        </footer>
    )
}

export default FooterContainer;