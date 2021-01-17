import { DialogContent,Dialog,DialogTitle,Select,MenuItem, FilledInput, Grid,Box,Typography,DialogActions,Button, makeStyles ,IconButton } from '@material-ui/core'
import {  Close as CloseIcon } from '@material-ui/icons'
import React from 'react'
 
const useStyles = makeStyles(theme => ({
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
export default function NewJobModal() {
    const classes = useStyles();
    const skills = [
        "javascript",
        "CSS",
        "HTML",
        "RUBY"
    ]
    return (
        <Dialog open={true} fullWidth >
            <DialogTitle>
                <Box display="flex" justifyContent='space-between' alignItems="center">
                    Post Job
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}> 
                    <Grid item xs={6} >
                        <FilledInput fullWidth placeholder="job title *" disableUnderline/>
                    </Grid>
                    <Grid item xs={6} >
                     <Select fullWidth variant="filled" disableUnderline defaultValue="full time">
                        <MenuItem value="full time" >Full Time</MenuItem>
                        <MenuItem value="part Time">Part Time</MenuItem>
                        <MenuItem value="contract">Remote Time</MenuItem>
                     </Select>
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput fullWidth placeholder="company  name *" disableUnderline/>
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput fullWidth placeholder="company URL *" disableUnderline/>
                    </Grid>
                    <Grid item xs={6} >
                        <Select fullWidth variant="filled" disableUnderline defaultValue="remote">
                        <MenuItem value="remote" >Full Time</MenuItem>
                        <MenuItem value="in office">Part Time</MenuItem>
                        
                        </Select>
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput fullWidth placeholder="Job Link" disableUnderline/>
                    </Grid>
                    <Grid item xs={12} >
                        <FilledInput fullWidth
                         placeholder="Job Description"
                         disableUnderline
                         fullWidth
                         multiline
                         row={4}
                         />
                    </Grid>
                    </Grid>
                    <Box mt={2}>
                      <Typography>Skills</Typography>
                      <Box display="flex">
                           {skills.map((skill) => <Box className={classes.skillChips} key={skill} p={2}>{skill}</Box>)}
                      </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box color="red" width="100%" display="flex" justifyContent="space-between">
                        <Typography varient="caption">Requred fields*</Typography>
                        <Button variant="contained" disableElevation color="primary">Post a Job</Button>
                    </Box>
                </DialogActions>
            </DialogTitle>
        </Dialog>
            
        
    )
}
