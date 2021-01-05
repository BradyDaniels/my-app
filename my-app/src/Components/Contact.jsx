import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CssBaseline } from '@material-ui/core';

import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import StoreIcon from '@material-ui/icons/Store';
import HelpIcon from '@material-ui/icons/Help';

import Img_WP_Xample1 from './Images/Xample_WB_1.png';
import Img_WP_Xample2 from './Images/Xample_WB_2.jpg';
import Img_WP_Xample3 from './Images/Xample_WB_3.jpg';
import Img_WP_Xample4 from './Images/Xample_WB_4.jpg';

import Logo_Xample from './Images/Logo_Xample.png';

import './CSS/master-Info.css';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize:'20px',
    alignItems:'center'
  },
}));



export default function Contact() {
    const classes = useStyles();

    return (
        <div className="IContent">
            <CssBaseline>
                <br/><br/><br/>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                       <br/>
                       <h5 className="HeadT"><StoreIcon></StoreIcon>   Where to Buy</h5>
                       <br/>
                       <div className="AcordContent">
                          <img src={Img_WP_Xample1} width="250" height="200" />
                     </div>
                     <div className="AcordContent">
                          <img src={Img_WP_Xample2} width="250" height="200" />
                     </div>
                     <div className="AcordContent">
                          <img src={Img_WP_Xample3} width="250" height="200" />
                     </div>
                     <div className="AcordContent">
                          <img src={Img_WP_Xample4} width="250" height="200" />
                     </div>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     <div className="AcordContent">
                        <img src={Img_WP_Xample1} width="250" height="200" />
                        <br/>
                        <img src={Img_WP_Xample2} width="250" height="200" />
                     </div>
                     <div className="AcordContent">
                        <img src={Img_WP_Xample3} width="250" height="200" />
                        <br/>
                        <img src={Img_WP_Xample4} width="250" height="200" />
                        <br/>
                        <img src={Img_WP_Xample1} width="250" height="200" />
                     </div>
                     <div className="AcordContent">
                        <img src={Img_WP_Xample3} width="250" height="200" />
                        <br/>
                        <img src={Img_WP_Xample4} width="250" height="200" />
                        <br/>
                        <img src={Img_WP_Xample1} width="250" height="200" />
                     </div>
                     <div className="AcordContent">
                        <img src={Img_WP_Xample3} width="250" height="200" />
                        <br/>
                        <img src={Img_WP_Xample4} width="250" height="200" />
                        <br/>
                        <img src={Img_WP_Xample1} width="250" height="200" />
                     </div>
                    
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>
                      <br/>  
                      <h5 className="HeadT"><PermContactCalendarIcon></PermContactCalendarIcon> Contacts</h5>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <Typography className={classes.heading}>
                       <br/> 
                        <h5 className="HeadT"><HelpIcon></HelpIcon> About Us</h5>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       <div className="TextInfo">
                       <img src={Logo_Xample} width="250" height="200" /> 
                       <Typography >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                             <br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                            <br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.0212213
                        </Typography>
                       </div>
                    </AccordionDetails>
                </Accordion>
                <br/><br/><br/><br/><br/>
            </CssBaseline> 
        </div>
    )
}

