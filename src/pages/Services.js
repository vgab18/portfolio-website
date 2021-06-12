import React from 'react'
import '../styles/style.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Service1 from '../styles/images/service1.png'

export default function Services(){
    return(
        <div style={{padding: '50px 0px'}}>
            <Container maxWidth="lg">
                <div className="services-title-header">
                    <Typography>What do I do</Typography>
                </div>
                <Grid container justify="center" spacing={3}>
                    <Grid item lg={4} xs={12}>
                        <Card elevation={0} className="services-card">
                            <img src={Service1} className="services-image"/>
                            <CardContent>
                                <Typography variant="h6">Responsive Website Design</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Card elevation={0} square className="services-card">
                            <img src={Service1} className="services-image"/>
                            <CardContent>
                                <Typography variant="h6">Convert Mockup to a Website</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Card variant="outlined" square className="services-card">
                            Hello
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}