import React from 'react'
import { NavLink } from 'react-router-dom'

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
      <NavLink to={to}>
        {children}
      </NavLink>
    </div>
  )

export default Button
