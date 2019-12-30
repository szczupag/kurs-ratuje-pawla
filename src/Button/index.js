import React from 'react'
import CustomLink from '../CustomLink'

import './style.css'

const Button = ({
    children,
    style,
    onClick,
    to,
}) => (
    <div
        className="jump-btn" style={style}
        onClick={onClick}
    >
        <CustomLink to={to}>
            {children}
        </CustomLink>
    </div>
)

export default Button
