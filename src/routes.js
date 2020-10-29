import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
 import Login from './pages/Login';
 import homeadmin from './pages/Admin/home';




 function routes(){
     return (
         <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/admin/home" component={homeadmin} />
            </Switch>
         </BrowserRouter>
     );
 }

 export default routes;
