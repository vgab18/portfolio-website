import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AvatarIcon from '../styles/images/avatar (1).png'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import GetAppIcon from '@material-ui/icons/GetApp';
import MouseIcon from '@material-ui/icons/Mouse';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-scroll';

export default function Home(){
    return(
        <div className="about-container">
            <Container maxWidth="md">
                <Grid container>
                    <Grid md={6} sm={6} xs={12} item>
                        <div className="about-txt-container">
                            <div className="home-greetings">
                                <Typography className="txt-name" gutterBottom variant="h3">Hello,</Typography>
                                <Typography style={{color: '#08bdba', marginLeft: '10px'}} className="txt-name" gutterBottom variant="h3">I'm Vince</Typography>
                            </div>
                            <Typography variant="h5" gutterBottom className="txt-position">{"<"}Front-End Web Developer{"/>"}</Typography>
                            <Typography variant="subtitle1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book.</Typography>
                        </div>
                        <div className="socials-container">
                            <IconButton className="btn-socials">
                                <TwitterIcon fontSize="default" />
                            </IconButton>
                            <IconButton className="btn-socials">
                                <FacebookIcon fontSize="default" />
                            </IconButton>
                            <IconButton className="btn-socials">
                                <InstagramIcon fontSize="default" />
                            </IconButton >
                            <IconButton className="btn-socials">
                                <GitHubIcon fontSize="default" />
                            </IconButton >
                        </div>
                        <div className="download-cv-container">
                            <Button className="btn-download-cv" startIcon={<GetAppIcon />} variant="outlined" color="primary">Download CV</Button>
                        </div>
                    </Grid>
                    <Hidden xsDown>
                        <Grid md={6} sm={6} item>
                            <div className="home-avatar-container">
                                <img className="home-avatar-image" src={AvatarIcon} alt="avatar"/>
                            </div>
                        </Grid>
                        <Grid md={12} item>
                            <Link activeClass="active" offset={-120} to="services" spy={true} smooth={true} duration={500}>
                                <div className="home-scroll-bottom">
                                    <MouseIcon /> <p>Scroll down</p> <ArrowDownwardIcon />
                                </div>
                            </Link>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </div>
    )
}