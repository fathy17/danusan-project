import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import { connect } from 'react-redux'
import { Typography, Grid, Paper, Container, DialogTitle, DialogActions, AppBar, Toolbar } from '@material-ui/core';
import { removeItem, addQuantity, subtractQuantity } from '../Store/Actions/cartAction'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';

class Cart extends Component {

    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
        this.setState({ open: true })
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
        this.setState({ open: true })
    }

    render() {
        let addedItems = this.props.addedItems.length ?
            (
                this.props.addedItems.map(addedItem => {
                    return (
                        <Fragment key={addedItem.id}>
                            <Grid item xs={12}>
                                <Paper style={{ background: '#efdb86' }}>
                                    <Grid container spacing={3} style={{ margin: '10px', width: '100%' }}>
                                        <Grid item xs ={12} md={3} style={{textAlign:'center'}}>
                                            <img
                                                src={addedItem.img}
                                                alt={addedItem.title}
                                                style={{ objectFit: 'cover', width: '100px', height: '100px', borderRadius: '10px' }} />
                                        </Grid>
                                        <Grid item xs={12} md={9} >
                                            <div className="item-desc">
                                                <Typography>{addedItem.title}</Typography>
                                                <Typography>{addedItem.desc}</Typography>
                                                <Typography style={{fontWeight:'500'}}>Harga: Rp. {addedItem.price}</Typography>
                                                <div style={{display: 'flex', marginTop:'10px', marginRight: '10px', justifyContent:'space-between'}}>
                                                    <div style={{ display: 'flex'}}>
                                                        <Button onClick={() => { this.handleAddQuantity(addedItem.id) }}><ArrowDropUp /></Button>
                                                        <Typography style={{fontSize:'1.1rem',fontWeight:'500'}}>
                                                            {addedItem.quantity}
                                                        </Typography>
                                                        <Button onClick={() => { this.handleSubtractQuantity(addedItem.id) }}><ArrowDropDown /></Button>
                                                    </div>
                                                    <Button style={{ background: '#f12c53', color: 'white' }} onClick={() => { this.handleRemove(addedItem.id) }}>Hapus</Button>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Fragment>
                    )
                })
            ) :

            (
                <div style={{ textAlign: 'center' }}>
                    <ShoppingCart />
                    <Typography>Silahkan Memilih Produk</Typography>
                    <br />
                </div>

            )
        return (
            <Fragment>
                <IconButton aria-label="show new cart items" color="inherit" onClick={() => { this.handleClickOpen() }}>
                    <Badge badgeContent={this.props.addedItems.length} color="primary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <Dialog
                    open={this.state.open}
                    onClose={() => { this.handleClose() }}
                    aria-labelledby="responsive-dialog-title"
                    style={{}}
                >
                    <DialogTitle >Keranjang Barang</DialogTitle>
                    <Container component='main' style={{ height: '100%', width: '100%' }}>
                        <Grid style={{ margin: '10px 5px' }}>
                            {addedItems}
                        </Grid>
                    </Container>
                    <AppBar position='fixed' style={{position:'absolute', background: '#f12c53', color: 'white', paddingRight:'0' }}>
                        <Toolbar style={{ justifyContent: 'center' }}>
                            <Typography >Keranjang Belanja</Typography>
                        </Toolbar>
                    </AppBar>
                    <DialogActions>
                        <Typography style={{fontWeight:'500'}}>Total Harga: Rp. {this.props.total}</Typography>
                        <Button style={{ background: '#f12c53', color: 'white' }}>Lanjut Beli</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.cart.addedItems,
        total: state.cart.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)