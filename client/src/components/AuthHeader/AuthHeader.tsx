import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
}

const AuthFooter = ({ linkTo, asideText, btnText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Typography style={{ color: 'black' }} variant="subtitle2">
        {asideText}{' '}
        <Typography component={Link} to={linkTo} color="inherit" style={{ color: '#f14140' }} variant="subtitle2">
          {btnText}
        </Typography>
      </Typography>
    </>
  );
};

export default AuthFooter;
