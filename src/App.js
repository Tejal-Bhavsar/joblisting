import { ThemeProvider,Grid } from '@material-ui/core';
import './App.css';
import theme from './theme/theme'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import NewJobModal from './components/job/NewJobModal';
import JobData from './DummyData'

function App() {
  return (
    <>
    <ThemeProvider theme={theme} >
      <Header />
      <NewJobModal />
      <Grid container justify="center">
        <Grid item xs={10}>
          <Searchbar />
        </Grid>
      </Grid>
    </ThemeProvider>
      
    </>
  );
}

export default App;
