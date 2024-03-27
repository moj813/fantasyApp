import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  borderRadius: '6em',
  fontWeight: 500,

  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '1em 2.5em',
  display: 'inline-block',
  transition: 'all .2s',
  border: 'none',
  fontFamily: 'inherit',
  fontSize: theme.typography.pxToRem(17),
  color: 'black',
  backgroundColor: 'white',
  '&:hover': {
    transform: 'translateY(-3px)',
    backgroundColor: '#7522e6',
    color: 'white',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    '&::after': {
      transform: 'scaleX(1.4) scaleY(1.6)',
      opacity: 0,
    },
  },
  '&:active': {
    transform: 'translateY(-1px)',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
  },
}));

function Button(props) {
  return <ButtonRoot {...props} />;
}

export default Button;
