import React, { Component, useEffect} from 'react';
import './imagenes/logo.PNG';
import firebase from 'firebase';
import './index.css';
import './api';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  LogingEmail() {
    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLogingButton() {
    if (this.state.user) {
      return (
        <div class='main-div'>
          <div class='main-div'>
            <p>  Bienvenido {this.state.user.displayName}</p>
            <button class="button-logout" onClick={this.handleLogout}>Cerrar sesión</button>
          </div>
        </div>
      );


    } else {
      return (
        <div className="main-div">
          <h2>Login</h2>
          <input type="email" placeholder="Email" id="email_field" ></input>
          <input type="password" placeholder="Contraseña" id="password_field"></input>
          <button onClick={this.LogingEmail} >Iniciar sesión</button>
          <button onClick={this.handleAuth}>Iniciar sesión con google</button>
        </div>
      );

    }
  }
  
  render() {
    
    return (
     
      <div className="main-div">
        
        {this.renderLogingButton()}
      </div>

    );
  }
 
}

export default App;
