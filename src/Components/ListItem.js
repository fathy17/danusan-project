import React, { Component } from 'react';
import { Box, Container, Paper, Typography, Grid, Fab } from '@material-ui/core';
import { connect } from 'react-redux'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { addToCart } from '../Store/Actions/cartAction'

class ListItem extends Component {

    handleClick = (id) => {
        this.props.addToCart(id)
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <Grid item xs={12} sm={6} md={6} lg={6} key={item.id}>
                    <Paper style={{ background: '#efdb86' }}>
                        <Grid container spacing={3} style={{ margin: '0', width: '100%' }}>
                            <Grid item xs={12} sm={12} md={12} style={{textAlign:'center'}}>
                                <Typography style={{fontSize:'1.2rem', fontWeight:'500'}}>{item.title}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} style={{textAlign:'center'}}>
                                <img 
                                    src={item.img} alt={item.title} 
                                    style={{ objectFit: 'cover', width: '150px', height: '150px', borderRadius: '10px' }} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                                <Typography paragraph>{item.desc}</Typography>
                                <br/>
                                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <Typography style={{fontSize:'1.2rem', fontWeight:'600'}}>Harga: Rp. {item.price} /Box</Typography>
                                    <Fab style={{ background: '#f12c53', color: 'white' }}
                                        onClick={() => { this.handleClick(item.id) }}><ShoppingCart /></Fab>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            )
        })
        return (
            <Box id="produk" style={{
                margin: '30px 10%'
            }}>
                 <div style={{display:'flex', margin:'20px', alignItems:'center'}}>
                        <hr style={{height:'5px', width:'500px', backgroundImage:'linear-gradient(to right, rgba(241, 44, 83, 0), rgba(241,44,83,100) )', border:'none'}}/>
                        <Typography style={{fontSize:'1.5rem', margin:'0 10px', color:'white'}}>PRODUK</Typography>
                        <hr style={{height:'5px', width:'500px', backgroundImage:'linear-gradient(to left, rgba(241, 44, 83, 0), rgba(241,44,83,100) )', border:'none'}}/>
                    </div>
                <Container >
                    <Grid container spacing={3}>
                        {itemList}
                    </Grid>
                </Container>
            </Box>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        items1: state.firestore.ordered.items,
        items: state.cart.items
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListItem)