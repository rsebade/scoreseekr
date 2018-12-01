import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
// import ReactGA from 'react-ga';

import logo from '../../logo.svg';
import '../../scoreseekr.css';

import { Container, Row, Col, Alert } from 'reactstrap';

import Dashboard from '../dashboard';

import '../../constants/routes';

class App extends Component {

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
          <Container className="container__wrapper">
            <Route
              exact
              path='/'
              render={props => {
                    return <Dashboard {...props} {...this.props} />;
              }}
            />

          </Container>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
