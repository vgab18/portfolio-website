import React from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function About(){
    return(
        <div style={{backgroundColor: '#c5cae9', height: '400px', paddingTop: '50px'}}>
            <Container maxWidth="md">
                <Paper style={{padding: '15px'}}>
                    <Typography variant="h4">Hello,</Typography>
                    <br />
                    <Typography variant="h3">I'm Vince Gabriel Lagarto</Typography>
                    <br />
                    <Typography variant="h4">Front-End Web Developer</Typography>
                    <Typography>

                    </Typography>
                </Paper>
            </Container>
        </div>
    )
}