// import React, { Component } from 'react'
// import {GoogleLogin, GoogleLogout} from 'react-google-login'

// const CLIENT_ID = '582401840202-kfc9qsoa1jjo3tf1tjbjk45187putiru.apps.googleusercontent.com' ;

// class GoogleBtn extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isLogedIn: false,
//              accessToken: ''
//         }

//         this.login = this.login.bind(this);
//         this.handleLoginFailure = this.handleLoginFailure.bind(this);
//         this.logout = this.logout.bind(this);
//         this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
//     }
    
//     login(response){
//         if (response.accessToken) {
//             this.setState( state => ({
//                 isLogedIn: true,
//                 accessToken: response.accessToken
//             })
//             )
//         }
//     }

//     logout(response){
//         this.setState(state => ({
//             isLogedIn: false,
//             accessToken: ''
//         })
//         )
//     }

//     handleLoginFailure(response){
//         alert('Failed to login')
//     }

//     handleLogoutFailure(response){
//         alert('Failed to login')
//     }

//     render() {
//         return (
//             <div>
//                 { this.state.isLogedIn ?
//                     <GoogleLogout
//                         clientID= {CLIENT_ID}
//                         buttonText='LOGOUT'
//                         onLogoutSuccess= {this.logout}
//                         onFailure= {this.handleLogoutFailure}
//                     >
//                     </GoogleLogout> :
//                     <GoogleLogin
//                         clientID= {CLIENT_ID}
//                         buttonText='LOGIN'
//                         onLoginSuccess= {this.login}
//                         onFailure= {this.handleLoginFailure}
//                         cookiePolicy= {'single_host_origin'}
//                         responseType= 'code, token'
//                 />
//                 }

//                 { this.state.accessToken ?
//                     <h3> your access token: 
//                         <br/>
//                         <br/> 
//                         {this.state.accessToken}
//                     </h3> : null
//                     }
//             </div>
//         )
//     }
// }

// export default GoogleBtn
