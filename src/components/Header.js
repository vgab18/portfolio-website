import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Lobster !important'
    },
    button: {
        textTransform: 'none'
    }
  }));

  function ElevationScroll(props){
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  

export default function Header(props){
    const classes = useStyles();

    return(
        <div>
          <ElevationScroll {...props}>
            <AppBar elevation={0} style={{backgroundColor: 'white', color: '#363645'}}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Vince
                        </Typography>
                        <Hidden xsDown>
                          <div>
                            <Link activeClass="active" offset={-120} to="services" spy={true} smooth={true} duration={500}>
                              <Button color="inherit" className={classes.button}>Services</Button>
                            </Link>
                            <Button color="inherit" className={classes.button}>Projects</Button>
                            <Button color="inherit" className={classes.button}>Career</Button>
                            <Button color="inherit" className={classes.button}>About</Button>
                          </div>
                        </Hidden>
                        <Hidden smUp>
                          Hello
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>
          </ElevationScroll>
          <Toolbar id="back-to-top-anchor" />
          <ScrollTop {...props}>
              <Fab style={{backgroundColor: '#08BDBA', color: 'white'}} size="small" aria-label="scroll back to top">
                  <KeyboardArrowUpIcon />
              </Fab>
          </ScrollTop>
        </div>
    )
}