import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import carousel1 from './images/carousel1.jpg'
import carousel2 from './images/carousel2.jpg'
import carousel3 from './images/carousel3.png'


const items = [
  {
    src: carousel1,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: carousel2,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: carousel3,
    altText: 'Slide 3',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;