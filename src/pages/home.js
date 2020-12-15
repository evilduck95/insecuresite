import React, { useCallback } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import FrankyNavbar from '../components/FrankyNavbar';

const HomePage = () => {
    
    const { keycloak } = useKeycloak();

    return (
        <div>
            <FrankyNavbar/>
            <div  className="background">
                <div className="blurred"></div>
            </div>
        </div>
    )

};

export default HomePage;