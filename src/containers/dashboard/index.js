import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../scoreseekr.css';

import { Container, Card, CardBody, Row, Col } from 'reactstrap';


class Dashboard extends Component {
  render() {
    return (
          <Card>
            <CardBody>
              <Row>
                <Col xs="6">
                  <h1 className="text-center">This is a functioning app</h1>
                </Col>
              </Row>
            </CardBody>

          </Card>
    );
  }
}

export default Dashboard;
