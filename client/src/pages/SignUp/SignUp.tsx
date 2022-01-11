import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          flexDirection="column"
          className={classes.authWrapper}
        >
          <Paper
            style={{ display: 'block', margin: 'auto', width: '60%', justifyItems: 'center', justifyContent: 'center' }}
            elevation={2}
          >
            <Box
              width="100%"
              maxWidth={450}
              p={3}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
            >
              <Typography className={classes.welcome} component="h3" variant="h5">
                Sign up
              </Typography>
              <Box mt={3} justifyContent="center" ml={15}>
                <SignUpForm handleSubmit={handleSubmit} />
                <div style={{ marginBottom: 20 }} />

                <AuthHeader linkTo="/login" asideText="Already have an account?" btnText="Login" />
              </Box>
            </Box>
          </Paper>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
