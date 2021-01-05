import { CssBaseline, Typography } from '@material-ui/core'
import React, { Component } from 'react'

import './CSS/master-Products.css';
import './CSS/master-Lpage.css';

import Backdrop from '@material-ui/core/Backdrop';

import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';



import Product_Page from './Product_Page';


const useStyles = makeStyles((theme) => ({

    root:{
       background:'rgba(8, 65, 112, 0.603);',
    },

    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor:'rgb(233, 233, 233)',
      border:'none',
      borderRadius:'2%',
      boxShadow: theme.shadows[0],
      padding: theme.spacing(4, 4, 3),
      width: theme.spacing(130),
      height: theme.spacing(75)
    },
  }));

/* 
 <article class="Content"
     <Typography variant="h5" color="initial" id="Title"> Title Product One </Typography>
     <img class="PImage" src={Img_Xample1} width="200" height="150" />
     <Typography variant="p" color="initial" id="Title"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Eos, aut consectetur ipsam soluta sunt est commodi veniam eveniet nobis nesciunt provident neque
     sapiente suscipit ipsum voluptatibus porro asperiores doloremque enim. </Typography>
                    </article>


*/

export default function Products(){
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [value, setValue] = React.useState('One');

     const handleChange = (event, newValue) => {
       setValue(newValue);
     };



    const handleOpen = () => {
        setOpen(true);

    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const a11yProps=(index) =>{
      return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
      };
    }
     
    const TabPanel=(props)=> {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`wrapped-tabpanel-${index}`}
          aria-labelledby={`wrapped-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };
   
   
    
        return (
            <React.Fragment>
               <body class="Body">
                    <CssBaseline>
                        <br/> <br/> <br/> <br/>
                         
                         
                           <Product_Page handleOpen={handleOpen} handleClose={handleClose}
                                         open={open} classes={classes} Backdrop={Backdrop}
                                         handleChange={handleChange} value={value} TabPanel={TabPanel} a11yProps={a11yProps}
                           ></Product_Page>
               

                    </CssBaseline>

                    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
               </body>
                
            </React.Fragment>
        )
   
}
