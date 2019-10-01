import React from 'react';
import { Typography, Link } from '@material-ui/core';

function Copyright() {
    return (
      <Typography variant="body2" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Simbada Project
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    return (
        <div style={{
            position: 'relative',
            left: '0',
            bottom: '0',
            width: '100%',
            backgroundColor: '#f12c53',
            color: 'white',
            textAlign: 'center',
        }}>
            <Copyright/>
        </div>
    )
}

export default Footer