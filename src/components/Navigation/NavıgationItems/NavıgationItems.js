import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
       <NavigationItem link='/' active>Main</NavigationItem>
       <NavigationItem link='/contact'>Contact</NavigationItem>
    </ul>
  )
}

export default navigationItems
