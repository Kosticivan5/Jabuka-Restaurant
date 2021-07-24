import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Divider, Slider } from 'antd';
import './NotFoundStyle.css';
import {
  NotFoundStyle,
  NotFoundText,
  NotFoundOne,
  NotFoundBtn,
  NotFoundContainer,
} from '../../elements/NotFoundStyle/index ';
import Error from '../../elements/Error/index ';

const NotFound = () => (
  <>
    {/* <Row>
      <Col span={6}>col-12</Col>
      <Col span={12}>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        col-12
      </Col> */}
    {/* <Col span={12}> */}
    {/* <div>
      <div className="shopping-list">
        <h1>Shopping List for</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    </div> */}

    {/* </Col> */}
    {/* </Row> */}

    {/* 404 ERROR */}
    <Row>
      <Col span={24} style={{ textAlign: 'center' }}>
        <NotFoundContainer>
          <NotFoundStyle>404</NotFoundStyle>
          <NotFoundText>Oooops!!</NotFoundText>
          <NotFoundOne>that page doesn't exist or is unavailable</NotFoundOne>

          <Button className="btn-style" type="primary" size="large">
            <Link to="/">
              <NotFoundBtn>Go Back to Home</NotFoundBtn>
            </Link>
          </Button>
        </NotFoundContainer>
      </Col>
      <Col></Col>
    </Row>
    <Divider orientation="center" plain>
      New AntD
    </Divider>
    <Row gutter={[24, 24]}>
      <Col span={6}>neSTO</Col>
      <Col span={6}>neSTO</Col>
      <Col span={6}>neSTO</Col>
      <Col span={6}>neSTO</Col>

      <Col span={6}>neSTO</Col>
      <Col span={6}>neSTO</Col>
      <Col span={6}>neSTO</Col>
      <Col span={6}>neSTO</Col>

      <Col span={6}>neSTO</Col>
      <Col span={6}>neSTO</Col>
      <Col span={6}>neSTO</Col>
      <Col span={6}>neSTO</Col>
    </Row>
  </>
  // GRID
);

export default NotFound;
