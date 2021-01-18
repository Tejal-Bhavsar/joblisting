import React,{ useState,useEffect} from 'react'
import JobCard from '../components/job/JobCard'
import { Box, Button,Select,MenuItem,makeStyles, CircularProgress } from '@material-ui/core';
import db from '../firebase'
import JobData from '../DummyData'
import NewJobModal from '../components/job/NewJobModal'
import { RemoveFromQueueTwoTone } from '@material-ui/icons';

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
    const [ jobs, setjobs ] = useState([])
    const [ loading,setloading] = useState(true)
   


    const fetchJobs = async () => {
        const req = await db.collection("jobs").get();
        // console.log(req,"req")
        const tempJobs = req.docs.map((job) => ({...job.data()})  )
        setjobs(tempJobs);
        setloading(false)
        
    }

    useEffect(() => {
    //    db.collection("jobs").onSnapshot((snapshot) => setjobs(snapshot.docs.map((doc) => ({id:doc.id,
    //     data: doc.data()}))))
    fetchJobs();
       
    },[])


   

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

        { 
         loading ? 
         <Box justifyContent="center" display="flex">
             <CircularProgress /> 
        </Box>:  jobs.map((job) => (
             <JobCard key={job.id} job={job}/>   
         ))
         
         
         
        }
        {console.log(jobs,"mila h")}
        
        {/* <JobCard />
        <JobCard /> */}
       
        </>
    )
}
