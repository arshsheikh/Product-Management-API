import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductCreatePage from './components/ProductCreatePage';
import ProductListPage from './components/ProductListPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/create" component={ProductCreatePage} />
        <Route path="/product/list" component={ProductListPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
}

export default App;
