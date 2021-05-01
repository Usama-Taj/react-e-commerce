import {
  OutlinedInput,
  Card,
  CardContent,
  InputLabel,
  Typography,
  FormControl,
  Button,
  Paper,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
  minHeight: {
    minHeight: "100vh",
  },
  formControlMargin: {
    margin: "5px",
  },
}));
const Login = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.minHeight}
    >
      <Grid item md={6}>
        <Paper variant="elevation" elevation={3}>
          <Typography variant="h5" align="center" gutterBottom>
            Welcome to E-commerce Admin Panel
          </Typography>
          <Card variant="outlined">
            <CardContent>
              <form noValidate autoComplete="off">
                <FormControl
                  fullWidth
                  className={classes.formControlMargin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Username
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    // value={values.amount}
                    // onChange={handleChange("amount")}
                    labelWidth={70}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classes.formControlMargin}
                  variant="outlined"
                  type="password"
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    // value={values.amount}
                    // onChange={handleChange("amount")}
                    labelWidth={70}
                    type="password"
                  />
                </FormControl>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  className={classes.formControlMargin}
                >
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
