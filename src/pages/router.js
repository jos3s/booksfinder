import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import { Book } from './Book';
import PageNotFound from './PageNotFound';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/books/:id" component={Book} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
