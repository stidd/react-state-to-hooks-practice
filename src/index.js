import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Grid, TextField, Button } from '@material-ui/core';


function App() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(false);

    function makeStars() {
        let stars = '';

        for (let i = 0; i < password.length; i++) {
            stars += '*';
        }

        return stars;
    }


    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <TextField
                id="userNameInput"
                label="User Name"
                variant="filled"
                style={{ width: '50%' }}
                onChange={(e) => setUserName(e.target.value)}
            >
            </TextField>

            <TextField
                id="passwordInput"
                label="Password"
                variant="filled"
                type="password"
                style={{ width: '50%', marginTop: '0.5%' }}
                onChange={(e) => setPassword(e.target.value)}
            >
            </TextField>

            <h2>{userName}</h2>
            <h2>{flag ? password : makeStars()}</h2>

            <Button variant="contained" style={{ marginTop: '10%' }} onClick={() => setFlag(!flag)}>Show Password</Button>

        </Grid>

    )
}



ReactDOM.render(<App />, document.getElementById('root'));


// class App extends React.Component {
//     state = {
//         username: '',
//         password: '',
//         flag: false,
//     }

//     handleUserName = (e) => {
//         this.setState({
//             username: e.target.value,
//         });
//     }

//     handlePassword = (e) => {
//         let passwordVals = e.target.value;

//         this.setState({
//             password: passwordVals,
//         });
//     }

//     handleClick = () => {
//         let updated = this.state.flag;

//         this.setState({
//             flag: !updated,
//         })

//     }

//     makeStars = () => {
//         let stars = '';

//         for (let i = 0; i < this.state.password.length; i++) {
//             stars += '*';
//         }

//         return stars;
//     }

//     render() {


//         return (
//             <Grid container direction="column" justify="center" alignItems="center">

//                 <TextField
//                     id="userNameInput"
//                     label="User Name"
//                     variant="filled"
//                     style={{ width: '50%' }}
//                     onChange={(e) => this.handleUserName(e)}
//                 >
//                 </TextField>

//                 <TextField
//                     id="passwordInput"
//                     label="Password"
//                     variant="filled"
//                     type="password"
//                     style={{ width: '50%', marginTop: '0.5%' }}
//                     onChange={(e) => this.handlePassword(e)}
//                 >
//                 </TextField>

//                 <h2>{this.state.username}</h2>
//                 <h2>{this.state.flag ? this.state.password : this.makeStars()}</h2>

//                 <Button variant="contained" style={{ marginTop: '10%' }} onClick={this.handleClick}>Show Password</Button>
//             </Grid>
//         )
//     }
// }



