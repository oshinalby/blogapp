import React from 'react';
import {Grid,Paper,Avatar, TextField, Button, Typography,Link} from '@material-ui/core';
//import { Button, TextField } from '@material-ui/core';//

import { LockOutlinedIcon } from '@material-ui/icons';
//import LockIcon from '@mui/icons-material/Lock';
//port LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Signup(props) {
    const paperStyle={padding :20,height :'70vh',width :200,margin:"20px,auto"}

    return (
        <div>
            <Grid align='center'>
                <Paper elevation={10} style={paperStyle}>
                <Avatar>

            </Avatar>
<h2></h2>SignUp

<TextField  label="" placeholder='Enter UserName' variant="outlined">
</TextField><br></br>
<br></br>
<TextField  label="" placeholder='Enter Password' variant="outlined">
</TextField><br></br>
<br></br>
<TextField  label="" placeholder='Confirm Password' variant="outlined">
</TextField><br></br>
<br></br>
<TextField  label="" placeholder='Enter Mobilenumber' variant="outlined">
</TextField><br></br>
<br></br>
<Button type='submit' color='primary' variant="contained"width={100}>Sign UP</Button>



                </Paper>
                
            </Grid>
             
        </div>
    );
}

export default Signup;
