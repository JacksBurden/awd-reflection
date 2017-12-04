import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Header = (props) => {
  return (<Row>
            <Col lg={2}>
              <Button onClick={props.callback} bsStyle="success" bsSize="large"> See Goals </Button>
            </Col>
            <Col lg={10}>
              <header className="page-header"> Advanced Writing Learning Goals Checklist </header>
            </Col>
          </Row>
  );
}

export default Header;
