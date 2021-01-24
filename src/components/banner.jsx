import React from 'react';
import { Button } from '@material-ui/core';
import "../css/banner.css"
const Banner = () => {
    return ( 
        <div className="banner__container">
            <div className="banner__poster">
                <h5>Find your next destination castle</h5>
                <p>Créez des expériences mémorables pour
                 les voyageurs et gagnez de l'argent pour vivre vos
                  passions.</p>
                <Button variant="outlined" className="bt__explore">explore more</Button>
            </div>
        </div>
     );
}
 
export default Banner;