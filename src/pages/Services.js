import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Service1 from '../styles/images/service1.png'
import SectionTitle from '../components/SectionTitle';

export default function Services(){
    const height = window.innerHeight;
    return(
        <div id="services" className="service-container">
            <div className="parallax"/>
            <Container maxWidth="lg">
                <SectionTitle title={"What do I Do"} />
                <Grid container justify="center" spacing={10}>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Card elevation={5} className="services-card">
                            <img src={Service1} className="services-image" alt="Responsive Website Design"/>
                            <CardContent>
                                <Typography variant="h6">Responsive Website Design</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Card elevation={5}  className="services-card">
                            <img src={Service1} className="services-image" alt="Conver Mockup to a Website"/>
                            <CardContent>
                                <Typography variant="h6">Convert Mockup to a Website</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Card elevation={5}  className="services-card">
                            <img src={Service1} className="services-image" alt="Conver Mockup to a Website"/>
                            <CardContent>
                                <Typography variant="h6">Convert Mockup to a Website</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}