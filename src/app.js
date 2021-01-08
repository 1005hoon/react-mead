import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => {
  return <div>Expensify Dashboard Component</div>;
};

const AddExpensePage = () => {
  return <div>Add Expense Component</div>;
};

const EditExpensePage = () => {
  return <div>Edit Expense Component</div>;
};

const HelpPage = () => {
  return <div>Help Page Component</div>;
};

const NotFoundPage = () => {
  return (
    <div>
      404 - <Link to="/">Go HOme</Link>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" exact={true} activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  );
};

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.querySelector("#root"));
