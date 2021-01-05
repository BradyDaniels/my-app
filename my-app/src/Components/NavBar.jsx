import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './CSS/master-Lpage.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import StoreIcon from '@material-ui/icons/Store';
import HelpIcon from '@material-ui/icons/Help';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {Link} from 'react-router-dom';

export default function NavBar(){

        return (
            <AppBar position="fixed" color="primary" id="navBar">
                 <Toolbar>
                   <Typography variant="h6" >
                        <ButtonGroup variant="text" color="default" aria-label="" >
                          <Link id="Link" to="/Products"> 
                            <Button id="BtGroup"><LocalShippingIcon id="HomeIcon"></LocalShippingIcon> 
                                Products 
                            </Button>
                          </Link>  
                          
                        <Link id="Link" to="/Info"> 
                          <Button id="BtGroup"><StoreIcon id="HomeIcon"></StoreIcon> Contacs</Button>
                        </Link>  
                          
                          <Link id="Link" to="/">  
                            <Button id="BtGroup"><HomeIcon id="HomeIcon"></HomeIcon> 
                              Home 
                            </Button>
                          </Link>
                        </ButtonGroup>
                   </Typography>
                 </Toolbar>
               </AppBar>
        );
    
}
