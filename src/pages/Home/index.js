import React from 'react';
import Menu from '../../components/Menu';
import data from '../../data/data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
// import { element } from 'prop-types';

function Home() {
  const carousels = [];
  const lastCategory = data.category.length - 1;
  const lastVideo = data.category[lastCategory].videos.length - 1;

  data.category.forEach(element => {
    carousels.push(<Carousel category={element}/>);
  });

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={data.category[lastCategory].videos[lastVideo].title}
        url={data.category[lastCategory].videos[lastVideo].url}
        videoDescription = {''}
      />

      {carousels}

      <Footer />
    </div>
  );
}

export default Home;
