import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../Components/Typography';
import DisabledAccordion from '../Components/DisabledAccordion';
function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
        <Typography variant="h4" component="span">
          Got any questions? Need help?
        </Typography>

      <DisabledAccordion width="40%" />
    </Container>
  );
}

export default ProductSmokingHero;