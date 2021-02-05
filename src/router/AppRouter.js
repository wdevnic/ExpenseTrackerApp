import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../component/ExpenseDashboardPage';
import Header from '../component/Header';
import AddExpensePage from '../component/AddExpensePage';
import EditExpensePage from '../component/EditExpensePage';
import HelpPage from '../component/HelpPage';
import NotFoundPage from '../component/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/help" component={HelpPage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>      
 </BrowserRouter>
);

export default AppRouter;
