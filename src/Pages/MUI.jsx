import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Mui() {
    return(
    <>
        <Button variant="contained" startIcon={<ShoppingCartIcon/>}  >Hello World</Button>

    </>);
}

export default Mui
