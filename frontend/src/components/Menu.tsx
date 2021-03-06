import { Button, MenuItem, Menu } from '@material-ui/core';
import React from 'react';

export default function SupMenu(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (e:any) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };  

    return(  
        <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Menu
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </div>
    );
}