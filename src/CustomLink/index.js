import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomLink = ({
  to,
  children,
}) => (
  <NavLink to={`${process.env.PUBLIC_URL}/${to}`}>
    {children}
  </NavLink>
)

export default CustomLink