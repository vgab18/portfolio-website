import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function SectionTitle(props){
    return(
        <div className="section-title">
            <Typography variant="h4">
                {props.title}
            </Typography>
        </div>
    )
}