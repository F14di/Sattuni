import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  fixedHeader,
  ...rest
}) => {

  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout fixedHeader={fixedHeader}>
          <Component {...props} />
        </Layout>
      )} />
  );
}

export default AppRoute;