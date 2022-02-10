import React from 'react';
import {Grid,Paper,Avatar, TextField, Button, Typography,Link} from '@material-ui/core';
//import { Button, TextField } from '@material-ui/core';//
import loginvalidation from './loginvalidation';
import { LockOutlinedIcon } from '@material-ui/icons';
//import LockIcon from '@mui/icons-material/Lock';
//port LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login(props) {
    const paperStyle={padding :20,height :'70vh',width :200,margin:"20px,auto"}

    return (
        <div>
            <Grid align='center'>
                <Paper elevation={10} style={paperStyle}>
                <Avatar>

            </Avatar>
<h2></h2>Log In

<TextField  label="" placeholder='Enter UserName' variant="outlined">
</TextField><br></br>
<br></br>
<TextField  label="" placeholder='Enter Password' variant="outlined">
</TextField><br></br>
<br></br>
<Button type='submit' color='primary' variant="contained"width={300}>Sign In</Button>
<Typography>
    <Link a="#">
        Forgot Password?
    </Link>
</Typography>
<Typography>Do you have an account?
    <Link a="Signup.js">
        SignUp
    </Link>
</Typography>
                </Paper>
                
            </Grid>
             
        </div>
    );
}

export default Login;
