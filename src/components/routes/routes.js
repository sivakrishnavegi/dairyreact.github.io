import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../layout/home/home';
import milkProducts from '../layout/products/milkProducts/milkProducts';
import milkProductsDetails from '../layout/products/milkProducts/productDetails'
import chairman from '../layout/mangement/chairman'
import boardMembers from '../layout/mangement/boardMembers'
import parlourOutlet from '../layout/location/parlourOutlet'
import careers from '../../components/carrers/carrers'
import login from '../../components/authentication/login/login'
import customerDashboard from '../../components/dashboard/customer/Customerdashboard'
import createAnnouncement from '../annoucements/createAnnouncements'
import raiseComplaint from '../dashboard/customer/complaints/raiseComplaint';
import viewQuery from '../dashboard/customer/complaints/viewQuery'
import signup from '../../components/authentication/signup/signup'
import  SpellInput from '../../components/dashboard/customer/complaints/test'
import MaterialTableDemo from '../../components/dashboard/customer/complaints/test3'
import QueryMainComponent from '../dashboard/customer/complaints/QueryMainComponent'
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/milkProducts' component={milkProducts} />
        <Route path='/milkProductDetails' component={milkProductsDetails} />
        <Route path='/aboutChairman' component={chairman} />
        <Route path='/boardMembers' component={boardMembers} />
        <Route path='/parlourOutlet' component={parlourOutlet} />
        <Route path='/carrers' component={careers} />
        <Route path='/login' component={login} />
        <Route path='/signup' component={signup} />
        <Route path='/dashboard' component={customerDashboard} />
        <Route path='/createAnnoucement' component={createAnnouncement} />
        <Route path='/raiseQuery' component={raiseComplaint} />
        <Route path='/ViewQuery' component={viewQuery} />
     
 
        <Route path='/QueryMainComponent' component={QueryMainComponent} />

        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
      </Switch>
    );
  }
}

export default Routes;
