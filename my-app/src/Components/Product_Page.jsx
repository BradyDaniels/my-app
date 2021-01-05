import { CssBaseline, Typography, Container } from '@material-ui/core'
import React, { Component } from 'react'

import Productsjson from './Json/products.json';

import Product from './Product.jsx';

import Modal from '@material-ui/core/Modal';

import Fade from '@material-ui/core/Fade';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';




import Img_Xample1 from './Images/ProductXample1.jpg';



export default class Product_Page extends Component {

  state={
    pjson:Productsjson,
    title:'nada_t',
    description:'nada_d',
    howto:'nada_ht',
    qa:'nada_qa'
  }
   
  putData=(p)=>{
    console.log('putDat function: ',p.title)
    this.setState({
      title:p.title,
      description:p.description,
      howto:p.howto,
      qa:p.qa
    })
    console.log('Actual state',this.state.title)
  }

  render() {
    return (
     <React.Fragment>
       <CssBaseline>
                   {this.state.pjson.map(pjson=>
                      
                      <Product key={pjson.id} products={pjson} classes={this.props.classes} open={this.props.open} 
                               handleOpen={this.props.handleOpen} handleClose={this.props.handleClose} putData={this.putData}>
                      
                      </Product>
             
                    )}
                                 
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={this.props.classes.modal}
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    closeAfterTransition
                    BackdropComponent={this.props.Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    classes:{root:this.props.classes.root},
                }}
                >
                    <Fade in={this.props.open}>
                        <article className={this.props.classes.paper}>
                           <Card className='Cont' variant='outlined' id="ContImage">
                                 
                                <div className='Cont Images'>
                                 
                                  <div className="slider">
                                      <ul className="slider1">
                                         <li>
                                           <img class="PCImage" src={Img_Xample1} width="350" height="350" /> 
                                         </li>
                                      </ul>  
                                  </div>
                                </div>
                                
                           </Card>

                           <Card className='Cont' variant='outlined'>
                                <div className='Cont Info'>
                                          <h1>{this.state.title}</h1>
                                          <Tabs
                                            className="Tabs"
                                            value={this.props.value}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            onChange={this.props.handleChange}
                                            aria-label="disabled tabs example"
                                          >
                                             <Tab
                                                className="Tab"
                                                value="one"
                                                label="Description"
                                                wrapped
                                                {...this.props.a11yProps('one')}
                                              />
                                              <Tab className="Tab" value="two" label="How to" {...this.props.a11yProps('two')} />
                                              <Tab className="Tab" value="three" label="Q&A" {...this.props.a11yProps('three')} />
                                          </Tabs>
                                          <br1/> <br1/> <br1/> 
                                          <this.props.TabPanel value={this.props.value} index="one">
                                              <section className="Sect">
                                               {this.state.description}
                                              </section>
                                          </this.props.TabPanel>
                                          <this.props.TabPanel value={this.props.value} index="two">
                                             <section className="Sect">
                                               
                                                   {this.state.howto[0]}
                                                   <br/><br/>
                                                   {this.state.howto[1]}
                                                   <br/><br/>
                                                   {this.state.howto[2]}
                                                   <br/><br/>
                                                   {this.state.howto[3]}
                                                   <br/><br/>
                                                   {this.state.howto[4]}
                                                   <br/>
                                              </section>
                                          </this.props.TabPanel>
                                          <this.props.TabPanel value={this.props.value} index="three">
                                             <section className="Sect">
                                                   {this.state.qa[0]}
                                                   <br/><br/>
                                                   {this.state.qa[1]}
                                                   <br/><br/>
                                                   {this.state.qa[2]}
                                                   <br/><br/>
                                                   {this.state.qa[3]}
                                                   <br/><br/>
                                                   {this.state.qa[4]}
                                                   <br/>
                                              </section>
                                          </this.props.TabPanel>
                                 </div>
                               

                            </Card>
                           
                        </article>
                    </Fade>
                </Modal>  
       </CssBaseline>
     </React.Fragment>
    )
  }
}

