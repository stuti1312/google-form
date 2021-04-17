import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import './App.css'
class App extends Component {

  responseGoogle= (response) => {
    console.log(response);
    console.log(response.profileObj)
  }

  render() {
    return (
      <div className='btn'>
        <GoogleLogin
          clientId='136266867406-vattoqdqotloih5s66t7o08c87klnlr9.apps.googleusercontent.com'
          buttonText='SignIn with Google'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> 
      </div>
    )
  }
}

export default App


