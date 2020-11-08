import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


const Login = lazy(() => import('./pages/Login'));
const homeadmin = lazy(() => import('./pages/Admin/home'));
const Home = lazy(() => import('./pages/home'));


 function routes(){
     return (
         <BrowserRouter>
         <Suspense fallback={<div></div>}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/admin/home" component={homeadmin} />
            </Switch>
            </Suspense>
         </BrowserRouter>
     );
 }

 export default routes;
