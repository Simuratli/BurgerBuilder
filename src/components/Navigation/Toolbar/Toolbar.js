import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavıgationItems/NavıgationItems'
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggler clicked={props.drawerTogglerClicked}/> 
      <div><Logo/></div>
      <nav className={classes.DesktopOnly}>
          <NavigationItems />
      </nav>
    </header>
  )
}

export default toolbar
