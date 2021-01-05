import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function FootPage(){
    
        return (
            <Container Class="FootPage">
                        
            <Container maxWidth="false" class="SocialMedia">
                <ul>
                    <li> <FacebookIcon id="FootIcon"/> Facebook</li>
                    <li> <TwitterIcon id="FootIcon"/> Twitter</li>
                    <li> <InstagramIcon id="FootIcon"/> Instagram</li>
                </ul>
            </Container>
           <Typography variant="h1" color="initial" class="Ty"> ® / ™ © 2021 Entreprise Name.All Rights Reserved.</Typography>
        </Container>
        );

}
