import Dialog from '@material-ui/core/Dialog';
import React, { Component, Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { signIn } from '../Store/Actions/authAction'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Simbada Project
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class LoginPopUp extends Component {
  state = {
    showPassword: false,
    open: false,
    email: '',
    password: ''
  }

  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <Button onClick={this.handleClickOpen} style={{
          backgroundColor: '#EFDB86',
          color: '#4e4d53'
        }}>
          Masuk
      </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30px', alignItems: 'center' }}>
              <Avatar >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" style={{ margin: '20px 0' }}>
                Masuk
        </Typography>
              <form noValidate onSubmit={this.handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                 <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"

                >
                  Masuk
          </Button>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        </Dialog>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(null, mapDispatchToProps)(LoginPopUp)


