import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export function MiniProfile ({loggedinUser}) {

    return <section className="mini-profile">
<div className="profile-username flex space-around">
    <img src={loggedinUser.imgUrl}/>
    <h4>{loggedinUser.fullname}</h4>
</div>
<div className="performance-stats flex column">
    <div className="flex">
        response rate
    </div>
    <div className="flex">
        response rate
    </div>
    <div className="flex">
        response rate
    </div>
    <div className="flex">
        response rate
    </div>
</div>
    </section>
} 