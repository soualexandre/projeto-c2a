import React , {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Login = lazy( () => import('./pages/Login/index'))

const Routes = () => (
<Router>
    <Suspense fallback={<div></div>}>
        <Switch>
           <Route path="/" exact component={Login} />
        </Switch>
    </Suspense>
</Router>
)

 export default Routes;
