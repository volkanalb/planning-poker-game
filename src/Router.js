import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { About, Login } from './components';
import { Home, Preview } from './containers';
import { provider } from './shared/socket';

const Router = props => {
  const withComponent = provider(props.socket);

  return (
    <BrowserRouter>
      <div className="panel">
        <Route exact path='/' component={withComponent(Home)} />
        <Route path='/cards/:card' component={withComponent(Preview)} />
        <Route path='/about' component={withComponent(About)} />
        <Route path='/login' component={withComponent(Login)} />
        <Route path='/settings' component={withComponent(Home)} />
      </div>
    </BrowserRouter>
  )
};

export default Router;