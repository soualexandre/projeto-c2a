import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProgressBar from './Components/circularProgress'

const Login = lazy(() => import('./pages/Login'));
const homeadmin = lazy(() => import('./pages/Admin/home'));
const Home = lazy(() => import('./pages/home'));



 function Routes(){
     return (
         <Router>
         <Suspense fallback={<div className="mt-5 pt-5"><ProgressBar/></div>}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login"  component={Login} />
                <Route path="/admin/home" component={homeadmin} />
            </Switch>
            </Suspense>
         </Router>
     );
 }

 export default Routes;
