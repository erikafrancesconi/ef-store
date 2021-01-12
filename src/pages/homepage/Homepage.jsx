import React from 'react';
import Item from "../../components/menu-item/MenuItem";

import hops from './images/hops.jpg';
import blonde from './images/blonde.jpg';
import lager from './images/lager.jpg';
import red from './images/red.jpg';
import weiss from './images/weiss.jpg';
import stout from './images/stout.jpg';
import sour from './images/sour.jpg';
import barley from './images/barley.jpg';
import gluten from './images/gluten.jpg';
import special from './images/special.jpg';

import './Homepage.css';

const HomePage = () => {
  const beers = [
    {
      id: 1,
      title: 'Luppolate',
      img: hops
    },
    {
      id: 2,
      title: 'Bionde',
      img: blonde
    },
    {
      id: 3,
      title: 'Ambrate e Rosse',
      img: red
    },
    {
      id: 4,
      title: 'Blanche e Weiss',
      img: weiss
    },
    {
      id: 5,
      title: 'Lager',
      img: lager
    },
    {
      id: 6,
      title: 'Porter e Stout',
      img: stout
    },
    {
      id: 7,
      title: 'Sour, Gose e Lambic',
      img: sour
    },
    {
      id: 8,
      title: 'Barley Wine',
      img: barley
    },
    {
      id: 9,
      title: 'Gluten Free',
      img: gluten
    },
    {
      id: 10,
      title: 'Speciali',
      img: special
    },
  ];
  
  return (
  <div className='homepage'>
    <ul className='directory-menu'>
      { beers.map(({title, id, img}) => <Item name={title} key={id} img={img} />) }
    </ul>
  </div>
)};

export default HomePage;