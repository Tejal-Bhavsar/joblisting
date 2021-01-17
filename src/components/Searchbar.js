import React from 'react'
import JobCard from '../components/job/JobCard'
import { Box, Button,Select,MenuItem,makeStyles } from '@material-ui/core'

const useStyles =  makeStyles({
    wrapper: {
        backgroundColor: "#fff",
        display: "flex",
        boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        "& > * " : {
            flex: 1,
            height: "45px",
            margin: "8px",
        }
    }
})
export default function Searchbar() {
    const classes = useStyles();
    return (
       <>
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            <Select variant="filled" disableUnderline defaultValue="full time">
                <MenuItem value="full time" >Full Time</MenuItem>
                <MenuItem value="part Time">Part Time</MenuItem>
                <MenuItem value="contract">Remote Time</MenuItem>
            </Select>
            <Select variant="filled" disableUnderline defaultValue="remote">
                <MenuItem value="remote" >remote</MenuItem>
                <MenuItem value="in office">in office</MenuItem>
            </Select>
            <Button color="primary" variant="contained">Search</Button>
        </Box>
        <JobCard />
        </>
    )
}
