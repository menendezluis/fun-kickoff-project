import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';
import TextInput from '../../../components/TextInput';
import InputLabel from '@mui/material/InputLabel';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          {/*    <TextField
            id="username"
            label={<Typography className={classes.label}>Username</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="username"
            autoComplete="username"
            autoFocus
            helperText={touched.username ? errors.username : ''}
            error={touched.username && Boolean(errors.username)}
            value={values.username}
            onChange={handleChange}
          />
          <TextField
            id="email"
            label={<Typography className={classes.label}>E-mail address</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="email"
            autoComplete="email"
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            id="password"
            label={<Typography className={classes.label}>Password</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            type="password"
            autoComplete="current-password"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
          />
          */}
          <InputLabel shrink htmlFor="bootstrap-input" style={{ color: 'black' }}>
            <Typography fontWeight="fontWeightBold" variant="button" display="block" gutterBottom>
              {' '}
              Username
            </Typography>
          </InputLabel>
          <TextInput text={'Your email'} />
          <InputLabel shrink htmlFor="bootstrap-input" style={{ color: 'black' }}>
            <Typography fontWeight="fontWeightBold" variant="button" display="block" gutterBottom>
              {' '}
              Email Address
            </Typography>
          </InputLabel>
          <TextInput text={'Your email'} />
          <InputLabel shrink htmlFor="bootstrap-input" style={{ color: 'black' }}>
            <Typography fontWeight="fontWeightBold" variant="button" display="block" gutterBottom>
              {' '}
              Password
            </Typography>
          </InputLabel>
          <TextInput text={'Your Password'} />
          <Box textAlign="center" marginTop={5}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{
                borderRadius: 5,
                backgroundColor: '#f14140',
                padding: '18px 36px',
                fontSize: '18px',
                marginTop: '20px',
              }}
            >
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Sign Up'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
