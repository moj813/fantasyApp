import * as React from 'react';
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
      <Button
        sx={{
          border: '0px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span" border="">
          Got any questions? Need help?
        </Typography>
      </Button>


      <DisabledAccordion width="60%" />
    </Container>
  );
}

export default ProductSmokingHero;