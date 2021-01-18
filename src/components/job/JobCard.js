import { Grid, Typography,makeStyles } from '@material-ui/core'
import React from 'react'
import { Box, Button } from '@material-ui/core';


const useStyles= makeStyles((theme) => ({
    wrapper: {
        border:"1px solid #e8e8e8",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.3s"
    },
    companyName: {
        fontSize:"13.5px",
        backgroundColor: "#18E1D9",
        borderRadius: "5px",
        padding: theme.spacing(0.75),
        display: "inline-block",
        fontWeight: 600,

    },
    skillChips: {
        margin: 5,
        padding: 2,
        fontSize: "14.5",
        borderRadius: "5px",
        transition: "0.3s",
        cursor: "pointer",
        fontWeight: 600,
        backgroundColor: "#0B0B15",
        color:"white"

    }
}))

const skills = ["Javascript", "React.js", "Node.js"];

export default function JobCard({job}) {
    console.log(job)
    const classes = useStyles()
    return (
        <Box p={2} mb={4} className={classes.wrapper}>
            {console.log("amogo",job)}
            <Grid container  alignItems="center">
                <Grid item xs >
                    <Typography variant="subtitle1">{ job.title }</Typography>
                    <Typography className={classes.companyName} variant="subtitle2">{job.companyName}</Typography>
                </Grid>
                <Grid item  container xs >
                    {job.skills.map((skill) => (<Grid className={classes.skillChips} key={skill} item>{skill}</Grid>) )}
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs >
                    <Grid item>
                    <Typography variant="caption">{`${job.postedOn}`} | {job.location} | {job.type}</Typography>
                    </Grid>
                   <Grid item>
                       <Box mt={2}>
                       <Button variant="outlined" >Check</Button>
                       </Box>
                   </Grid>
                </Grid>
            </Grid> 
            
        </Box>
    )
}
