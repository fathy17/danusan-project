import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom'
import Cart from './Cart';
import { connect } from 'react-redux'
import History from '@material-ui/icons/History'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Payment from '@material-ui/icons/Payment'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import Build from '@material-ui/icons/Build'
import { signOut } from '../Store/Actions/authAction'
import Profile from './Profile-Page/profile'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: '#f12c53',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ProfileUser = (props) => {
  const { auth } = props
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-30px', marginBottom: '30px' }}>
        <div style={{ background: 'grey', color: 'white', width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
          <Typography>Foto</Typography>
        </div>
      </div>
      <Divider />
      <List>
        <ListItem button >
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText>Profil</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><History /></ListItemIcon>
          <ListItemText>Riwayat Belanja</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><Payment /></ListItemIcon>
          <ListItemText>Bukti Pembayaran</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><Build /></ListItemIcon>
          <ListItemText>Pengaturan Akun</ListItemText>
        </ListItem>
        <Link to="/" style={{ textDecoration: 'none', color:'black' }}>
          <ListItem button onClick={props.signOut}>
            <ListItemIcon><PowerSettingsNew /></ListItemIcon>
            <ListItemText>Keluar</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const username = props.profile.firstName ? <Typography variant="h6" noWrap style={{ flexGrow: '1' }}>
    {props.profile.firstName + " " + props.profile.lastName}
  </Typography> : <Typography variant="h6" noWrap style={{ flexGrow: '1' }}></Typography>

  if (!auth.uid) return <Redirect to='/' />

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {username}
          <Cart />
          <Link to="/" style={{ textDecoration: 'none' }}><Button style={{ color: 'white' }}>Home</Button></Link>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} style={{display:'flex', background:'white', justifyContent:'center', alignItems:'center', marginTop:'60px'}}>
            <Profile/>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser)
