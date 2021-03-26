import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

import "./Login.css"
import MenssageContainer from "./Components/Login/Menssage/MenssageContainer";

const MyLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const Login = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

  //Funcion para actualizar State de usuarios
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value 
    });
  };

  const handleLogin = (e) => {
      e.preventDefault();

      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(response => {
          props.history.push('/products');
      })
      .catch(error => {
          console.log(error);
          alert(error.menssage);
      });
  };

  //Google Login
  const loginGoogle = (e) => {
    e.preventDefault();

    var provider =  new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(response => {
      props.history.push('/products');
  })
  .catch(error => {
      console.log(error);
      alert(error.menssage);
  });
};


//Facebook Login
const loginFacebook = (e) => {
  e.preventDefault();

  var provider =  new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(response => {
    props.history.push('/products');
})
.catch(error => {
    console.log(error);
    alert(error.menssage);
});
};


  
    return (
    <div className="o-container-login">
        <MenssageContainer></MenssageContainer>

        <Container component="main" maxWidth="xs" className="o-container-singup">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <form className={classes.form} onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              autoFocus
              defaultValue={user.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              defaultValue={user.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Ingresar
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={loginGoogle}
            >
              Ingresar con Google 
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={loginFacebook}
            >
              Ingresar con Facebook
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup" component={MyLink} variant="body2">
                    {"¿Eres miebro? Registrarse"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
       
    </div>  
    );
  }; 

  export default withRouter(Login);