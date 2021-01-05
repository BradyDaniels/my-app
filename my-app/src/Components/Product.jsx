import React, { Component } from 'react'

import { CssBaseline, Typography } from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import Img_Xample1 from './Images/ProductXample1.jpg';



export default class Product extends Component {
    

    state={
        product:[1,2]
    }


    a=(p)=>{
        
        if(p.id===this.props.products.id){
          this.props.handleOpen()
          console.log('function a:',p)
          this.props.putData(p)
        }  
    }
    
    

    render() {
        return (
            <React.Fragment>
                <Card className="Card" onClick={this.a.bind(this,this.props.products)}> 
                <CardActionArea>
                    <CardContent className="Content">
                            <Typography variant="h5" color="initial" className="Title"> {this.props.products.title} </Typography>
                            
                            <img class="PImage" src={Img_Xample1} width="200" height="150" />
                            
                            <Typography variant="body2" component="p" color="initial" className="pText"> 
                                {this.props.products.description}
                            </Typography>

                            <Typography variant="body2" component="p" color="initial" className="pPrice"> 
                                {this.props.products.price} $cad
                            </Typography>
                    </CardContent>
                </CardActionArea>
            


                </Card>
                
               
        </React.Fragment>
        )
    }
}
