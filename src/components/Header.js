import { Box } from '@material-ui/core'
import React from 'react'
import { Grid,Typography,Button } from '@material-ui/core'
 
export default function Header({openNewModal}) {
    return (
        <>
            <Box pl={8} py={10} bgcolor="secondary.main" color="white" >
                <Grid  container justify="centre">
                    <Grid   item xs={10}>
                        <Box display="flex"  justifyContent="space-between">
                            <Typography variant="h4" >Open jobs</Typography>
                            <Button onClick={openNewModal} variant="contained" color="primary" disableElevation>Post a Job
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
             
        </>
    )
}
