import React from 'react'
import '../styles/style.css'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AvatarIcon from '../styles/images/avatar.jpg'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function About(){
    return(
        <div className="about-container">
            <Container maxWidth="md">
                <Grid container>
                    <Grid md={9} sm={8} xs={12} item>
                        <div>
                            <Typography gutterBottom variant="h4">Hello,</Typography>
                            <Typography className="txt-name" gutterBottom variant="h3">I'm Vince Gabriel Lagarto</Typography>
                            <Typography variant="h5" className="txt-position">{"<"}Front-End Web Developer{"/>"}</Typography>
                        </div>
                        <div className="socials-container">
                            <IconButton className="btn-socials">
                                <TwitterIcon fontSize="medium" />
                            </IconButton>
                            <IconButton className="btn-socials">
                                <FacebookIcon fontSize="medium" />
                            </IconButton>
                            <IconButton className="btn-socials">
                                <InstagramIcon fontSize="medium" />
                            </IconButton >
                            <IconButton className="btn-socials">
                                <GitHubIcon fontSize="medium" />
                            </IconButton >
                        </div>
                        <Button className="btn-download-cv" variant="contained" color="primary">Donwload CV</Button>
                    </Grid>
                    <Hidden xsDown>
                        <Grid md={3} sm={4} item style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="avatar-container">
                                <img src={AvatarIcon} height="180"/>
                            </div>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </div>
    )
}