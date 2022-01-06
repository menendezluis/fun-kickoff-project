import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
  },
  label: {
    color: '#0ff',
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 20,
  },
  inputs: {
    color: '#f0f',
    fontSize: 14,
    fontWeight: 700,
  },
  inputLabelNoShrink: {
    transform: 'translate(32px, 24px) scale(1)',
  },
}));

export default useStyles;
