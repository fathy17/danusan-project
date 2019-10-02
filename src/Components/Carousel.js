import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'

const Carousel = () => {
    return (
        <Box>
            <div
                style={
                    {
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://truffle-assets.imgix.net/e5c5e4c0-landscape.png")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                    }
                }>
                <div
                    style={{
                        textAlign: 'center',
                        position: 'absolute',
                        top: '60%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white'

                    }}
                >
                    <Typography variant='h3'>Danusan</Typography>
                    <Typography variant='h5'>"Deskripsi Tulis Sini"</Typography>
                    <br/>
                    <br/>
                    <Button href="#produk" target="_parent" variant='contained' style={{background:'#f12c53', color:'white'}}>Lihat Produk</Button>
                    <br/>
                    <KeyboardArrowDown style={{fontSize:'50px', color:'#f12c53'}}/>
                </div>
            </div>
        </Box>
    )
}
export default Carousel