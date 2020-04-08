import React from 'react';
import 'materialize-css';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import news from '../../../assets/news.jpg';
import shop from '../../../assets/shop.jpg';
import stats from '../../../assets/stats.jpg';

import Background from '../../../assets/background';

const Cards = () => (
  <Row>
    <Col s={12} m={12} l={4}>
      <Card
        actions={[
          <a key="1" href="http://stats.mnlhl.com/">Click Here!</a>
        ]}
        className="blue-grey darken-1 hoverable"
        textClassName="white-text"
        header={<CardTitle image={stats}></CardTitle>}
        title="Stats and Schedule">
        Statistics, schedule, and scores can be found here
      </Card>
    </Col>
    <Col s={12} m={12} l={4}>
      <Card
        actions={[
          <a key="1" href="http://news.mnlhl.com/">Read Up!</a>
        ]}
        className="blue-grey darken-1 hoverable"
        textClassName="white-text"
        header={<CardTitle image={news}></CardTitle>}
        title="Monday Night Lights Hockey Network">
        Your best source for Monday Night Lights news, rumors, analysis, stats and recaps, written by players, for players.
      </Card>
    </Col>
    <Col s={12} m={12} l={4}>
      <Card
        actions={[
          <a key="1" href="http://shop.mnlhl.com/">Shop Now!</a>
        ]}
        className="blue-grey darken-1 hoverable"
        textClassName="white-text"
        header={<CardTitle image={shop}></CardTitle>}
        title="MNL Gear Shop">
        Your one-stop spot for all your Monday Night Lights gear!
      </Card>
    </Col>
  </Row>
);

export default Cards;
