import React from 'react'
import Button from '../Button'
import close from '../assets/close.svg'
import min from '../assets/minimize.svg'
import max from '../assets/maximize.svg'
import pointer from '../assets/pointer.svg'

import './style.css'

const Main = () => (
    <div className="main-container fb">
        <div className="fb-banner">
            <div className="fb-header">
                <p className="fb-title">Ratujemy Pawła</p>
                <p><img src={min} /></p>
                <p><img src={max} /></p>
                <p><img src={close} /></p>
            </div>
            <div className="fb-content">
                <p>Kurs</p>
                <p class="main">Podstawy HTML i CSS</p>
            </div>
            <div className="fb-footer">
                <p className="fb-btn">Biorę udział</p>
                <img src={pointer} />
            </div>
        </div>
        <div className="fb-link">siepomaga.pl/ratujemy-pawla</div>
    </div>
    // <div className="main-container fb">
    //     <div className="fb-banner">
    //         <div className="fb-header">
    //             <p className="fb-title">Ratujemy Pawła</p>
    //             <p><img src={min} /></p>
    //             <p><img src={max} /></p>
    //             <p><img src={close} /></p>
    //         </div>
    //         <div className="fb-content">
    //             <p style={{padding: "0"}}>Kurs</p>
    //             <p style={{paddingTop: "0px"}}>Podstawy HTML i CSS</p>
    //             <p class="main">Zwiększyliśmy pulę biletów!</p>
    //         </div>
    //         <div className="fb-footer">
    //             <p className="fb-btn">Biorę udział</p>
    //             <img src={pointer} />
    //         </div>
    //     </div>
    //     <div className="fb-link">siepomaga.pl/ratujemy-pawla</div>
    // </div>
)

export default Main
