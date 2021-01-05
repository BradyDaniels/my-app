import React, { Component } from 'react'
import NavBar from './NavBar';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline';

import First_Img from './Images/First1.jpg';
import Second_Img from './Images/Second2.jpg';
import Third_Img from './Images/Third3.png';


import Button from '@material-ui/core/Button'

import'./CSS/master-Lpage.css';


export default class LPage extends Component {
    render() {
        return (
            <React.Fragment class="body">
                <CssBaseline>
                   
                    <br/><br/>

                    <Container maxWidth="false" maxHeigh="False" id="C_Logo" >
                            <br/><br/><br/>
                            <Typography variant="h1" component="h2" align="Center"> LOGO </Typography>
                    </Container>

                    

                    <Container class="Content First">
                        <Container class="Text">
                            <h2 class="Title">Content First Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Tenetur temporibus cumque, exercitationem voluptatum, aspernatur dolorem dolores soluta non quia eos deserunt, 
                                voluptas pariatur eaque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <br/>
                            <Button size="large" id="BtnMore" variant="contained" color="primary"> 
                               More
                            </Button>
                        </Container>
                        <Container maxWidth="sm" maxHeigh="sm" class="Image">
                            <img src={First_Img} alt="Product" width="550"/>
                        </Container>
                        
                    </Container>

                    <br/><br/>

                    <Container class="Content Second">
                        
                        <Container maxWidth="False" maxHeigh="False" class="Image">
                            <img src={Second_Img} alt="" width="200" height="300"/>
                        </Container>
                        
                        
                        <Container class="Text">
                            <h2 class="Title">Content Second Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Tenetur temporibus cumque, exercitationem voluptatum, aspernatur dolorem dolores soluta non quia eos deserunt, 
                                voluptas pariatur eaque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <br/>
                            <Button size="large" id="BtnMore" variant="contained" color="primary"> 
                               More
                            </Button>
                        </Container>
                       
                        
                        
                    </Container>

                    <Container class="Content Third">
                        
                        <Container maxWidth="False" maxHeigh="False" class="Image">
                            <img src={Third_Img} alt="" width="300" height="300" />
                        </Container>
                        
                        
                        <Container class="Text">
                            <h2 class="Title">Content Third Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Tenetur temporibus cumque, exercitationem voluptatum, aspernatur dolorem dolores soluta non quia eos deserunt, 
                                voluptas pariatur eaque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <br/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Tenetur temporibus cumque, exercitationem voluptatum, aspernatur dolorem dolores soluta non quia eos deserunt, 
                                voluptas pariatur eaque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </Container>
                       
                        
                        
                    </Container>

                   
                   
                </CssBaseline>
                
            </React.Fragment>
        )
    }
}
