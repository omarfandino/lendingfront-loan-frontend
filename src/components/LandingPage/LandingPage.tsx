import { Grid } from '@mui/material';
import Header from '../Header/Header';
import PageContent from '../PageContent/PageContent';
import Footer from '../Footer/Footer';
import { CONTENT_STYLES, GRID_STYLES } from './LandingPage.styles';

function LandingPage() {
  return (
    <Grid container sx={GRID_STYLES}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container sx={CONTENT_STYLES}>
        <PageContent />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
