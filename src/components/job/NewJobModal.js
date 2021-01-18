import { DialogContent,Dialog,DialogTitle,Select,MenuItem, FilledInput, Grid,Box,Typography,DialogActions,Button, makeStyles ,IconButton, CircularProgress } from '@material-ui/core'
import {  Close as CloseIcon } from '@material-ui/icons'
import React, { useState } from 'react'
import db from '../../firebase'
import firebase from 'firebase'
 
const useStyles = makeStyles(theme => ({
    skillChips: {
        margin: 5,
        padding: 3,
        fontSize: "14.5",
        borderRadius: "5px",
        transition: "0.3s",
        cursor: "pointer",
        fontWeight: 600,
        border: "2px solid #0B0B15",
        color:"#0B0B15",
        "&:hover" : {
            backgroundColor: " #0B0B15",
            color: "white"
        }
    },
    included: {
        backgroundColor: " #0B0B15",
        color: "white"
    }
}))
export default function NewJobModal({newModal,closeModal}) {
    const initialState = {
        title: "",
        type: "full time",
        companyName: "",
        companyUrl: "",
        location: "remote",
        link: " ",
        description: "",
        skills: []
    }
    const [ jobDetails, setJobDetails ] = useState(initialState)
    const [ loading, setloading ] = useState(false)
    const classes = useStyles();
    const skills = [
        "javascript",
        "CSS",
        "HTML",
        "RUBY"
    ]

    const setcloseModal = () => {
        setJobDetails(initialState);
        closeModal()
    }

    const handleChange = (e) => {
        e.persist();
        setJobDetails((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }))
        console.log(jobDetails)
    }
    const addRemoveSkills = (skill) =>   jobDetails.skills.includes(skill) ? 
        // remove 
        setJobDetails(oldState => ({...oldState, skills: oldState.skills.filter((s) => s !== skill)})) : setJobDetails((oldState) => ({
            ...oldState,
            skills: oldState.skills.concat(skill)
        }))
        // add 

      const  postJob = async jobDetails => {
            await db.collection("jobs").add({...jobDetails})
        }
    const handleSubmit = async () => {
        setloading(true);
        await postJob(jobDetails);
        setloading(false);
    }
    return (
        <Dialog open={newModal} fullWidth >
            <DialogTitle>
                <Box display="flex" justifyContent='space-between' alignItems="center">
                    Post Job
                    <IconButton onClick={setcloseModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}> 
                    <Grid item xs={6} >
                        <FilledInput 
                        onChange={handleChange}                         name="title"
                        value={jobDetails.title} autoComplete="off" fullWidth placeholder="job title *" disableUnderline/>
                    </Grid>
                    <Grid item xs={6} >
                     <Select fullWidth variant="filled" 
                     onChange={handleChange}
                     value={jobDetails.type}
                     name="type" disableUnderline >
                        <MenuItem value="full time" >Full Time</MenuItem>
                        <MenuItem value="part Time">Part Time</MenuItem>
                     </Select>
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput 
                        onChange={handleChange}
                         autoComplete="off" fullWidth 
                        value={jobDetails.companyName}
                        name="companyName" placeholder="company  name *" disableUnderline/>
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput 
                        onChange={handleChange} 
                        autoComplete="off"
                        value={jobDetails.companyUrl}
                        name="companyUrl" fullWidth placeholder="company URL *" disableUnderline/>
                    </Grid>
                    <Grid item xs={6} >
                        <Select fullWidth variant="filled" 
                        value={jobDetails.location} name="location" disableUnderline >
                        <MenuItem value="remote" >remote</MenuItem>
                        <MenuItem value="in office">in office</MenuItem>
                        
                        </Select>
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput onChange={handleChange} autoComplete="off" fullWidth 
                        value={jobDetails.link} name="link"
                        placeholder="Job Link" disableUnderline/>
                    </Grid>
                    <Grid item xs={12} >
                        <FilledInput onChange={handleChange} autoComplete="off" fullWidth
                         placeholder="Job Description"
                         value={jobDetails.description}
                         name="description"
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
                           {skills.map((skill) => <Box className={`${classes.skillChips} ${jobDetails.skills.includes(skill) && classes.included}`} onClick={() => addRemoveSkills(skill)} key={skill} p={2}>{skill}</Box>)}
                      </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box color="red" width="100%" display="flex" justifyContent="space-between">
                        <Typography varient="caption">Requred fields*</Typography>

                        <Button onClick={handleSubmit} 
                        variant="contained" 
                        disable={loading}
                        disableElevation
                         color="primary">
                            { loading ? <CircularProgress color="secondary" size={22}/> :
                            ("Post a Job")  }
                             
                             </Button>
                    </Box>
                </DialogActions>
            </DialogTitle>
        </Dialog>
            
        
    )
}
