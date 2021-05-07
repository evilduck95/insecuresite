import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import Jeffbot from '../pages/jeffbot';
import UploadPage from '../pages/uploader';
 
export const AppRouter = () => {
    
    return (
        <Router>
            <Route exact path='/' component={HomePage}/>
            <Route path='/jeffbot' component={Jeffbot}/>
            <Route path='/upload' component={UploadPage}/>
            {/* <Route path='/login' component={LoginPage}/> */}
        </Router>
    )
}